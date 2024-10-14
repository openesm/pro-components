import type { SdWaterflowTypes } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    list: {
        type: import("vue").PropType<SdWaterflowTypes.WaterflowItem[]>;
        default: () => never[];
    };
    column: {
        type: NumberConstructor;
        default: number;
    };
    confirmButtonText: {
        type: StringConstructor;
        default: string;
    };
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    nomoreText: {
        type: StringConstructor;
        default: string;
    };
    nomore: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollbarConfig: {
        type: import("vue").PropType<Partial<import("element-plus").ScrollbarProps>>;
    };
    loadmore: {
        type: FunctionConstructor;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    distance: {
        type: NumberConstructor;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    list: {
        type: import("vue").PropType<SdWaterflowTypes.WaterflowItem[]>;
        default: () => never[];
    };
    column: {
        type: NumberConstructor;
        default: number;
    };
    confirmButtonText: {
        type: StringConstructor;
        default: string;
    };
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    nomoreText: {
        type: StringConstructor;
        default: string;
    };
    nomore: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollbarConfig: {
        type: import("vue").PropType<Partial<import("element-plus").ScrollbarProps>>;
    };
    loadmore: {
        type: FunctionConstructor;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    distance: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    column: number;
    list: SdWaterflowTypes.WaterflowItem[];
    confirmButtonText: string;
    loadingText: string;
    delay: number;
    nomoreText: string;
    nomore: boolean;
    distance: number;
}, {}>, {
    extra?(_: {
        item: {
            url: string;
            width: number;
            height: number;
            title?: string | undefined;
        };
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
