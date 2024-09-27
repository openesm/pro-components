export declare const SdImage: ({
    new (...args: any[]): {
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            circle: boolean;
            infinite: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            src: string;
            closeOnPressEscape: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            borderRadius: string | number;
            previewSrcList: string[];
            disabledPreview: boolean;
            placeholderIconSize: number;
            placeholderIconColor: string;
            errorIconSize: number;
            fit: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "fill" | "none" | "contain" | "cover" | "scale-down", unknown>;
            hideOnClickModal: boolean;
            lazy: boolean;
            previewTeleported: boolean;
            initialIndex: number;
            zoomRate: number;
            minScale: number;
            maxScale: number;
        }> & Omit<{
            readonly circle: boolean;
            readonly infinite: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly src: string;
            readonly closeOnPressEscape: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly borderRadius: string | number;
            readonly previewSrcList: string[];
            readonly disabledPreview: boolean;
            readonly placeholderIconSize: number;
            readonly placeholderIconColor: string;
            readonly errorIconSize: number;
            readonly fit: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "fill" | "none" | "contain" | "cover" | "scale-down", unknown>;
            readonly hideOnClickModal: boolean;
            readonly lazy: boolean;
            readonly previewTeleported: boolean;
            readonly initialIndex: number;
            readonly zoomRate: number;
            readonly minScale: number;
            readonly maxScale: number;
            readonly height?: string | number | undefined;
            readonly zIndex?: number | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | number | undefined;
            readonly loading?: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "lazy" | "eager", unknown> | undefined;
            readonly minHeight?: string | number | undefined;
            readonly placeholderStyle?: import('vue').CSSProperties | undefined;
            readonly errorStyle?: import('vue').CSSProperties | undefined;
            readonly errorIconColor?: string | undefined;
            readonly scrollContainer?: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>;
            onClose?: (() => any) | undefined;
            onLoad?: ((evt: Event) => any) | undefined;
            onError?: ((evt: Event) => any) | undefined;
            onShow?: (() => any) | undefined;
            onSwitch?: ((val: number) => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
            width: {
                type: import('vue').PropType<string | number>;
            };
            height: {
                type: import('vue').PropType<string | number>;
            };
            minWidth: {
                type: import('vue').PropType<string | number>;
            };
            minHeight: {
                type: import('vue').PropType<string | number>;
            };
            circle: {
                type: BooleanConstructor;
                default: boolean;
            };
            borderRadius: {
                type: import('vue').PropType<string | number>;
                default: number;
            };
            disabledPreview: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholderStyle: {
                type: import('vue').PropType<import('vue').CSSProperties>;
            };
            placeholderIconSize: {
                type: NumberConstructor;
                default: number;
            };
            placeholderIconColor: {
                type: StringConstructor;
                default: string;
            };
            errorStyle: {
                type: import('vue').PropType<import('vue').CSSProperties>;
            };
            errorIconSize: {
                type: NumberConstructor;
                default: number;
            };
            errorIconColor: {
                type: StringConstructor;
            };
            fit: {
                default: string;
                type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "fill" | "none" | "contain" | "cover" | "scale-down", unknown>>;
                required: false;
                validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            hideOnClickModal: {
                default: boolean;
                prototype: Boolean;
            };
            src: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            loading: {
                readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            lazy: BooleanConstructor;
            scrollContainer: {
                readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            previewSrcList: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
            previewTeleported: BooleanConstructor;
            zIndex: {
                readonly type: import('vue').PropType<number>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            initialIndex: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            infinite: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            closeOnPressEscape: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            zoomRate: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
            minScale: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0.2, boolean>;
            maxScale: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
        }>> & {
            onClose?: (() => any) | undefined;
            onLoad?: ((evt: Event) => any) | undefined;
            onError?: ((evt: Event) => any) | undefined;
            onShow?: (() => any) | undefined;
            onSwitch?: ((val: number) => any) | undefined;
        }, "circle" | "infinite" | "src" | "closeOnPressEscape" | "borderRadius" | "previewSrcList" | "disabledPreview" | "placeholderIconSize" | "placeholderIconColor" | "errorIconSize" | "fit" | "hideOnClickModal" | "lazy" | "previewTeleported" | "initialIndex" | "zoomRate" | "minScale" | "maxScale">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "show") => void) & ((event: "switch", val: number) => void) & ((event: "error", evt: Event) => void) & ((event: "close") => void) & ((event: "load", evt: Event) => void);
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
            width: {
                type: import('vue').PropType<string | number>;
            };
            height: {
                type: import('vue').PropType<string | number>;
            };
            minWidth: {
                type: import('vue').PropType<string | number>;
            };
            minHeight: {
                type: import('vue').PropType<string | number>;
            };
            circle: {
                type: BooleanConstructor;
                default: boolean;
            };
            borderRadius: {
                type: import('vue').PropType<string | number>;
                default: number;
            };
            disabledPreview: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholderStyle: {
                type: import('vue').PropType<import('vue').CSSProperties>;
            };
            placeholderIconSize: {
                type: NumberConstructor;
                default: number;
            };
            placeholderIconColor: {
                type: StringConstructor;
                default: string;
            };
            errorStyle: {
                type: import('vue').PropType<import('vue').CSSProperties>;
            };
            errorIconSize: {
                type: NumberConstructor;
                default: number;
            };
            errorIconColor: {
                type: StringConstructor;
            };
            fit: {
                default: string;
                type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "fill" | "none" | "contain" | "cover" | "scale-down", unknown>>;
                required: false;
                validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            hideOnClickModal: {
                default: boolean;
                prototype: Boolean;
            };
            src: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            loading: {
                readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            lazy: BooleanConstructor;
            scrollContainer: {
                readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            previewSrcList: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
            previewTeleported: BooleanConstructor;
            zIndex: {
                readonly type: import('vue').PropType<number>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            initialIndex: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            infinite: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            closeOnPressEscape: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            zoomRate: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
            minScale: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0.2, boolean>;
            maxScale: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
        }>> & {
            onClose?: (() => any) | undefined;
            onLoad?: ((evt: Event) => any) | undefined;
            onError?: ((evt: Event) => any) | undefined;
            onShow?: (() => any) | undefined;
            onSwitch?: ((val: number) => any) | undefined;
        }, {
            image_props$: import('vue').ComputedRef<import('element-plus').ImageProps>;
            image_style$: import('vue').ComputedRef<import('vue').CSSProperties>;
            preview_src_list$: import('vue').ComputedRef<string[]>;
            onLoad: (e: Event) => void;
            onError: (e: Event) => void;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            load: (evt: Event) => boolean;
            error: (evt: Event) => boolean;
            switch: (val: number) => boolean;
            close: () => boolean;
            show: () => boolean;
        }, string, {
            circle: boolean;
            infinite: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            src: string;
            closeOnPressEscape: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            borderRadius: string | number;
            previewSrcList: string[];
            disabledPreview: boolean;
            placeholderIconSize: number;
            placeholderIconColor: string;
            errorIconSize: number;
            fit: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "fill" | "none" | "contain" | "cover" | "scale-down", unknown>;
            hideOnClickModal: boolean;
            lazy: boolean;
            previewTeleported: boolean;
            initialIndex: number;
            zoomRate: number;
            minScale: number;
            maxScale: number;
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
            renderTracked?: (((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import('vue').WatchOptions<boolean> | undefined): import('vue').WatchStopHandle;
    } & Readonly<import('vue').ExtractPropTypes<{
        width: {
            type: import('vue').PropType<string | number>;
        };
        height: {
            type: import('vue').PropType<string | number>;
        };
        minWidth: {
            type: import('vue').PropType<string | number>;
        };
        minHeight: {
            type: import('vue').PropType<string | number>;
        };
        circle: {
            type: BooleanConstructor;
            default: boolean;
        };
        borderRadius: {
            type: import('vue').PropType<string | number>;
            default: number;
        };
        disabledPreview: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholderStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
        };
        placeholderIconSize: {
            type: NumberConstructor;
            default: number;
        };
        placeholderIconColor: {
            type: StringConstructor;
            default: string;
        };
        errorStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
        };
        errorIconSize: {
            type: NumberConstructor;
            default: number;
        };
        errorIconColor: {
            type: StringConstructor;
        };
        fit: {
            default: string;
            type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "fill" | "none" | "contain" | "cover" | "scale-down", unknown>>;
            required: false;
            validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        hideOnClickModal: {
            default: boolean;
            prototype: Boolean;
        };
        src: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        loading: {
            readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        lazy: BooleanConstructor;
        scrollContainer: {
            readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        previewSrcList: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
        previewTeleported: BooleanConstructor;
        zIndex: {
            readonly type: import('vue').PropType<number>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        initialIndex: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        infinite: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        closeOnPressEscape: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        zoomRate: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
        minScale: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0.2, boolean>;
        maxScale: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
    }>> & {
        onClose?: (() => any) | undefined;
        onLoad?: ((evt: Event) => any) | undefined;
        onError?: ((evt: Event) => any) | undefined;
        onShow?: (() => any) | undefined;
        onSwitch?: ((val: number) => any) | undefined;
    } & import('vue').ShallowUnwrapRef<{
        image_props$: import('vue').ComputedRef<import('element-plus').ImageProps>;
        image_style$: import('vue').ComputedRef<import('vue').CSSProperties>;
        preview_src_list$: import('vue').ComputedRef<string[]>;
        onLoad: (e: Event) => void;
        onError: (e: Event) => void;
    }> & {} & import('vue').ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    width: {
        type: import('vue').PropType<string | number>;
    };
    height: {
        type: import('vue').PropType<string | number>;
    };
    minWidth: {
        type: import('vue').PropType<string | number>;
    };
    minHeight: {
        type: import('vue').PropType<string | number>;
    };
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderRadius: {
        type: import('vue').PropType<string | number>;
        default: number;
    };
    disabledPreview: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholderStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
    };
    placeholderIconSize: {
        type: NumberConstructor;
        default: number;
    };
    placeholderIconColor: {
        type: StringConstructor;
        default: string;
    };
    errorStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
    };
    errorIconSize: {
        type: NumberConstructor;
        default: number;
    };
    errorIconColor: {
        type: StringConstructor;
    };
    fit: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "fill" | "none" | "contain" | "cover" | "scale-down", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    hideOnClickModal: {
        default: boolean;
        prototype: Boolean;
    };
    src: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    loading: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    lazy: BooleanConstructor;
    scrollContainer: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    previewSrcList: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    previewTeleported: BooleanConstructor;
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    initialIndex: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    infinite: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zoomRate: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
    minScale: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0.2, boolean>;
    maxScale: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
}>> & {
    onClose?: (() => any) | undefined;
    onLoad?: ((evt: Event) => any) | undefined;
    onError?: ((evt: Event) => any) | undefined;
    onShow?: (() => any) | undefined;
    onSwitch?: ((val: number) => any) | undefined;
}, {
    image_props$: import('vue').ComputedRef<import('element-plus').ImageProps>;
    image_style$: import('vue').ComputedRef<import('vue').CSSProperties>;
    preview_src_list$: import('vue').ComputedRef<string[]>;
    onLoad: (e: Event) => void;
    onError: (e: Event) => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    load: (evt: Event) => boolean;
    error: (evt: Event) => boolean;
    switch: (val: number) => boolean;
    close: () => boolean;
    show: () => boolean;
}, string, {
    circle: boolean;
    infinite: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    src: string;
    closeOnPressEscape: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    borderRadius: string | number;
    previewSrcList: string[];
    disabledPreview: boolean;
    placeholderIconSize: number;
    placeholderIconColor: string;
    errorIconSize: number;
    fit: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "fill" | "none" | "contain" | "cover" | "scale-down", unknown>;
    hideOnClickModal: boolean;
    lazy: boolean;
    previewTeleported: boolean;
    initialIndex: number;
    zoomRate: number;
    minScale: number;
    maxScale: number;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin) & Record<string, any>;
export * from './src/image';
