import { Directive } from 'vue';

/** 水波纹属性 */
interface RippleProto {
    background?: string;
    zIndex?: string;
}
export declare const RippleDirective: Directive & RippleProto;
export {};
