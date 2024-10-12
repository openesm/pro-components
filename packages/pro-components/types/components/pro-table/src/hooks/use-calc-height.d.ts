/**
 * v24.07.10
 * 监听容器变化,取得高度信息
 * - 未设置 vxe-grid 确定高度是引起卡顿原因之一
 */
import type { SdProTableContext } from '../types';
export declare const useCalcHeight: ($proTable: SdProTableContext) => {
    body_ref: import("vue").Ref<HTMLDivElement | undefined>;
    body_height: import("vue").Ref<number>;
};
