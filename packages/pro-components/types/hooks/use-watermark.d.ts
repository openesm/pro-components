/**
 * v23.11.12
 * 设置水印
 */
import type { Ref } from 'vue';
interface WatermarkAttr {
    font?: string;
    fillStyle?: string;
}
export declare const useWatermask: (wrap_el_ref?: Ref<HTMLElement | null>) => {
    setWatermark: (str: string, attr?: WatermarkAttr) => void;
    clearWatermark: () => void;
};
export {};
