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
export declare function format(date: string | number | Date, format?: string): string;
export declare const WEEK_DAYS: string[];
export declare const FORMAT_DEFAULT = "YYYY-MM-DD";
export declare const INVALID_DATE_STRING = "Invalid Date";
/** 是否有效日期 */
export declare const isValid: (date: string | number | Date) => boolean;
export declare function getDay(date: string | number | Date): number;
/** 获取月 */
export declare function getMonth(date: string | number | Date): number;
/** 获取年 */
export declare function getYear(date: string | number | Date): number;
/** 获取今天的日期 */
export declare function getToday(): string;
/** 转换为 Date 对象 */
export declare function toDate(date: string | number | Date): Date | null;
/** 根据年月日创建新日期 */
export declare function newDate(y: number, m: number, d: number): string;
/** 上日 (可前进多日) */
export declare function prevDate(date: string | number | Date, amount?: number): string;
/** 下日 (可后退多日) */
export declare function nextDate(date: string | number | Date, amount?: number): string;
/**  返回星期几的数字, 星期日默认返回 7  */
export declare function getWeekday(date: string | number | Date, sunday_number?: number): number;
/**  返回星期几中文标识 */
export declare function getWeekName(date: string | number | Date): string;
/** 周的第一天 */
export declare function firstDateOfWeek(date: string | number | Date): string;
/** 周的最后一天 */
export declare function lastDateOfWeek(date: string | number | Date): string;
/** 获取当前周为一年的第几周 */
export declare function getWeekNumberOfYear(date: Date): number | null;
/** 获取月份第一天星期几 */
export declare const getFirstDayOfMonth: (date: Date) => number;
/** 月的第一天 */
export declare function firstDateOfMonth(date: string | number | Date): string;
/** 月的最后一天 */
export declare function lastDateOfMonth(date: string | number | Date): string;
/** 上月同日 */
export declare function prevMonthSameDate(date: string | number | Date): string;
/** 下月同日 */
export declare function nextMonthSameDate(date: string | number | Date): string;
/** 获得指定月的天数 */
export declare function getMonthDays(y: number, m: number): number;
/**
 * 获取起始日期与结束日期的天数和
 *
 * 示例:
 * ```javascript
 * dt.getDiffDays('2022-08-27', '2022-08-28') => 1
 * ```
 */
export declare function getDiffDays(start_date: string | number | Date, end_date: string | number | Date): number;
