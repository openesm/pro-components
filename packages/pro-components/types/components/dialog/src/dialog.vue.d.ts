import type { CSSProperties } from 'vue';
import type { DialogProps } from 'element-plus';
import type { SdDialogTypes } from './types';
declare const _default: import("vue").DefineComponent<{
    height: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    maxHeight: {
        type: import("vue").PropType<string | number>;
    };
    closeIconSize: {
        type: NumberConstructor;
        default: number;
    };
    closeIconColor: {
        type: StringConstructor;
    };
    titleStyle: {
        type: import("vue").PropType<CSSProperties>;
    };
    headerStyle: {
        type: import("vue").PropType<CSSProperties>;
    };
    bodyStyle: {
        type: import("vue").PropType<CSSProperties>;
    };
    footerStyle: {
        type: import("vue").PropType<CSSProperties>;
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
    scrollbarConfig: {
        type: import("vue").PropType<Partial<import("element-plus").ScrollbarProps>>;
    };
    scrollbarProps: {
        type: import("vue").PropType<Partial<import("element-plus").ScrollbarProps>>;
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
        readonly type: import("vue").PropType<import("element-plus").DialogBeforeCloseFn>;
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
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    modelValue: BooleanConstructor;
    modalClass: StringConstructor;
    width: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    zIndex: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    trapFocus: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    headerAriaLevel: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    center: BooleanConstructor;
    closeIcon: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    customClass: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    fullscreen: BooleanConstructor;
    showClose: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    title: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    ariaLevel: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
}, {
    state: {
        visible: boolean;
        width: string | number | undefined;
        height: string | number;
        maxHeight: string | number | undefined;
        showClose: boolean;
        showFooter: boolean;
        fullscreen: boolean;
        draggable: boolean;
        title: string;
        submitting: boolean;
        showCancelButton: boolean;
        disabledCancelButton: boolean;
        cancelButtonText: string;
        showConfirmButton: boolean;
        disabledConfirmButton: boolean;
        confirmButtonText: string;
    };
    visible: import("vue").Ref<boolean>;
    submitting: import("vue").Ref<boolean>;
    dialog_props$: import("vue").ComputedRef<DialogProps>;
    scrollbar_style$: import("vue").ComputedRef<CSSProperties>;
    onBeforeClose: (done: (cancel?: boolean) => void) => void;
    onClickClose: () => void;
    onClickCancel: () => void;
    onClickConfirm: () => void;
    onOpen: () => void;
    onClose: () => void;
    scroll_ref: import("vue").Ref<any>;
    scrollTo: (options: ScrollToOptions | number, yCoord?: number) => void;
    setScrollTop: (scrollTop: number) => void;
    setScrollLeft: (scrollLeft: number) => void;
    getScrollbar: () => any;
    setOption: (options: Partial<SdDialogTypes.WriteOptions>) => void;
    getOption: (key?: string) => any;
    show: () => void;
    hide: () => void;
    isVisible: () => boolean;
    isSubmitting: () => boolean;
    dispatchEvent: (name: string, params?: Record<string, any>) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    maxHeight: {
        type: import("vue").PropType<string | number>;
    };
    closeIconSize: {
        type: NumberConstructor;
        default: number;
    };
    closeIconColor: {
        type: StringConstructor;
    };
    titleStyle: {
        type: import("vue").PropType<CSSProperties>;
    };
    headerStyle: {
        type: import("vue").PropType<CSSProperties>;
    };
    bodyStyle: {
        type: import("vue").PropType<CSSProperties>;
    };
    footerStyle: {
        type: import("vue").PropType<CSSProperties>;
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
    scrollbarConfig: {
        type: import("vue").PropType<Partial<import("element-plus").ScrollbarProps>>;
    };
    scrollbarProps: {
        type: import("vue").PropType<Partial<import("element-plus").ScrollbarProps>>;
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
        readonly type: import("vue").PropType<import("element-plus").DialogBeforeCloseFn>;
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
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    modelValue: BooleanConstructor;
    modalClass: StringConstructor;
    width: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    zIndex: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    trapFocus: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    headerAriaLevel: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    center: BooleanConstructor;
    closeIcon: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    customClass: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    fullscreen: BooleanConstructor;
    showClose: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    title: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    ariaLevel: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
}>> & {
    onOpen?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
    onScroll?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
    onOpened?: (() => any) | undefined;
    onClosed?: (() => any) | undefined;
    onOpenAutoFocus?: (() => any) | undefined;
    onCloseAutoFocus?: (() => any) | undefined;
}, {
    title: string;
    height: string | number;
    showFooter: boolean;
    modelValue: boolean;
    lockScroll: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    center: boolean;
    showClose: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    fullscreen: boolean;
    draggable: boolean;
    submitting: boolean;
    showCancelButton: boolean;
    disabledCancelButton: boolean;
    cancelButtonText: string;
    showConfirmButton: boolean;
    disabledConfirmButton: boolean;
    confirmButtonText: string;
    closeIconSize: number;
    alignCenter: boolean;
    appendToBody: boolean;
    destroyOnClose: boolean;
    closeOnClickModal: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    closeOnPressEscape: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    modal: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    openDelay: number;
    closeDelay: number;
    trapFocus: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    headerAriaLevel: string;
    customClass: string;
    ariaLevel: string;
}, {}>;
export default _default;
