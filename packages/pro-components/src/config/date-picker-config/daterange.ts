import { genDateRange, genPrevRange, genNextRange } from './helper'

export function getShortcuts() {
    return [
        genNextRange ('明天'    , 3600 * 1000 * 24),
        genDateRange('今天'     ,  0),
        genPrevRange('昨天'     ,  3600 * 1000 * 24),
        genDateRange('最近七天' ,  3600 * 1000 * 24 * 7),
        genDateRange('最近一个月', 3600 * 1000 * 24 * 30),
        genDateRange('最近三个月', 3600 * 1000 * 24 * 90),
        genDateRange('最近六个月', 3600 * 1000 * 24 * 180),
        genDateRange('最近一年'  , 3600 * 1000 * 24 * 365),
    ]
}

export default {
    /** 选择范围时的分隔符 */
    rangeSeparator  : '至',
    /** 范围选择时开始日期的占位内容 */
    startPlaceholder: '开始日期',
    /** 范围选择时结束日期的占位内容 */
    endPlaceholder  : '结束日期',
    /** 快捷方式 */
    shortcuts       : getShortcuts(),
}
