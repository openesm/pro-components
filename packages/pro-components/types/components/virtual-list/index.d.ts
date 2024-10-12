export declare const SdVirtualList: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            items: any[];
            bench: number;
        }> & Omit<{
            readonly items: any[];
            readonly bench: number;
            readonly height?: number | undefined;
            readonly maxHeight?: number | undefined;
            readonly width?: number | undefined;
            readonly minWidth?: number | undefined;
            readonly minHeight?: number | undefined;
            readonly maxWidth?: number | undefined;
            readonly itemHeight?: number | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            height: {
                type: NumberConstructor;
                required: boolean;
            };
            minHeight: {
                type: NumberConstructor;
            };
            maxHeight: {
                type: NumberConstructor;
            };
            width: {
                type: NumberConstructor;
            };
            minWidth: {
                type: NumberConstructor;
            };
            maxWidth: {
                type: NumberConstructor;
            };
            bench: {
                type: NumberConstructor;
                default: number;
            };
            itemHeight: {
                type: NumberConstructor;
                required: boolean;
            };
            items: {
                type: import("vue").PropType<any[]>;
                default: () => never[];
            };
        }>>, "items" | "bench">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            height: {
                type: NumberConstructor;
                required: boolean;
            };
            minHeight: {
                type: NumberConstructor;
            };
            maxHeight: {
                type: NumberConstructor;
            };
            width: {
                type: NumberConstructor;
            };
            minWidth: {
                type: NumberConstructor;
            };
            maxWidth: {
                type: NumberConstructor;
            };
            bench: {
                type: NumberConstructor;
                default: number;
            };
            itemHeight: {
                type: NumberConstructor;
                required: boolean;
            };
            items: {
                type: import("vue").PropType<any[]>;
                default: () => never[];
            };
        }>>, {
            state: {
                start_idx: number;
                end_idx: number;
                scroll_top: number;
            };
            scroll_ref: import("vue").Ref<any>;
            wrap_style$: import("vue").ComputedRef<import("vue").CSSProperties>;
            content_height$: import("vue").ComputedRef<string>;
            visbile_list$: import("vue").ComputedRef<{
                data: any;
                style: {
                    top: string;
                };
            }[]>;
            onScroll: ({ scrollTop: scroll_top }: {
                scrollTop: number;
            }) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            items: any[];
            bench: number;
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
        height: {
            type: NumberConstructor;
            required: boolean;
        };
        minHeight: {
            type: NumberConstructor;
        };
        maxHeight: {
            type: NumberConstructor;
        };
        width: {
            type: NumberConstructor;
        };
        minWidth: {
            type: NumberConstructor;
        };
        maxWidth: {
            type: NumberConstructor;
        };
        bench: {
            type: NumberConstructor;
            default: number;
        };
        itemHeight: {
            type: NumberConstructor;
            required: boolean;
        };
        items: {
            type: import("vue").PropType<any[]>;
            default: () => never[];
        };
    }>> & import("vue").ShallowUnwrapRef<{
        state: {
            start_idx: number;
            end_idx: number;
            scroll_top: number;
        };
        scroll_ref: import("vue").Ref<any>;
        wrap_style$: import("vue").ComputedRef<import("vue").CSSProperties>;
        content_height$: import("vue").ComputedRef<string>;
        visbile_list$: import("vue").ComputedRef<{
            data: any;
            style: {
                top: string;
            };
        }[]>;
        onScroll: ({ scrollTop: scroll_top }: {
            scrollTop: number;
        }) => void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: NumberConstructor;
        required: boolean;
    };
    minHeight: {
        type: NumberConstructor;
    };
    maxHeight: {
        type: NumberConstructor;
    };
    width: {
        type: NumberConstructor;
    };
    minWidth: {
        type: NumberConstructor;
    };
    maxWidth: {
        type: NumberConstructor;
    };
    bench: {
        type: NumberConstructor;
        default: number;
    };
    itemHeight: {
        type: NumberConstructor;
        required: boolean;
    };
    items: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
}>>, {
    state: {
        start_idx: number;
        end_idx: number;
        scroll_top: number;
    };
    scroll_ref: import("vue").Ref<any>;
    wrap_style$: import("vue").ComputedRef<import("vue").CSSProperties>;
    content_height$: import("vue").ComputedRef<string>;
    visbile_list$: import("vue").ComputedRef<{
        data: any;
        style: {
            top: string;
        };
    }[]>;
    onScroll: ({ scrollTop: scroll_top }: {
        scrollTop: number;
    }) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    items: any[];
    bench: number;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin) & Record<string, any>;
export * from './src/virtual-list';
