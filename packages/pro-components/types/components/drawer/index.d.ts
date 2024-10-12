export declare const SdDrawer: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<{
            readonly title: string;
            readonly direction: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown>;
            readonly bodyClass: string;
            readonly size: import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly width: import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly showHeader: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly showFooter: boolean;
            readonly modelValue: boolean;
            readonly lockScroll: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly loading: boolean;
            readonly center: boolean;
            readonly showClose: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly fullscreen: boolean;
            readonly draggable: boolean;
            readonly submitting: boolean;
            readonly showCancelButton: boolean;
            readonly disabledCancelButton: boolean;
            readonly cancelButtonText: string;
            readonly showConfirmButton: boolean;
            readonly disabledConfirmButton: boolean;
            readonly confirmButtonText: string;
            readonly closeIconSize: number;
            readonly alignCenter: boolean;
            readonly appendToBody: boolean;
            readonly destroyOnClose: boolean;
            readonly closeOnClickModal: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly closeOnPressEscape: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly modal: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly openDelay: number;
            readonly closeDelay: number;
            readonly trapFocus: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly headerAriaLevel: string;
            readonly customClass: string;
            readonly ariaLevel: string;
            readonly bodyLockScroll: boolean;
            readonly withHeader: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly modalFade: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly headerStyle?: import("vue").CSSProperties | undefined;
            readonly bodyStyle?: import("vue").CSSProperties | undefined;
            readonly zIndex?: number | undefined;
            readonly top?: string | undefined;
            readonly footerStyle?: import("vue").CSSProperties | undefined;
            readonly scrollbarConfig?: Partial<import("element-plus").ScrollbarProps> | undefined;
            readonly titleStyle?: import("vue").CSSProperties | undefined;
            readonly closeIconColor?: string | undefined;
            readonly scrollbarProps?: Partial<import("element-plus").ScrollbarProps> | undefined;
            readonly beforeClose?: import("element-plus").DialogBeforeCloseFn | undefined;
            readonly modalClass?: string | undefined;
            readonly closeIcon?: import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown> | undefined;
            readonly background?: string | undefined;
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
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
        }, "title" | "direction" | "bodyClass" | "size" | "width" | "showHeader" | "showFooter" | "modelValue" | "lockScroll" | "loading" | "center" | "showClose" | "fullscreen" | "draggable" | "submitting" | "showCancelButton" | "disabledCancelButton" | "cancelButtonText" | "showConfirmButton" | "disabledConfirmButton" | "confirmButtonText" | "closeIconSize" | "alignCenter" | "appendToBody" | "destroyOnClose" | "closeOnClickModal" | "closeOnPressEscape" | "modal" | "openDelay" | "closeDelay" | "trapFocus" | "headerAriaLevel" | "customClass" | "ariaLevel" | "bodyLockScroll" | "withHeader" | "modalFade">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "open") => void) & ((event: "scroll", ...args: any[]) => void) & ((event: "update:modelValue", value: boolean) => void) & ((event: "cancel", ...args: any[]) => void) & ((event: "confirm", ...args: any[]) => void) & ((event: "opened") => void) & ((event: "close") => void) & ((event: "closed") => void) & ((event: "openAutoFocus") => void) & ((event: "closeAutoFocus") => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
            drawer_props$: import("vue").ComputedRef<import("element-plus").DrawerProps>;
            show_header$: import("vue").ComputedRef<import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            onBeforeClose: (done: (cancel?: boolean | undefined) => void) => void;
            onClickClose: () => void;
            onClickCancel: () => void;
            onClickConfirm: () => void;
            onOpen: () => void;
            onClose: () => void;
            dispatchEvent: (name: string, params?: Record<string, any> | undefined) => void;
            scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
            setScrollTop: (scrollTop: number) => void;
            setScrollLeft: (scrollLeft: number) => void;
            getScrollbar: () => any;
            setOption: (options: Partial<import("./src/types").SdDrawerTypes.WriteOptions>) => void;
            getOption: (key?: string | undefined) => any;
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
        }, string, {
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
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
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
    } & import("vue").ShallowUnwrapRef<{
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
        drawer_props$: import("vue").ComputedRef<import("element-plus").DrawerProps>;
        show_header$: import("vue").ComputedRef<import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        onBeforeClose: (done: (cancel?: boolean | undefined) => void) => void;
        onClickClose: () => void;
        onClickCancel: () => void;
        onClickConfirm: () => void;
        onOpen: () => void;
        onClose: () => void;
        dispatchEvent: (name: string, params?: Record<string, any> | undefined) => void;
        scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
        setScrollTop: (scrollTop: number) => void;
        setScrollLeft: (scrollLeft: number) => void;
        getScrollbar: () => any;
        setOption: (options: Partial<import("./src/types").SdDrawerTypes.WriteOptions>) => void;
        getOption: (key?: string | undefined) => any;
        show: () => void;
        hide: () => void;
        isVisible: () => boolean;
        isSubmitting: () => boolean;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    drawer_props$: import("vue").ComputedRef<import("element-plus").DrawerProps>;
    show_header$: import("vue").ComputedRef<import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
    onBeforeClose: (done: (cancel?: boolean | undefined) => void) => void;
    onClickClose: () => void;
    onClickCancel: () => void;
    onClickConfirm: () => void;
    onOpen: () => void;
    onClose: () => void;
    dispatchEvent: (name: string, params?: Record<string, any> | undefined) => void;
    scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
    setScrollTop: (scrollTop: number) => void;
    setScrollLeft: (scrollLeft: number) => void;
    getScrollbar: () => any;
    setOption: (options: Partial<import("./src/types").SdDrawerTypes.WriteOptions>) => void;
    getOption: (key?: string | undefined) => any;
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
}, string, {
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
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin) & Record<string, any>;
export * from './src/drawer';
