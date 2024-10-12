import type { VNode, Component, ComponentInternalInstance, SetupContext, ComputedRef } from 'vue'
import type { VxeTableDefines, VxeTablePropTypes, VxeColumnPropTypes, VxeGridInstance, VxeTableProps, VxeColumnSlotTypes } from 'vxe-table'
import type { SdProTableProps   } from './pro-table'
import type { ButtonProps       } from 'element-plus'
import type { SortableOptions as _SortableOptions } from 'sortablejs'
import type Sortable from 'sortablejs'

export type SdProTableState = {
    curr_tab                     : string | number
    tab_count_map                : Record<string, number>
    columns                      : VxeTableDefines.ColumnOptions[]               // grid 渲染列配置 (带分组)
    columns_map                  : Record<string, VxeTableDefines.ColumnOptions>
    all_data_column_ids          : string[]
    def_visible_column_ids       : string[]
    search_column_ids            : string[]                                 // 可搜索的列编码
    column_filters               : SdProTableFilterDefineTypes.FilterItem[] // 列过滤条件值
    full_rows                    : any[]                                    // 全部数据
    page_index                   : number                                   // 分页z器：当前页数
    page_size                    : number                                   // 分页器：当前一页行数
    search                       : string                                   // 搜索值
    search_loading               : boolean                                  // 搜索状态
    is_fullscreen                : boolean                                  // 是否最大化
    visible_export_dialog        : boolean                                  // 导出弹窗开关
    visible_column_setting_dialog: boolean                           // 列设置弹窗开关
    show_filter_panel: boolean  // v24.07.16
}

export type SdProTableEmits = [
    'sort-start',
    'sort-end',
    // ------------
    'filter-data-change',
    'visible-data-change',
    // ------------
    'header-tabs-change',
    'header-tabs-click',
    'header-button-click',
    'operation-click',
    'refresh',
    'search-change',
    'search-enter',
    'search-focus',
    'search-blur',
    'search-clear',
    'page-size-change',
    'page-index-change',
    'prev-click',
    'next-click',
    // ------------
    'radio-change',
    'checkbox-change',
    'checkbox-all',
    'checkbox-range-start',
    'checkbox-range-change',
    'checkbox-range-end',
    'filter-change',
    'filter-visible',
    'clear-filter',
    'toggle-row-expand',
    'cell-click',
    'cell-dbclick',
    'header-cell-click',
    'header-cell-dblclick',
    'current-change',
    'scroll',
    'zoom',
]

export interface SdProTableContext extends SdProTablePublichMethod {
    props          : SdProTableProps
    slots          : SetupContext['slots']
    attrs          : SetupContext['attrs']
    emit           : SetupContext<SdProTableEmits>['emit']
    state          : SdProTableState
    $state         : SdProTableState
    instance       : ComponentInternalInstance
    getVxeGrid     : () => VxeGridInstance | null | undefined
    getComputedMaps: () => {
        tabs_config$        : ComputedRef<SdProTableDefineTypes.HeaderTabsConfig>
        tools_config$       : ComputedRef<SdProTableDefineTypes.ToolsConfig>
        pager_config$       : ComputedRef<SdProTableDefineTypes.PagerConfig>
        quick_search_config$: ComputedRef<SdProTableDefineTypes.QuickSearchConfig>
        full_rows$          : ComputedRef<any[]>
        filter_rows$        : ComputedRef<any[]>
        visible_rows$       : ComputedRef<any[]>
    }
}

