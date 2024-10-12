import type { ExtractPublicPropTypes, PropType, CSSProperties } from 'vue';
import type { ScrollbarProps } from 'element-plus';
export declare const sdDialogProps: {
    height: {
        type: PropType<string | number>;
        default: string;
    };
    maxHeight: {
        type: PropType<string | number>;
    };
    closeIconSize: {
        type: NumberConstructor;
        default: number;
    };
    closeIconColor: {
        type: StringConstructor;
    };
    titleStyle: {
        type: PropType<CSSProperties>;
    };
    headerStyle: {
        type: PropType<CSSProperties>;
    };
    bodyStyle: {
        type: PropType<CSSProperties>;
    };
    footerStyle: {
        type: PropType<CSSProperties>;
    };
    submitting: {
        type: BooleanConstructor;
    };
    showFooter: {
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
    /** deprecated */
    scrollbarConfig: {
        type: PropType<Partial<ScrollbarProps>>;
    };
    scrollbarProps: {
        type: PropType<Partial<ScrollbarProps>>;
    };
    alignCenter: {
        default: boolean;
        prototype: Boolean;
    };
    draggable: {
        default: boolean;
        prototype: Boolean;
    };
    appendToBody: {
        default: boolean;
        prototype: Boolean;
    };
    destroyOnClose: {
        default: boolean;
        prototype: Boolean;
    };
    beforeClose: {
        readonly type: PropType<import("element-plus").DialogBeforeCloseFn>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    closeOnClickModal: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    lockScroll: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modal: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    openDelay: import("element-plus/es/utils/index.mjs").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    closeDelay: import("element-plus/es/utils/index.mjs").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    top: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    modelValue: BooleanConstructor;
    modalClass: StringConstructor;
    width: {
        readonly type: PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    zIndex: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    trapFocus: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    headerAriaLevel: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    center: BooleanConstructor;
    closeIcon: {
        readonly type: PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    customClass: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    fullscreen: BooleanConstructor;
    showClose: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    title: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    ariaLevel: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
};
export declare const sdDialogEmits: {
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
export declare const sdDialogOmitKeys: string[];
export type SdDialogProps = ExtractPublicPropTypes<typeof sdDialogProps>;
