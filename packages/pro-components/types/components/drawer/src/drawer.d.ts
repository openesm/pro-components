import { ExtractPublicPropTypes, CSSProperties, PropType } from 'vue';
import { ScrollbarProps } from 'element-plus';

export declare const sdDrawerProps: {
    width: {
        type: PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
        default: "30%";
    };
    background: {
        type: StringConstructor;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconSize: {
        type: NumberConstructor;
        default: number;
    };
    closeIconColor: {
        type: StringConstructor;
    };
    showHeader: {
        default: boolean;
        type: PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    showFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    headerStyle: {
        type: PropType<CSSProperties>;
    };
    titleStyle: {
        type: PropType<CSSProperties>;
    };
    bodyClass: {
        type: StringConstructor;
        default: string;
    };
    bodyStyle: {
        type: PropType<CSSProperties>;
    };
    footerStyle: {
        type: PropType<CSSProperties>;
    };
    bodyLockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCancelButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledCancelButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelButtonText: {
        type: StringConstructor;
        default: string;
    };
    showConfirmButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledConfirmButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmButtonText: {
        type: StringConstructor;
        default: string;
    };
    submitting: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollbarConfig: {
        type: PropType<Partial<ScrollbarProps>>;
    };
    scrollbarProps: {
        type: PropType<Partial<ScrollbarProps>>;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown, "rtl", boolean>;
    size: import('element-plus/es/utils/index.mjs').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "30%", boolean>;
    withHeader: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modalFade: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    headerAriaLevel: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    beforeClose: {
        readonly type: PropType<import('element-plus').DialogBeforeCloseFn>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    closeOnClickModal: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    lockScroll: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modal: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    openDelay: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    closeDelay: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    top: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    modelValue: BooleanConstructor;
    modalClass: StringConstructor;
    zIndex: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    trapFocus: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    center: BooleanConstructor;
    alignCenter: BooleanConstructor;
    closeIcon: {
        readonly type: PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    customClass: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    draggable: BooleanConstructor;
    fullscreen: BooleanConstructor;
    showClose: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    title: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    ariaLevel: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
};
export declare const sdDrawerEmits: {
    cancel: null;
    confirm: null;
    scroll: null;
    open: () => boolean;
    opened: () => boolean;
    close: () => boolean;
    closed: () => boolean;
    "update:modelValue": (value: boolean) => boolean;
    openAutoFocus: () => boolean;
    closeAutoFocus: () => boolean;
};
export declare const sdDrawerOmitKeys: string[];
export type SdDrawerProps = ExtractPublicPropTypes<typeof sdDrawerProps>;