export type SdProTablePublichMethod = {
    clearSearch    : () => void
    clearAll       : () => void
    // ----------------
    setActiveTab   : (value: string | number) => void
    getActiveTab   : () => string | number
    setTabBadge    : (key: string | number, count: number) => void
    clearTabBadge  : () => void
    // ----------------
    reloadTableData: (rows: any[]) => void
    setTableData   : (rows: any[]) => void
    getTableData: () => ({
        full_data   : any[]
        filter_data : any[]
        visible_data: any[]
    })
    // ----------------
    showColumn      : (fieldOrColumn: any) => void
    hideColumn      : (fieldOrColumn: any) => void
    getColumnByField: (field: string) => void
    getColumns      : () => any[]
    getTableColumn: () => ({
        collectColumn: VxeTableDefines.ColumnInfo[]
        fullColumn   : VxeTableDefines.ColumnInfo[]
        visibleColumn: VxeTableDefines.ColumnInfo[]
        tableColumn  : VxeTableDefines.ColumnInfo[]
    })
    loadColumn                : (columns: (VxeTableDefines.ColumnInfo | VxeTableDefines.ColumnOptions)[]) => Promise<any>
    reloadColumns             : (columns: (VxeTableDefines.ColumnInfo | VxeTableDefines.ColumnOptions)[]) => Promise<any>
    refreshColumn             : () => Promise<any>
    loadSearchColumnIds       : (ids: string[]) => void
    // ----------------
    insert                    : (row: any | any[]) => void
    insertAt                  : (row: any | any[], rowIndex?: number) => void
    remove                    : (row: any) => void
    replaceRow                : (old_row: any, new_row: any) => void
    getRowIndex               : (row: any, rows?: any[]) => void
    setCurrentRow             : (row: any) => void
    clearCurrentRow           : () => void
    // ----------------
    setFilter                 : () => void
    clearFilter               : () => void
    // ----------------
    getRadioRecord            : () => any
    setRadioRow               : (row: any) => void
    clearRadioRow             : () => void
    clearRadioReserve         : () => void
    // ----------------
    getCheckboxRecords        : () => any[] | undefined
    setCheckboxRow            : (rows: any | any[], checked: boolean) => void
    setAllCheckboxRow         : (checked: boolean) => void
    toggleAllCheckboxRow      : () => void
    clearCheckboxRow          : () => void
    isAllCheckboxChecked      : () =>  boolean | undefined
    isAllCheckboxIndeterminate: () => boolean | undefined
    // ----------------
    setRowExpand              : (row: any, checked: boolean) => void
    setAllRowExpand           : (checked: boolean) => void
    toggleRowExpand           : (row: any) => void
    // ----------------
    scrollToTop               : () => void
    getScroll: () => ({
        virtualX  : boolean
        virtualY  : boolean
        scrollTop : number
        scrollLeft: number
    })
    clearScroll       : () => void
    refreshScroll     : () => void
    // ----------------
    toggleMaximize    : () => void
    maximize          : () => void
    revert            : () => void
    isMaximized       : () => boolean
    openExportSetting : () => void
    closeExportSetting: () => void
    openColumnSetting : () => void
    closeColumnSetting: () => void
    // ----------------
    initSortable      : () => void
    setSortableOption : (key: keyof Sortable.Options, value: any) => void
    getSortableOption : (key: keyof Sortable.Options) => any
    destroySortable   : () => void
}

// 类型定义
export namespace SdProTableDefineTypes {
    export type Align                = VxeTablePropTypes.Align
    export type HeaderAlign          = VxeTablePropTypes.HeaderAlign
    export type FooterAlign          = VxeTablePropTypes.FooterAlign
    export type ShowOverflow         = VxeTablePropTypes.ShowOverflow
    export type ShowHeaderOverflow   = VxeTablePropTypes.ShowHeaderOverflow
    export type ShowFooterOverflow   = VxeTablePropTypes.ShowFooterOverflow
    export type RowClassName         = VxeTablePropTypes.RowClassName
    export type RowStyle             = VxeTablePropTypes.RowStyle
    export type CellClassName        = VxeTablePropTypes.CellClassName
    export type CellStyle            = VxeTablePropTypes.CellStyle
    export type GridConfig           = VxeTableProps

    /** 顶部数据过滤 tab 项 */
    export interface HeaderTabItem {
        id       ?   : string | number
        name     ?   : string
        label    ?   : string
        value    ?   : string | number
        count    ?   : number
        disabled ?   : boolean
        [key: string]: any
    }

    export interface HeaderTabsConfig {
        showAll        ?: boolean          // 显示 “全部” 项
        allDefaultText ?: string           // 自定义 “全部” 文本
        allDefaultValue?: string | number  // 自定义 “全部” 选中值
        allPosition    ?: 'left' | 'right' // 自定义 “全部” 位置
        filter_id      ?: string           // 自动过滤列的 id （配置后则会启动自动过滤数据）
        filterMethod   ?: (params: { row: any; value: string | number }) => boolean // 自定义过滤方法
    }

    /** 顶部按钮配置 */
    export interface HeaderButtonItem {
        id       ?: string
        name      : string
        disabled ?: boolean | (() => boolean)
        hidden   ?: boolean | (() => boolean)
        handle   ?: (params: { $item: HeaderButtonItem; $proTable: SdProTableContext })=> void
        more     ?: boolean
        props    ?: Partial<Omit<ButtonProps, 'disabled'>>
    }

