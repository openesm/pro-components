/**
 * digits 尾数
 * separator
 */
/** 格式化金额: 默认四舍五入,小数点两位 */
export declare function toPrice(value: number, options?: {
    spaceNumber?: number;
    separator?: string;
    digits?: number;
}): string;
/** 格式化整数: 默认四舍五入，无小数点 */
export declare function toInt(value: number, options?: {
    spaceNumber?: number;
    separator?: string;
    digits?: number;
}): string;
/** 格式化银行卡 */
export declare function toBankcard(value: number, options?: {
    spaceNumber?: number;
    separator?: string;
}): string;
