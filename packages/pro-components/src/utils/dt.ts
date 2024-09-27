/**
 * 日期操作函数
 * v22.09.14
 */
import { dayjs } from 'element-plus'
/**
 *  日期格式化
 *  ----------------------------------------------------------
 *  占位符 | 输出             | 详情                     |
 *  :-     |  -:              | -:                       |
 *  YY     | 18               | 两位数的年份             |
 *  YYYY   | 2018             | 四位数的年份             |
 *  M      | 1-12             | 月份, 从 1 开始          |
 *  MM     | 01-12            |  月份, 两位数            |
 *  MMM    | Jan-Dec          | 缩写的月份名称           |
 *  MMMM   | January-December | 完整的月份名称           |
 *  D      | 1-31             | 月份里的一天             |
 *  DD     | 01-31            | 月份里的一天, 两位数     |
 *  d      | 0-6              | 一周中的一天, 星期天是 0 |
 *  dd     | Su-Sa            | 最简写的星期几           |
 *  ddd    | Sun-Sat          | 简写的星期几             |
 *  dddd   | Sunday-Saturday  | 星期几                   |
 *  H      | 0-23             | 小时                     |
 *  HH     | 00-23            | 小时, 两位数             |
 *  h      | 1-12             | 小时, 12 小时制          |
 *  hh     | 01-12            | 小时, 12 小时制, 两位数  |
 *  m      | 0-59             | 分钟                     |
 *  mm     | 00-59            | 分钟, 两位数             |
 *  s      | 0-59             | 秒                       |
 *  ss     | 00-59            | 秒, 两位数               |
 *  SSS    | 000-999          | 毫秒, 三位数             |
 *  Z      | +05:00           | UTC 的偏移量, ±HH:mm     |
 *  ZZ     | +05:00           | UTC 的偏移量, ±HH:mm     |
 *  A      | AM，PM           |                          |
 *  a      | am, pm           |                          |
 */
export function format(date: string | number | Date, format?: string): string {
    return dayjs(date).format(format || 'YYYY-MM-DD')
}