    export type ColumnConfig   = VxeTablePropTypes.ColumnConfig
    export type RowConfig      = VxeTablePropTypes.RowConfig
    export type RadioConfig    = VxeTablePropTypes.RadioConfig    /** 单选配置 */
    export type CheckboxConfig = VxeTablePropTypes.CheckboxConfig /** 多选配置 */
    export type EditConfig     = Omit<VxeTablePropTypes.EditConfig, 'enabled'>     /** 编辑配置 */

    /** 快速搜索配置 */
    export interface QuickSearchConfig {
        placeholder?: string
        width      ?: string | number
        remote     ?: boolean
        emptyText  ?: string
    }

    /** 工具栏配置 */
    export interface ToolsConfig {
        enableRefresh      ?: boolean
        enableFullscreen   ?: boolean
        enableExport       ?: boolean
        enableColumnSetting?: boolean
    }

    /** 分页器配置 */
    export interface PagerConfig {
        layout?: string
        sizes ?: number[]
        remote?: boolean
    }

    /** 缓存列配置 */
    export interface CacheConfig {
        key     : string // key
        version?: string // 版本号
        expire ?: number // 多久过期 单位: s
    }

    /** 拖拽排序配置 */
    export type BeforeDargSort = (params: { event: any; target: any; $sortable: Sortable; $proTable: SdProTableContext }) => boolean
    export interface SortableOptions extends _SortableOptions {}

    /** 行操作配置 */
    export interface OperationsConfig {
        title?: string
        width?: string | number
    }

    /** 行操作项配置 */
    export interface OperationItem<RowItem = any> {
        id      ?: string
        name     : string
        more    ?: boolean
        handle  ?: (params: OperationHandleParams<RowItem>) => void
        disabled?: ((params: OperationHandleParams<RowItem>) => boolean) | boolean
        hidden  ?: ((params: OperationHandleParams<RowItem>) => boolean) | boolean
    }

    /** 行操作函数回调参数 */
    export interface OperationHandleParams<RowItem = any> {
        $proTable   : SdProTableContext
        $item       : OperationItem<RowItem>
        row         : RowItem
        column      : VxeTableDefines.ColumnInfo
        $columnIndex: number
        $rowIndex   : number
    }

    type SlotParams<O, T>     = Omit<O, 'row'> & { row: T }
    type SlotMethodReturnType = Component[] | JSX.Element[] | VNode[] | string[]
    type DefaultSlotParams    = VxeColumnSlotTypes.DefaultSlotParams & { $proTable: SdProTableContext }
    type SlotDefault<T> = string | ((params: SlotParams<DefaultSlotParams, T>) => SlotMethodReturnType) | null
    type SlotContent<T> = string | ((params: SlotParams<VxeColumnSlotTypes.ContentSlotParams, T>) => SlotMethodReturnType) | null
    type SlotEdit<T>    = string | ((params: SlotParams<VxeColumnSlotTypes.EditSlotParams, T>) => SlotMethodReturnType) | null
    type ColumnSlots<T> = Omit<VxeColumnPropTypes.Slots, 'default' | 'content' | 'edit'> & {
        default: SlotDefault<T>
        content: SlotContent<T>
        edit   : SlotEdit<T>
    }

