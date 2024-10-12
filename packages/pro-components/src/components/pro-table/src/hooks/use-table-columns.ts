import type { SdProTableContext, SdProTableDefineTypes } from '../types'
import type { SdProTableProps } from '../pro-table'
import type { VxeTableDefines, VxeColumnSlotTypes } from 'vxe-table'

import { VALUE_TYPE } from '../config'
import { h          } from 'vue'
import { ElIcon     } from 'element-plus'
import { Rank       } from '@element-plus/icons-vue'
import { parseTableCols, loadColumnByCache } from '../tools'
import { isString, isBoolean, isFunction, isObject, omitBy, isUndefined } from 'lodash-es'

import RowActions   from '../components/RowActions.vue'   // 行操作列
import ColumnFilter from '../components/ColumnFilter.vue' // 列筛选器

export const useTableColumns = ($proTable: SdProTableContext) => {
    // 初始化列配置
    function initColumns() {
        const props = $proTable.props
        const state = $proTable.state

        // 取得渲染列
        const visible_columns = loadColumnByCache(props.cacheConfig) || []
        const cols_map        = {} as Record<string, VxeTableDefines.ColumnOptions>
        const cols            = loadColumn(props, cols_map)
        setupSeqColumn(cols, cols_map) // 设置序号列

        const all_data_column_ids    = Object.keys(cols_map) // 全部列编码
        const def_visible_column_ids = Object.values(cols_map).filter(c => c.visible !== false).map(c => c.field!) // 默认显示列编码
        let visilbe_data_column_ids  = [...def_visible_column_ids]

        // 如有配置显示列设置，隐藏不显示的列
        if (visible_columns.length) {
            // 隐藏不显示的列
            Object.values(cols_map).forEach((c) => {
                if (c.field) {
                    c.visible = visible_columns.includes(c.field)
                }
            })

            visilbe_data_column_ids = all_data_column_ids.filter(id => visible_columns.includes(id))
        }

        setupExpandColumn(cols)     // 设置展开列
        setupDargSortColumn(cols)   // 设置拖拽排序列
        setupRadioColumn(cols)      // 设置单选框列
        setupCheckboxColumn(cols)   // 设置复选框列
        setupOperationsColumn(cols) // 设置操作列

        state.columns                = cols
        state.columns_map            = cols_map
        state.all_data_column_ids    = all_data_column_ids
        state.def_visible_column_ids = def_visible_column_ids

        loadSearchColumnIds(visilbe_data_column_ids)
    }

    // 读取可查询的列
    function loadSearchColumnIds(visible_ids: string[]) {
        const column_map = $proTable.state.columns_map
        const columns    = visible_ids.map(id => column_map[id])

        const ids = [] as string[]
        columns.forEach((c) => {
            if (!c || !c.field) return

            // 不可被搜索
            const params = c.params as SdProTableDefineTypes.ColumnInfoParmas
            if (params.searchable === false) return

            // 解析数据列 (当前列 field 可能并非真实存在的)
            const resolveColumns = params.resolveColumns || []
            if (resolveColumns.length) {
                resolveColumns.forEach((item) => {
                    if (item.searchable !== false && !ids.includes(item.id)) {
                        ids.push(item.id)
                    }
                })
            } else if (!ids.includes(c.field)) {
                ids.push(c.field)
            }
        })

        $proTable.state.search_column_ids = ids
    }

    // 设置序号列
    function setupSeqColumn(
        cols: VxeTableDefines.ColumnOptions[],
        map: Record<string, VxeTableDefines.ColumnOptions>,
    ) {
        const props = $proTable.props
        // if (!cols.length || !props.enableSeq) return
        if (!cols.length) return

        const col: VxeTableDefines.ColumnOptions = {
            type   : 'seq',
            field  : '$seq',
            title  : '#',
            width  : 48,
            align  : 'left',
            visible: false,
            params : { exportable: false },
            ...props.seqColumnConfig,
        }
        map['$seq'] = col
        cols.unshift(col)
    }

    // 设置展开行列
    function setupExpandColumn(cols: VxeTableDefines.ColumnOptions[]) {
        const props = $proTable.props
        const slots = $proTable.slots
        if (!cols.length || !props.enableExpand) return

        cols.unshift({
            type  : 'expand',
            width : 60,
            align : 'left',
            slots : { content: slots.expand },
            params: { exportable: false },
            ...props.expandColumnConfig,
        })
    }

    // 设置拖拽排序列
    function setupDargSortColumn(cols: VxeTableDefines.ColumnOptions[]) {
        const props = $proTable.props
        if (!cols.length || !props.enableDargSort) return

        cols.unshift({
            title: '拖动排序',
            width: 80,
            slots: {
                default: () => [
                    h(ElIcon, { class: 'drag', style: 'cursor: move;', size: 16 }, {
                        default: () => h(Rank),
                    }),
                ],
            },
            params: { exportable: false },
            ...props.sortColumnConfig,
        })
    }

    // 设置单选框列
    function setupRadioColumn(cols: VxeTableDefines.ColumnOptions[]) {
        const props = $proTable.props
        if (!cols.length || !props.enableReadio) return

        cols.unshift({
            type  : 'radio',
            title : '单选',
            align : 'left',
            width : 60,
            params: { exportable: false },
            ...props.radioColumnConfig,
        })
    }

    // 设置复选框列
    function setupCheckboxColumn(cols: VxeTableDefines.ColumnOptions[]) {
        const props = $proTable.props
        if (!cols.length || !props.enableCheckbox) return

        cols.unshift({
            type  : 'checkbox',
            title : '多选',
            align : 'left',
            width : 60,
            params: { exportable: false },
            ...props.checkboxColumnConfig,
        })
    }

    // 设置操作列
    function setupOperationsColumn(cols: VxeTableDefines.ColumnOptions[]) {
        const props = $proTable.props
        if (!cols.length || !(props.operations || []).length) return
        cols.push({
            title       : '操作',
            align       : 'center',
            width       : 120,
            showOverflow: false,
            resizable   : false,
            fixed       : 'right',
            slots       : { default: params => [h(RowActions, { data: props.operations!, params })] },
            params      : { exportable: false },
            ...props.operationsConfig,
        })
    }

    /** 加载列配置 */
    function loadColumn(
        props: Partial<SdProTableProps>,
        map: Record<string, VxeTableDefines.ColumnOptions>,
    ): VxeTableDefines.ColumnOptions[] {
        const cols       = isString(props.cols) ? parseTableCols(props.cols) : props.cols
        const colsConfig = props.colsConfig
        if ( !cols || !cols.length ) return []

        return cols.map((col) => {
            // 分组列
            if (col.children && col.children.length) {
                return {
                    ...getColumnGroupOptions(col),
                    children: loadColumn({ cols: col.children, colsConfig }, map),
                }
            } else {
                // 数据列
                const o = getColumnOptions({
                    ...col,
                    ...(colsConfig ? colsConfig[col?.id || ''] : {}), // 额外配置
                })

                if (o.field) map[o.field] = o

                return o
            }
        })
    }

    /** 初始化表头分组列配置 */
    function getColumnGroupOptions(col: SdProTableDefineTypes.ColumnOptions) {
        const c: VxeTableDefines.ColumnOptions = {
            field    : col?.id,
            title    : col?.name,
            width    : col?.width,
            minWidth : col?.minWidth,
            resizable: col?.resizable,
            visible  : col?.visible,
            fixed    : col?.fixed,
            params   : {},
            children : [],
        }
        return c
    }

    /** 初始化表头列配置 */
    function getColumnOptions(col: SdProTableDefineTypes.ColumnOptions) {
        // vxe-grid column 配置
        const c: VxeTableDefines.ColumnOptions = {
            field             : col?.id,
            title             : col?.name,
            width             : col?.width,
            minWidth          : col?.minWidth,
            resizable         : col?.resizable,
            visible           : col?.visible,
            fixed             : col?.fixed,
            align             : col?.align ?? 'center',
            headerAlign       : col?.headerAlign,
            footerAlign       : col?.footerAlign,
            showOverflow      : col?.showOverflow,
            showHeaderOverflow: col?.showHeaderOverflow,
            showFooterOverflow: col?.showFooterOverflow,
            className         : col?.className,
            headerClassName   : col?.headerClassName,
            footerClassName   : col?.footerClassName,
            sortable          : col?.sortable,
            sortBy            : col?.sortBy,
            sortType          : col?.sortType,
            formatter         : col?.formatter as any,
            // filterMethod      : col?.filterMethod as any,
            // filterMultiple    : col?.filterMultiple !== false,
            editRender        : undefined,
            slots             : omitBy({
            // v24.03.04 插槽补充
                default: col?.render        || col?.slots?.default,
                header : col?.renderHeader  || col?.slots?.header,
                footer : col?.renderFooter  || col?.slots?.footer,
                content: col?.renderContent || col?.slots?.content,
                edit   : col?.renderEdit    || col?.slots?.edit,
            }, isUndefined),
            params: {
                renderType         : 'text'                         , // 单元格渲染类型
                renderParams       : col?.renderParams || {}        , // 单元格渲染参数
                filterType         : 'text'                         , // 过滤器渲染类型
                valueEnums         : []                             , // 值枚举
                searchable         : isBoolean(col?.searchable) ? col.searchable : true, // 可检索
                filterable         : isBoolean(col?.filterable) ? col.filterable : true, // 可过滤
                conditionFilterable: isBoolean(col?.conditionFilterable) ? col.conditionFilterable : true,
                resolveColumns     : col.resolveColumns  ?? []      , // 解析列定义
                aggregates         : col?.aggregates     ?? []      , // 聚合函数定义
                formatter          : col?.formatter                 , // 格式化函数
                filterMethod       : col?.filterMethod              , // 自定义过滤方法
                exportable         : true                           , // 是否导出
            },
        }

        // 标题描述
        if (col.desc) c.titlePrefix = { content: col.desc }

        // 列筛选器配置
        if (col.id && col.filterable !== false) {
            c.filters       = [{ checked: false }]                           // 默认筛选未选中
            c.slots!.filter = params => [h(ColumnFilter, { params } as any)] // 自定义筛选器组件
        }

        // v23.09.22 编辑器配置
        if (col.editRender) {
            if (isString(col.editRender)) {
                c.editRender = { name: col.editRender, enabled: true }
            } else {
                c.editRender = { ...col.editRender }
            }
        }

        // 值枚举
        if (col?.valueEnums && Array.isArray(col?.valueEnums)) {
            c.params.valueEnums = col.valueEnums.map((item) => {
                if (isObject(item)) {
                    return { ...item, id: item.id ?? item.value, name: item.name ?? item.label }
                } else {
                    return { id: item, name: `${ item }` }
                }
            })
        }

        // 每个列都标识渲染类型
        const renderType = c.params.renderType = col.renderType || 'text'

        // 取得对应值类型的预设渲染函数及格式化函数
        const config = VALUE_TYPE[renderType]
        if (config) {
        // 如未自定义 render 函数，则使用内置渲染函数
            if (!isFunction(c.slots?.default) && isFunction(config.render)) {
                c.slots!.default = config.render
            }

            // 如未自定义格式化函数，则使用内置格式化函数
            if (!isFunction(c.formatter) && isFunction(config.formatter)) {
                c.formatter        = config.formatter
                c.params.formatter = config.formatter
            }
        }

        // 数字、金额、日期、日期时间 默认可排序
        switch (renderType) {
        /** 数字类型：不可统计则默认显示排序 */
            case 'index':
            case 'progress' : {
                c.sortType = 'number'
                c.sortable = col?.sortable ?? true

                if (!col.filterType) c.params.filterType = 'number'
                break
            }

            /** 数字类型：可统计则默认显示排序及右侧展示 */
            case 'number':
            case 'price' :
            case 'money' : {
                c.sortType          = 'number'
                c.sortBy            = c.field // v24.09.04 修正 formatter 格式化后排序错误
                c.sortable          = col?.sortable   ?? true
                c.align             = col?.align      ?? 'right'
                c.params.aggregates = col?.aggregates ?? ['sum']

                if (!col.filterType) c.params.filterType = 'number'
                break
            }

            /** 日期类型：默认显示排序 */
            case 'date'    :
            case 'datetime':
            case 'datetime-split': {
                c.sortable = col?.sortable ?? true

                if (!col.filterType) {
                    if (['datetime', 'datetime-split'].includes(renderType)) {
                        c.params.filterType = 'datetime'
                    } else {
                        c.params.filterType = 'date'
                    }
                }
                break
            }

            /** 图片类型 */
            case 'image': {
                if (col.searchable === undefined) {
                    c.params.searchable = false
                }
                if (col.filterable === undefined) {
                    c.filters = undefined
                    c.params.filterable = false
                }
            }
        }

        // v24.03.06 补充插槽 $proTable
        if (isFunction(c.slots?.default)) {
            const cb = c.slots!.default
            c.slots!.default = (params: VxeColumnSlotTypes.DefaultSlotParams) => {
                return cb({ ...params, $proTable } as any)
            }
        }

        return c
    }

    return {
        initColumns,
        loadSearchColumnIds,
    }
}
