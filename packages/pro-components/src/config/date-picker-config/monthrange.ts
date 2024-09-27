import { genDateRange } from './helper'

export function getShortcuts() {
    return [
        genDateRange('本月'      , 0),
        genDateRange('最近六个月', 3600 * 1000 * 24 * 180),
        genDateRange('最近一年'  , 3600 * 1000 * 24 * 365),
    ]
}

export default {
    /** 选择范围时的分隔符 */
    rangeSeparator  : '至',
    /** 范围选择时开始月份的占位内容 */
    startPlaceholder: '开始月份',
    /** 范围选择时结束月份的占位内容 */
    endPlaceholder  : '结束月份',
    /** 选中月份范围的格式 */
    valueFormat     : 'YYYY-MM',
    /** 快捷方式 */
    shortcuts       : getShortcuts(),
}