    /** 列配置 */
    export type ColumnOptions<RowItem = any>  = {
        id                  ?: VxeColumnPropTypes.Field                 // vxe - 列字段名
        name                ?: VxeColumnPropTypes.Title                 // vxe - 列标题
        desc                ?: string                                   // 列标题 tooltip 提示
        width               ?: VxeColumnPropTypes.Width                 // vxe - 列宽度
        minWidth            ?: VxeColumnPropTypes.MinWidth              // vxe - 列最小宽度
        resizable           ?: VxeColumnPropTypes.Resizable             // vxe - 列是否允许拖动列宽调整大小
        visible             ?: VxeColumnPropTypes.Visible               // vxe - 默认是否显示
        fixed               ?: VxeColumnPropTypes.Fixed                 // vxe - 将列固定在左侧或者右侧
        align               ?: VxeColumnPropTypes.Align                 // vxe - 列对齐方式
        headerAlign         ?: VxeColumnPropTypes.HeaderAlign           // vxe - 表头列的对齐方式
        footerAlign         ?: VxeColumnPropTypes.FooterAlign           // vxe - 表尾列的对齐方式
        showOverflow        ?: VxeColumnPropTypes.ShowOverflow          // vxe - 当内容过长时显示为省略号
        showHeaderOverflow  ?: VxeColumnPropTypes.ShowHeaderOverflow    // vxe - 当表头内容过长时显示为省略号
        showFooterOverflow  ?: VxeColumnPropTypes.ShowFooterOverflow    // vxe - 当表尾内容过长时显示为省略号
        className           ?: VxeColumnPropTypes.ClassName             // vxe - 给单元格附加 className
        headerClassName     ?: VxeColumnPropTypes.HeaderClassName       // vxe - 给表头的单元格附加 className
        footerClassName     ?: VxeColumnPropTypes.FooterClassName       // vxe - 给表尾的单元格附加 className
        sortable            ?: VxeColumnPropTypes.Sortable              // vxe - 是否允许列排序
        sortBy              ?: VxeColumnPropTypes.SortBy                // vxe - 只对 sortable 有效，指定排序的字段（使用的是值，非 format 格式化后的值）
        sortType            ?: VxeColumnPropTypes.SortType              // vxe - 排序的字段类型，比如字符串转数值等
        filterMultiple      ?: VxeColumnPropTypes.FilterMultiple        // vxe - 筛选条件可多选
        slots               ?: Partial<ColumnSlots<RowItem>>            // vxe - 列插槽配置
        editRender          ?: VxeColumnPropTypes.EditRender | string   // vxe - 编辑渲染
        children            ?: ColumnOptions<RowItem>[]                 // vxe - 分组列子项配置

        /** 扩展属性: 初始化后会存入 column.parmas 当中，用于扩展额外的列配置 ---------------------- */
        renderType          ?: RenderType                                        // 单元格渲染类型
        renderParams        ?: Record<string, any>                               // 单元格渲染参数
        filterType          ?: FilterType                                        // 列过滤器类型
        valueEnums          ?: ({ id?: string | number; name?: string; [k: string]: string | number | undefined })[] | string[] | number[]         // 列枚举值
        resolveColumns      ?: ResolveColumnOptions[]                            // 解析列（导出、检索、过滤都需要使用）
        aggregates          ?: AggregateType[]                                   // 聚合函数定义
        searchable          ?: boolean                                           // 可被搜索
        formatter           ?: FormatterMethod<RowItem>                          // 格式化函数
        filterable          ?: boolean                                           // 可被筛选
        conditionFilterable ?: boolean                                           // 可条件筛选
        filterMethod        ?: SdProTableFilterDefineTypes.FilterMethod<RowItem> // 筛选函数

        /** v24.03.04 新增一级渲染函数 */
        render              ?: SlotDefault<RowItem>               // 单元格渲染
        renderHeader        ?: VxeColumnPropTypes.Slots['header']
        renderFooter        ?: VxeColumnPropTypes.Slots['footer']
        renderContent       ?: SlotContent<RowItem>
        renderEdit          ?: SlotEdit<RowItem>
    }

    /** 初始化后的配置 */
    export type ColumnInfo = {
        type              : VxeColumnPropTypes.Type
        field             : VxeColumnPropTypes.Field
        title             : VxeColumnPropTypes.Title
        width             : VxeColumnPropTypes.Width
        minWidth          : VxeColumnPropTypes.MinWidth
        resizable         : VxeColumnPropTypes.Resizable
        visible           : VxeColumnPropTypes.Visible
        fixed             : VxeColumnPropTypes.Fixed
        align             : VxeColumnPropTypes.Align
        headerAlign       : VxeColumnPropTypes.HeaderAlign
        footerAlign       : VxeColumnPropTypes.FooterAlign
        showOverflow      : VxeColumnPropTypes.ShowOverflow
        showHeaderOverflow: VxeColumnPropTypes.ShowHeaderOverflow
        showFooterOverflow: VxeColumnPropTypes.ShowFooterOverflow
        className         : VxeColumnPropTypes.ClassName
        headerClassName   : VxeColumnPropTypes.HeaderClassName
        footerClassName   : VxeColumnPropTypes.FooterClassName
        sortable          : VxeColumnPropTypes.Sortable
        sortBy            : VxeColumnPropTypes.SortBy
        formatter         : FormatterMethod | undefined
        // filterMethod      : col?.filterMethod as any,
        // filterMultiple    : col?.filterMultiple !== false,
        slots             : VxeColumnPropTypes.Slots
        params            : ColumnInfoParmas
    }

