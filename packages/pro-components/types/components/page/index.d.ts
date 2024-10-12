export declare const SdPage: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly wrap: boolean;
            readonly lockScroll: boolean;
            readonly headerFixed: boolean;
            readonly footerFixed: boolean;
        }> & Omit<{
            readonly wrap: boolean;
            readonly lockScroll: boolean;
            readonly headerFixed: boolean;
            readonly footerFixed: boolean;
            readonly title?: string | undefined;
            readonly headerClass?: string | undefined;
            readonly headerStyle?: import("vue").StyleValue | undefined;
            readonly bodyClass?: string | undefined;
            readonly bodyStyle?: import("vue").StyleValue | undefined;
            readonly footerClass?: string | undefined;
            readonly footerStyle?: import("vue").StyleValue | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly lockScroll: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly title: {
                readonly type: StringConstructor;
            };
            readonly wrap: {
                readonly type: BooleanConstructor;
            };
            readonly headerFixed: {
                readonly type: BooleanConstructor;
            };
            readonly headerClass: {
                readonly type: StringConstructor;
            };
            readonly headerStyle: {
                readonly type: import("vue").PropType<import("vue").StyleValue>;
            };
            readonly bodyClass: {
                readonly type: StringConstructor;
            };
            readonly bodyStyle: {
                readonly type: import("vue").PropType<import("vue").StyleValue>;
            };
            readonly footerFixed: {
                readonly type: BooleanConstructor;
            };
            readonly footerClass: {
                readonly type: StringConstructor;
            };
            readonly footerStyle: {
                readonly type: import("vue").PropType<import("vue").StyleValue>;
            };
        }>>, "wrap" | "lockScroll" | "headerFixed" | "footerFixed">;
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
            readonly lockScroll: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly title: {
                readonly type: StringConstructor;
            };
            readonly wrap: {
                readonly type: BooleanConstructor;
            };
            readonly headerFixed: {
                readonly type: BooleanConstructor;
            };
            readonly headerClass: {
                readonly type: StringConstructor;
            };
            readonly headerStyle: {
                readonly type: import("vue").PropType<import("vue").StyleValue>;
            };
            readonly bodyClass: {
                readonly type: StringConstructor;
            };
            readonly bodyStyle: {
                readonly type: import("vue").PropType<import("vue").StyleValue>;
            };
            readonly footerFixed: {
                readonly type: BooleanConstructor;
            };
            readonly footerClass: {
                readonly type: StringConstructor;
            };
            readonly footerStyle: {
                readonly type: import("vue").PropType<import("vue").StyleValue>;
            };
        }>>, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            readonly wrap: boolean;
            readonly lockScroll: boolean;
            readonly headerFixed: boolean;
            readonly footerFixed: boolean;
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
        readonly lockScroll: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly title: {
            readonly type: StringConstructor;
        };
        readonly wrap: {
            readonly type: BooleanConstructor;
        };
        readonly headerFixed: {
            readonly type: BooleanConstructor;
        };
        readonly headerClass: {
            readonly type: StringConstructor;
        };
        readonly headerStyle: {
            readonly type: import("vue").PropType<import("vue").StyleValue>;
        };
        readonly bodyClass: {
            readonly type: StringConstructor;
        };
        readonly bodyStyle: {
            readonly type: import("vue").PropType<import("vue").StyleValue>;
        };
        readonly footerFixed: {
            readonly type: BooleanConstructor;
        };
        readonly footerClass: {
            readonly type: StringConstructor;
        };
        readonly footerStyle: {
            readonly type: import("vue").PropType<import("vue").StyleValue>;
        };
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly title: {
        readonly type: StringConstructor;
    };
    readonly wrap: {
        readonly type: BooleanConstructor;
    };
    readonly headerFixed: {
        readonly type: BooleanConstructor;
    };
    readonly headerClass: {
        readonly type: StringConstructor;
    };
    readonly headerStyle: {
        readonly type: import("vue").PropType<import("vue").StyleValue>;
    };
    readonly bodyClass: {
        readonly type: StringConstructor;
    };
    readonly bodyStyle: {
        readonly type: import("vue").PropType<import("vue").StyleValue>;
    };
    readonly footerFixed: {
        readonly type: BooleanConstructor;
    };
    readonly footerClass: {
        readonly type: StringConstructor;
    };
    readonly footerStyle: {
        readonly type: import("vue").PropType<import("vue").StyleValue>;
    };
}>>, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly wrap: boolean;
    readonly lockScroll: boolean;
    readonly headerFixed: boolean;
    readonly footerFixed: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin) & Record<string, any>;
export * from './src/page';
