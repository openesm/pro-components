import { CSSProperties } from 'vue';

declare const _default: import('vue').DefineComponent<{
    prefix: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: StringConstructor;
    };
}, {
    icon_style$: import('vue').ComputedRef<CSSProperties>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    prefix: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: StringConstructor;
    };
}>>, {
    size: number;
    prefix: string;
}, {}>;
export default _default;