    /** 自定义列信息 */
    export type ColumnInfoParmas = {
        // type            : RenderType
        renderType           : RenderType
        renderParams         : Record<string, any>
        filterType           : FilterType
        valueEnums           : ValueEnumsOptions[]
        resolveColumns       : ResolveColumnOptions[] // 解析列（导出、检索、过滤都需要使用）
        aggregates           : AggregateType[]        // 聚合函数定义
        filterable           : boolean
        conditionFilterable  : boolean
        searchable           : boolean
        formatter           ?: FormatterMethod
        filterMethod        ?: SdProTableFilterDefineTypes.FilterMethod
        exportable           : boolean
    }

    /** 转换后的列信息 */
    export type VxeColumnInfo = Omit<VxeTableDefines.ColumnInfo, 'params'> & { params: ColumnInfoParmas }

    /** 值枚举配置 */
    export type ValueEnumsOptions = { id: string | number; name: string; [k: string]: string | number | undefined }

    /** 解析列定义 */
    export type ResolveColumnOptions = {
        id                  : string
        name                : string
        formatter          ?: FormatterMethod
        searchable         ?: boolean
        filterable         ?: boolean
        conditionFilterable?: boolean
        filterType         ?: FilterType
    }

    /** 格式化函数 */
    export type FormatterMethod<RowItem = any> = ((params: { row: RowItem; column: VxeColumnInfo | ColumnInfo }) => string | number)

    /** 聚合函数类型 */
    export type AggregateType = 'count' | 'sum' | 'max' | 'min' | 'avg'

    /** 渲染类型 */
    export type RenderType =
        'sort'           |
        'enums-text'     |
        'enums-tag'      |
        'enums-status'   |
        'join'           |
        'join-divider'   |
        'multiline'      |
        'datetime-split' |
        'link'           |
        'image'          |
        'progress'       |
        'bankcard'       |
        'mobile'         |
        'password'       |
        'date'           |
        'datetime'       |
        'price'          |
        'money'          |
        'number'         |
        'index'          |
        'text'

    /** 值类型 */
    export type FilterType = 'text' | 'number' | 'date' | 'datetime'

}

export type SdProTableGlobalConfig = {
    cachePrefix?: string | (() => string)
}

// 筛选器定义
export namespace SdProTableFilterDefineTypes {
    // 筛选选项
    export interface FilterOptionItem {
        id  : string | number
        name: string
    }

    // 筛选条件操作数据类型
    export interface FilterItemData {
        id               : string
        title            : string
        filter_mode      : 'content' | 'custom'
        is_apply         : boolean  // 是否应用该筛选条件
        can_custom_filter: boolean // 是否可自定义筛选
        content_data: {
            is_all          : boolean
            is_indeterminate: boolean
            search          : string
            values          : (string | number)[]
            valuex          : Record<string, boolean>
            filters         : FilterOptionItem[]
        }
        custom_data: {
            render_type: 'text' | 'date' | 'datetime' | 'number'
            join_mode  : 'and' | 'or'
            type1      : FilterconditionType | undefined
            value1     : string | number | undefined
            type2      : FilterconditionType | undefined
            value2     : string | number | undefined
            filters    : FilterOptionItem[]
        }
    }

    /** 筛选方法 */
    export type FilterMethod<RowItem = any> = (params: {
        column      : SdProTableDefineTypes.VxeColumnInfo
        row         : RowItem
        cellValue   : any
        filterOption: FilterItemData
    }) => boolean

    /** 筛选类型 */
    export type FilterItem = {
        id    : number | string                     // 筛选条件列标识
        column: SdProTableDefineTypes.VxeColumnInfo // 当前列
        data  : FilterItemData[]
    }

    /** 筛选条件类型 */
    export type FilterconditionType =
    'EQUAL'                 | // 相等
    'NOT_EQUAL'             | // 不相等
    'LESS_THAN'             | // 小于
    'LESS_THAN_OR_EQUAL'    | // 小于或等于
    'GREATER_THAN'          | // 大于
    'GREATER_THAN_OR_EQUAL' | // 大于或等于
    'CONTAINS'              | // 包含
    'DOES_NOT_CONTAIN'      | // 不包含
    'STARTS_WITH'           | // 以开始
    'ENDS_WITH'               // 以结尾
}
