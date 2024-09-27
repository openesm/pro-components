import { getDate } from './helper'

export function getShortcuts() {
    return [
        getDate('今天', 0),
        getDate('昨天', 3600 * 1000 * 24),
        getDate('一周前', 3600 * 1000 * 24 * 7),
    ]
}

export default {
    /** 占位符 */
    placeholder: '选择日期',
    /** 快捷方式 */
    shortcuts  : getShortcuts(),
    /** 显示在输入框中的格式 */
    format     : 'YYYY-MM-DD dddd',
}
