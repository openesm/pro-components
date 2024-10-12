/**
 * 水波纹指令
 *
 * vue-vben-admin ripple 实现
 * https://github.com/vbenjs/vue-vben-admin/blob/main/src/directives/ripple/index.ts
 *
 * Vue.js 自定义指令文档
 * https://cn.vuejs.org/guide/reusability/custom-directives.html
 */
import type { Directive } from 'vue';
import './index.scss';
/** 水波纹属性 */
interface RippleProto {
    background?: string;
    zIndex?: string;
}
export declare const RippleDirective: Directive & RippleProto;
export {};
