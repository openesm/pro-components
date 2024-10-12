
import type { SdProTableFilterDefineTypes } from '../types'

import { NUMBER_VALUE_TYPE, FILTER_EMPTY_TEXT } from '../config'
import { isFunction } from 'lodash-es'

/** 获取列筛选器过滤的数据 */
export function getfilterDataByColumnFilters(rows: any[], column_filters: SdProTableFilterDefineTypes.FilterItem[]) {
    // 无过滤条件
    if (!column_filters.length) return

    return rows.filter((row) => {
        // 多列筛选需全部满足
        return column_filters.every(({ column, data }) => {
            return data.every((item) => {
                // 未应用筛选条件
                if (!item.is_apply) return true

                // 是否为数字列
                const isNumber = column.sortType === 'number' || NUMBER_VALUE_TYPE.includes(column.params.renderType)

                let cellValue = row[item.id] as string | number
                // 真实列
                if (item.id in row) {
                    cellValue = cellValue ?? (isNumber ? 0 : '')
                    // 虚拟列、则执行格式化函数取得结果进行比较
                } else if (isFunction(column.params.formatter)) {
                    cellValue = column.params.formatter({ row, column })
                }
                // 自定义筛选方法
                if (isFunction(column.params.filterMethod)) {
                    return column.params.filterMethod({ row, column, cellValue, filterOption: item })
                }

                // 内容筛选
                if (item.filter_mode === 'content') {
                    // 全部选中
                    if (item.content_data.is_all) return true

                    // 筛选为空的数据
                    const has_empty = item.content_data.valuex[FILTER_EMPTY_TEXT]
                    if (has_empty && (cellValue === '' || cellValue === '-')) return true

                    // 匹配数据
                    return item.content_data.values.length ? item.content_data.valuex[cellValue] : true
                } else {
                // 条件筛选
                    const d  = item.custom_data
                    const t1 = d.type1 || undefined
                    const t2 = d.type2 || undefined
                    const v1 = d.value1 ?? (isNumber ? 0 : '')
                    const v2 = d.value2 ?? (isNumber ? 0 : '')

                    if (!t1 && !t2) return true

                    const res1 = compareByType(cellValue, v1, t1)
                    const res2 = compareByType(cellValue, v2, t2)

                    return d.join_mode === 'and' ? (res1 && res2) : (res1 || res2)
                }
            })
        })
    })
}

// 指定类型比较值
export function compareByType(
    cv   : string | number,
    iv   : string | number,
    type?: SdProTableFilterDefineTypes.FilterconditionType,
) {
    if (!type) return true

    switch (type) {
        case 'EQUAL'                : return cv === iv                        // 相等
        case 'NOT_EQUAL'            : return cv !== iv                        // 不相等
        case 'LESS_THAN'            : return cv < iv                          // 小于
        case 'LESS_THAN_OR_EQUAL'   : return cv <= iv                         // 小于等于
        case 'GREATER_THAN'         : return cv > iv                          // 大于
        case 'GREATER_THAN_OR_EQUAL': return cv >= iv                         // 大于等于
        case 'CONTAINS'             : return  `${ cv }`.includes(`${ iv }`)   // 包含
        case 'DOES_NOT_CONTAIN'     : return !`${ cv }`.includes(`${ iv }`)   // 不包含
        case 'STARTS_WITH'          : return  `${ cv }`.startsWith(`${ iv }`) // 以开头
        case 'ENDS_WITH'            : return  `${ cv }`.endsWith(`${ iv }`)   // 以结尾
    }
}
