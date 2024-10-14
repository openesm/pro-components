export declare const SdWaterflow: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            column: number;
            list: import("./src/types").SdWaterflowTypes.WaterflowItem[];
            confirmButtonText: string;
            loadingText: string;
            delay: number;
            nomoreText: string;
            nomore: boolean;
            distance: number;
        }> & Omit<{
            readonly column: number;
            readonly list: import("./src/types").SdWaterflowTypes.WaterflowItem[];
            readonly confirmButtonText: string;
            readonly loadingText: string;
            readonly delay: number;
            readonly nomoreText: string;
            readonly nomore: boolean;
            readonly distance: number;
            readonly scrollbarConfig?: Partial<import("element-plus").ScrollbarProps> | undefined;
            readonly loadmore?: Function | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            list: {
                type: import("vue").PropType<import("./src/types").SdWaterflowTypes.WaterflowItem[]>;
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
        }>>, "column" | "list" | "confirmButtonText" | "loadingText" | "delay" | "nomoreText" | "nomore" | "distance">;
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
            list: {
                type: import("vue").PropType<import("./src/types").SdWaterflowTypes.WaterflowItem[]>;
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
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            [x: string]: (...args: any[]) => void;
        }, string, {
            column: number;
            list: import("./src/types").SdWaterflowTypes.WaterflowItem[];
            confirmButtonText: string;
            loadingText: string;
            delay: number;
            nomoreText: string;
            nomore: boolean;
            distance: number;
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
        list: {
            type: import("vue").PropType<import("./src/types").SdWaterflowTypes.WaterflowItem[]>;
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
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    list: {
        type: import("vue").PropType<import("./src/types").SdWaterflowTypes.WaterflowItem[]>;
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
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, {
    column: number;
    list: import("./src/types").SdWaterflowTypes.WaterflowItem[];
    confirmButtonText: string;
    loadingText: string;
    delay: number;
    nomoreText: string;
    nomore: boolean;
    distance: number;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        extra?(_: {
            item: {
                url: string;
                width: number;
                height: number;
                title?: string | undefined;
            };
        }): any;
    };
}) & import("vue").Plugin) & Record<string, any>;
export * from './src/waterflow';
export * from './src/types';
