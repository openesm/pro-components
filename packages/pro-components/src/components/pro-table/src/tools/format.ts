
/**
 * digits 尾数
 * separator
 */

/** 格式化金额: 默认四舍五入,小数点两位 */
export function toPrice(value: number, options?: { spaceNumber?: number; separator?: string; digits?: number }) {
    // 格式化参数
    const opts = Object.assign({ spaceNumber: 3, separator: ',', digits: 2 }, options)

    // 负数转为正数进行格式化
    const is_negtive = value < 0
    value = is_negtive ? Math.abs(value) : value

    // 整数，小数
    const [int_str, float_str] = String(value.toFixed(opts.digits)).split('.')
    const res = int_str?.replace(new RegExp(`(?=(?!(\\b))(.{${ opts.spaceNumber }})+$)`, 'g'), (opts.separator)) + (float_str ? (`.${  float_str }`) : '')

    return is_negtive ? `-${ res }` : res
}

/** 格式化整数: 默认四舍五入，无小数点 */
export function toInt(value: number, options?: { spaceNumber?: number; separator?: string; digits?: number }) {
    const opts = Object.assign({ spaceNumber: 3, separator: ',', digits: 0 }, options)

    const int_value = +value.toFixed(0)

    // 负数转为正数进行格式化
    const is_negtive = value < 0
    value = is_negtive ? Math.abs(int_value) : int_value

    // 整数，小数
    const res = `${ `${ value }`?.replace(new RegExp(`(?=(?!(\\b))(.{${ opts.spaceNumber }})+$)`, 'g'), (opts.separator))  }`

    return is_negtive ? `-${ res }` : res
}

/** 格式化银行卡 */
export function toBankcard(value: number, options?: { spaceNumber?: number; separator?: string }) {
    const opts = Object.assign({ spaceNumber: 4, separator: ' ' }, options)
    return `${ String(value).replace(new RegExp(`(?=(?!(\\b))(.{${ opts.spaceNumber }})+$)`, 'g'), (opts.separator))  }`
}
