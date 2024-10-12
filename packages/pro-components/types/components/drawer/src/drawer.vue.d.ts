import type { DrawerProps } from 'element-plus';
import type { SdDrawerTypes } from './types';
declare const _default: import("vue").DefineComponent<{
    width: {
        type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
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
        type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    showFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    headerStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    titleStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    bodyClass: {
        type: StringConstructor;
        default: string;
    };
    bodyStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    footerStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
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
        type: import("vue").PropType<Partial<import("element-plus").ScrollbarProps>>;
    };
    scrollbarProps: {
        type: import("vue").PropType<Partial<import("element-plus").ScrollbarProps>>;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown, "rtl", boolean>;
    size: import("element-plus/es/utils/index.mjs").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "30%", boolean>;
    withHeader: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modalFade: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    headerAriaLevel: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
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
    zIndex: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    trapFocus: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    center: BooleanConstructor;
    alignCenter: BooleanConstructor;
    closeIcon: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    customClass: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    draggable: BooleanConstructor;
    fullscreen: BooleanConstructor;
    showClose: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    title: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    ariaLevel: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
}, {
    scroll_ref: import("vue").Ref<any>;
    state: {
        visible: boolean;
        width: string | number | undefined;
        loading: boolean;
        title: string;
        background: string | undefined;
        bodyLockScroll: boolean;
        showClose: boolean;
        showFooter: boolean;
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
    drawer_props$: import("vue").ComputedRef<DrawerProps>;
    show_header$: import("vue").ComputedRef<import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
    onBeforeClose: (done: (cancel?: boolean) => void) => void;
    onClickClose: () => void;
    onClickCancel: () => void;
    onClickConfirm: () => void;
    onOpen: () => void;
    onClose: () => void;
    dispatchEvent: (name: string, params?: Record<string, any>) => void;
    scrollTo: (options: ScrollToOptions | number, yCoord?: number) => void;
    setScrollTop: (scrollTop: number) => void;
    setScrollLeft: (scrollLeft: number) => void;
    getScrollbar: () => any;
    setOption: (options: Partial<SdDrawerTypes.WriteOptions>) => void;
    getOption: (key?: string) => any;
    show: () => void;
    hide: () => void;
    isVisible: () => boolean;
    isSubmitting: () => boolean;
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
    width: {
        type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
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
        type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    showFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    headerStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    titleStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    bodyClass: {
        type: StringConstructor;
        default: string;
    };
    bodyStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    footerStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
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
        type: import("vue").PropType<Partial<import("element-plus").ScrollbarProps>>;
    };
    scrollbarProps: {
        type: import("vue").PropType<Partial<import("element-plus").ScrollbarProps>>;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown, "rtl", boolean>;
    size: import("element-plus/es/utils/index.mjs").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "30%", boolean>;
    withHeader: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modalFade: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    headerAriaLevel: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
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
    zIndex: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    trapFocus: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    center: BooleanConstructor;
    alignCenter: BooleanConstructor;
    closeIcon: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    customClass: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    draggable: BooleanConstructor;
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
    direction: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown>;
    bodyClass: string;
    size: import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    width: import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    showHeader: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    showFooter: boolean;
    modelValue: boolean;
    lockScroll: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    loading: boolean;
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
    bodyLockScroll: boolean;
    withHeader: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    modalFade: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>;
export default _default;
