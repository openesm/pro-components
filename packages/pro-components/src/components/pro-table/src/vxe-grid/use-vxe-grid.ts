/**
 * VxeGird 配置
 * https://vxetable.cn/#/grid/api
 */

import type { VxeGridProps, VxeTablePropTypes } from 'vxe-table'
import type { SdProTableState, SdProTableDefineTypes } from '../types'
import type { SdProTableProps } from '../pro-table'

import { computed } from 'vue'
import { toInt, toPrice } from '../tools'

export function useVxeGrid(
    props: SdProTableProps,
    state: SdProTableState,
) {
    // grid 配置
    const grid_opts$ = computed(() => {
        return {
            border            : props.border,
            stripe            : props.stripe,
            height            : props.height === 'auto' ? undefined : 'auto',
            size              : 'mini',
            align             : props.align,
            headerAlign       : props.headerAlign,
            footerAlign       : props.footerAlign,
            footerMethod      : getFooterMethod as any,
            showFooter        : props.showAggregates ?? true,
            showOverflow      : props.showOverflow,
            showHeaderOverflow: props.showHeaderOverflow,
            showFooterOverflow: props.showFooterOverflow,
            rowStyle          : props.rowStyle,
            rowClassName      : props.rowClassName,
            cellStyle         : props.cellStyle,
            cellClassName     : props.cellClassName,
            mergeCells        : props.mergeCells,
            spanMethod        : props.spanMethod,
            scrollY           : {
                enabled: props.enableScrollY && !props.enableDargSort,
                gt     : 0,
                // mode   : 'wheel',
                oSize  : 10,
            },
            columnConfig: {
                resizable: true, // 可调整列宽
                isHover  : true,
                ...props.columnConfig,
            },
            rowConfig: {
                useKey   : !!props.rowKey,
                keyField : props.rowKey,
                height   : props.rowHeight ?? 36, // 行高
                isCurrent: true,
                isHover  : true,
                ...props.rowConfig,
            },
            filterConfig: { remote: true }, // 不使用内置的 filter 处理
            radioConfig : {
                highlight: true,
                strict   : true, // 严格模式，选中后不能取消
                ...props.radioConfig,
            },
            checkboxConfig: {
                strict    : true, // 严格模式，数据为空或全部禁用时，列头复选框不允许操作
                highlight : true,
                showHeader: true,
                checkField: '__row_checked__',
                ...props.checkboxConfig,
            },
            menuConfig: {
                body     : { options: [] },
                className: 'sd-pro-table-menu-wrap',
            },
            keyboardConfig: { isArrow: true }, // 开启方向键盘导航
            editConfig    : {
                enabled: props.enableEdit,
                trigger: 'dblclick',
                ...props.editConfig,
            },
            seqConfig: { seqMethod: genSeq }, // 结合分页器生成序列号
            ...props.gridConfig,
        } as VxeGridProps
    })

    // 生成序列号 (支持分页模式)
    function genSeq({ rowIndex }: { rowIndex: number }) {
        return props.enablePager ? (state.page_index - 1) * state.page_size + rowIndex + 1 : rowIndex + 1
    }

    // 底部聚合函数方法
    function getFooterMethod({ columns, data }: Parameters<VxeTablePropTypes.FooterMethod>[0]) {
        /**
         * 底部聚合函数行，当列配置了相应的聚合函数，就会在底部显示相应的聚合函数计算出的值
         * 默认会检测 “数值列” 及 “金额列” 默认使用 “合计”
         */
        const map = new Map<SdProTableDefineTypes.AggregateType, (string | number)[]>([
            ['count', ['总计']],
            ['sum'  , ['合计']],
            ['max'  , ['最大值']],
            ['min'  , ['最小值']],
            ['avg'  , ['平均值']],
        ])

        // 统计行
        const count = (data: any[]) => data.length

        // 统计和
        const sum = (data: any[], id: string) => {
            let count = 0
            data.forEach((item) => { count += Number(item[id]) || 0 })
            return count
        }

        // 最大数
        const max = (data: any[], id: string) => Math.max(...data.map(item => Number(item[id])))

        // 最小数
        const min = (data: any[], id: string) => Math.min(...data.map(item => Number(item[id])))

        // 平均数
        const avg = (data: any[], id: string) => {
            let count = 0
            data.forEach((item) => { count += Number(item[id]) })
            return +(count / data.length).toFixed(2)
        }

        /**
         * tips: columns 默认是压平的，不含分组列
         */
        columns.forEach((col, colIdx) => {
            // 取得列自定义存储参数
            const params = (col.params || {}) as SdProTableDefineTypes.ColumnInfoParmas

            // 取得对应列的聚合函数配置
            const aggregates = (params.aggregates || []) as SdProTableDefineTypes.AggregateType[]
            if ( !aggregates ) return

            // 格式化金额、数值
            let format = toInt
            if (['money', 'price'].includes(params?.renderType)) {
                format = (val: number) => `￥${ toPrice(val) }`
            }

            aggregates.forEach((type) => {
                switch (type) {
                    case 'count': return map.get('count')![colIdx] = count(data)
                    case 'sum'  : return map.get('sum'  )![colIdx] = format(sum(data, col.field))
                    case 'max'  : return map.get('max'  )![colIdx] = format(max(data, col.field))
                    case 'min'  : return map.get('min'  )![colIdx] = format(min(data, col.field))
                    case 'avg'  : return map.get('avg'  )![colIdx] = format(avg(data, col.field))
                }
            })
        })

        // 过滤掉无聚合函数配置的行
        return [...map.values()].filter(list => list.length > 1).map(list => list.map(item => item || '-'))
    }

    return {
        grid_opts$,
    }
}
