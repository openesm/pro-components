export declare const SdTitleBar: ({
    new (...args: any[]): {
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            title: string;
            subTitle: string;
            type: import('../../types').ComponentTypes;
            desc: string;
            arrow: boolean;
        }> & Omit<{
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
            readonly title: string;
            readonly subTitle: string;
            readonly type: import('../../types').ComponentTypes;
            readonly desc: string;
            readonly arrow: boolean;
            readonly bodyClass?: string | undefined;
            readonly bodyStyle?: import('vue').StyleValue | undefined;
            readonly icon?: import('vue').Component | undefined;
            readonly iconColor?: string | undefined;
            readonly iconSize?: number | undefined;
            readonly headClass?: string | undefined;
            readonly headStyle?: import('vue').StyleValue | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
            type: {
                type: import('vue').PropType<import('../../types').ComponentTypes>;
                default: string;
            };
            icon: {
                type: import('vue').PropType<import('vue').Component>;
            };
            iconColor: {
                type: StringConstructor;
            };
            iconSize: {
                type: NumberConstructor;
            };
            title: {
                type: StringConstructor;
                default: string;
            };
            subTitle: {
                type: StringConstructor;
                default: string;
            };
            desc: {
                type: StringConstructor;
                default: string;
            };
            arrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            headClass: {
                type: StringConstructor;
            };
            headStyle: {
                type: import('vue').PropType<import('vue').StyleValue>;
            };
            bodyClass: {
                type: StringConstructor;
            };
            bodyStyle: {
                type: import('vue').PropType<import('vue').StyleValue>;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        }, "title" | "subTitle" | "type" | "desc" | "arrow">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
            type: {
                type: import('vue').PropType<import('../../types').ComponentTypes>;
                default: string;
            };
            icon: {
                type: import('vue').PropType<import('vue').Component>;
            };
            iconColor: {
                type: StringConstructor;
            };
            iconSize: {
                type: NumberConstructor;
            };
            title: {
                type: StringConstructor;
                default: string;
            };
            subTitle: {
                type: StringConstructor;
                default: string;
            };
            desc: {
                type: StringConstructor;
                default: string;
            };
            arrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            headClass: {
                type: StringConstructor;
            };
            headStyle: {
                type: import('vue').PropType<import('vue').StyleValue>;
            };
            bodyClass: {
                type: StringConstructor;
            };
            bodyStyle: {
                type: import('vue').PropType<import('vue').StyleValue>;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        }, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, string[], string, {
            title: string;
            subTitle: string;
            type: import('../../types').ComponentTypes;
            desc: string;
            arrow: boolean;
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
        type: {
            type: import('vue').PropType<import('../../types').ComponentTypes>;
            default: string;
        };
        icon: {
            type: import('vue').PropType<import('vue').Component>;
        };
        iconColor: {
            type: StringConstructor;
        };
        iconSize: {
            type: NumberConstructor;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        subTitle: {
            type: StringConstructor;
            default: string;
        };
        desc: {
            type: StringConstructor;
            default: string;
        };
        arrow: {
            type: BooleanConstructor;
            default: boolean;
        };
        headClass: {
            type: StringConstructor;
        };
        headStyle: {
            type: import('vue').PropType<import('vue').StyleValue>;
        };
        bodyClass: {
            type: StringConstructor;
        };
        bodyStyle: {
            type: import('vue').PropType<import('vue').StyleValue>;
        };
    }>> & {
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    } & import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: import('vue').PropType<import('../../types').ComponentTypes>;
        default: string;
    };
    icon: {
        type: import('vue').PropType<import('vue').Component>;
    };
    iconColor: {
        type: StringConstructor;
    };
    iconSize: {
        type: NumberConstructor;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    subTitle: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    headClass: {
        type: StringConstructor;
    };
    headStyle: {
        type: import('vue').PropType<import('vue').StyleValue>;
    };
    bodyClass: {
        type: StringConstructor;
    };
    bodyStyle: {
        type: import('vue').PropType<import('vue').StyleValue>;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, string[], string, {
    title: string;
    subTitle: string;
    type: import('../../types').ComponentTypes;
    desc: string;
    arrow: boolean;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin) & Record<string, any>;
export * from './src/title-bar';
