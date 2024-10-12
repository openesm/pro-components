export declare const SdCard: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            shadow: "never" | "hover" | "always";
            headerClass: string;
            headerBordered: boolean;
            bordered: boolean;
            ghost: boolean;
            group: boolean;
            colSpan: string | number;
            wrap: boolean;
            contentCenter: boolean;
            bodyClass: string;
            bodyStyle: import("vue").CSSProperties;
            showEmpty: boolean;
            emptyText: string;
            actionsBordered: boolean;
            actions: {
                key: string;
                icon?: import("vue").Component | undefined;
                text?: string | undefined;
            }[];
        }> & Omit<{
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
            readonly shadow: "never" | "hover" | "always";
            readonly headerClass: string;
            readonly headerBordered: boolean;
            readonly bordered: boolean;
            readonly ghost: boolean;
            readonly group: boolean;
            readonly colSpan: string | number;
            readonly wrap: boolean;
            readonly contentCenter: boolean;
            readonly bodyClass: string;
            readonly bodyStyle: import("vue").CSSProperties;
            readonly showEmpty: boolean;
            readonly emptyText: string;
            readonly actionsBordered: boolean;
            readonly actions: {
                key: string;
                icon?: import("vue").Component | undefined;
                text?: string | undefined;
            }[];
            readonly title?: string | undefined;
            readonly subTitle?: string | undefined;
            readonly tooltip?: string | undefined;
            readonly extra?: string | undefined;
            readonly headerStyle?: import("vue").CSSProperties | undefined;
            readonly gutter?: number | number[] | undefined;
            readonly split?: "horizontal" | "vertical" | undefined;
            readonly direction?: "row" | "column" | undefined;
            readonly height?: string | number | undefined;
            readonly maxHeight?: string | number | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            title: {
                type: StringConstructor;
            };
            subTitle: {
                type: StringConstructor;
            };
            tooltip: {
                type: StringConstructor;
            };
            extra: {
                type: StringConstructor;
            };
            shadow: {
                type: import("vue").PropType<"never" | "hover" | "always">;
                default: string;
            };
            headerClass: {
                type: StringConstructor;
                default: string;
            };
            headerStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            headerBordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            ghost: {
                type: BooleanConstructor;
                default: boolean;
            };
            gutter: {
                type: import("vue").PropType<number | number[]>;
            };
            group: {
                type: BooleanConstructor;
                default: boolean;
            };
            colSpan: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            split: {
                type: import("vue").PropType<"horizontal" | "vertical">;
            };
            direction: {
                type: import("vue").PropType<"row" | "column">;
            };
            wrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            contentCenter: {
                type: BooleanConstructor;
                default: boolean;
            };
            height: {
                type: import("vue").PropType<string | number>;
            };
            maxHeight: {
                type: import("vue").PropType<string | number>;
            };
            bodyClass: {
                type: StringConstructor;
                default: string;
            };
            bodyStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: () => {};
            };
            showEmpty: {
                type: BooleanConstructor;
                default: boolean;
            };
            emptyText: {
                type: StringConstructor;
                default: string;
            };
            actionsBordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            actions: {
                type: import("vue").PropType<{
                    key: string;
                    icon?: import("vue").Component | undefined;
                    text?: string | undefined;
                }[]>;
                default: () => never[];
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        }, "shadow" | "headerClass" | "headerBordered" | "bordered" | "ghost" | "group" | "colSpan" | "wrap" | "contentCenter" | "bodyClass" | "bodyStyle" | "showEmpty" | "emptyText" | "actionsBordered" | "actions">;
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
            title: {
                type: StringConstructor;
            };
            subTitle: {
                type: StringConstructor;
            };
            tooltip: {
                type: StringConstructor;
            };
            extra: {
                type: StringConstructor;
            };
            shadow: {
                type: import("vue").PropType<"never" | "hover" | "always">;
                default: string;
            };
            headerClass: {
                type: StringConstructor;
                default: string;
            };
            headerStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            headerBordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            ghost: {
                type: BooleanConstructor;
                default: boolean;
            };
            gutter: {
                type: import("vue").PropType<number | number[]>;
            };
            group: {
                type: BooleanConstructor;
                default: boolean;
            };
            colSpan: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            split: {
                type: import("vue").PropType<"horizontal" | "vertical">;
            };
            direction: {
                type: import("vue").PropType<"row" | "column">;
            };
            wrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            contentCenter: {
                type: BooleanConstructor;
                default: boolean;
            };
            height: {
                type: import("vue").PropType<string | number>;
            };
            maxHeight: {
                type: import("vue").PropType<string | number>;
            };
            bodyClass: {
                type: StringConstructor;
                default: string;
            };
            bodyStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: () => {};
            };
            showEmpty: {
                type: BooleanConstructor;
                default: boolean;
            };
            emptyText: {
                type: StringConstructor;
                default: string;
            };
            actionsBordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            actions: {
                type: import("vue").PropType<{
                    key: string;
                    icon?: import("vue").Component | undefined;
                    text?: string | undefined;
                }[]>;
                default: () => never[];
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        }, {
            childVNodes: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            isContainer$: import("vue").ComputedRef<boolean>;
            bodyFlexDirection$: import("vue").ComputedRef<"row" | "column" | undefined>;
            getBodyGutterStyle: () => import("vue").CSSProperties;
            getCardColClass: (component: any, idx: number) => string[];
            getCardColStyle: (component: any) => import("vue").CSSProperties;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
            shadow: "never" | "hover" | "always";
            headerClass: string;
            headerBordered: boolean;
            bordered: boolean;
            ghost: boolean;
            group: boolean;
            colSpan: string | number;
            wrap: boolean;
            contentCenter: boolean;
            bodyClass: string;
            bodyStyle: import("vue").CSSProperties;
            showEmpty: boolean;
            emptyText: string;
            actionsBordered: boolean;
            actions: {
                key: string;
                icon?: import("vue").Component | undefined;
                text?: string | undefined;
            }[];
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
        title: {
            type: StringConstructor;
        };
        subTitle: {
            type: StringConstructor;
        };
        tooltip: {
            type: StringConstructor;
        };
        extra: {
            type: StringConstructor;
        };
        shadow: {
            type: import("vue").PropType<"never" | "hover" | "always">;
            default: string;
        };
        headerClass: {
            type: StringConstructor;
            default: string;
        };
        headerStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        headerBordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        ghost: {
            type: BooleanConstructor;
            default: boolean;
        };
        gutter: {
            type: import("vue").PropType<number | number[]>;
        };
        group: {
            type: BooleanConstructor;
            default: boolean;
        };
        colSpan: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        split: {
            type: import("vue").PropType<"horizontal" | "vertical">;
        };
        direction: {
            type: import("vue").PropType<"row" | "column">;
        };
        wrap: {
            type: BooleanConstructor;
            default: boolean;
        };
        contentCenter: {
            type: BooleanConstructor;
            default: boolean;
        };
        height: {
            type: import("vue").PropType<string | number>;
        };
        maxHeight: {
            type: import("vue").PropType<string | number>;
        };
        bodyClass: {
            type: StringConstructor;
            default: string;
        };
        bodyStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: () => {};
        };
        showEmpty: {
            type: BooleanConstructor;
            default: boolean;
        };
        emptyText: {
            type: StringConstructor;
            default: string;
        };
        actionsBordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        actions: {
            type: import("vue").PropType<{
                key: string;
                icon?: import("vue").Component | undefined;
                text?: string | undefined;
            }[]>;
            default: () => never[];
        };
    }>> & {
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        childVNodes: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        isContainer$: import("vue").ComputedRef<boolean>;
        bodyFlexDirection$: import("vue").ComputedRef<"row" | "column" | undefined>;
        getBodyGutterStyle: () => import("vue").CSSProperties;
        getCardColClass: (component: any, idx: number) => string[];
        getCardColStyle: (component: any) => import("vue").CSSProperties;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
    };
    subTitle: {
        type: StringConstructor;
    };
    tooltip: {
        type: StringConstructor;
    };
    extra: {
        type: StringConstructor;
    };
    shadow: {
        type: import("vue").PropType<"never" | "hover" | "always">;
        default: string;
    };
    headerClass: {
        type: StringConstructor;
        default: string;
    };
    headerStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    headerBordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    ghost: {
        type: BooleanConstructor;
        default: boolean;
    };
    gutter: {
        type: import("vue").PropType<number | number[]>;
    };
    group: {
        type: BooleanConstructor;
        default: boolean;
    };
    colSpan: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    split: {
        type: import("vue").PropType<"horizontal" | "vertical">;
    };
    direction: {
        type: import("vue").PropType<"row" | "column">;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    contentCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: import("vue").PropType<string | number>;
    };
    maxHeight: {
        type: import("vue").PropType<string | number>;
    };
    bodyClass: {
        type: StringConstructor;
        default: string;
    };
    bodyStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    showEmpty: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
    actionsBordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    actions: {
        type: import("vue").PropType<{
            key: string;
            icon?: import("vue").Component | undefined;
            text?: string | undefined;
        }[]>;
        default: () => never[];
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    childVNodes: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    isContainer$: import("vue").ComputedRef<boolean>;
    bodyFlexDirection$: import("vue").ComputedRef<"row" | "column" | undefined>;
    getBodyGutterStyle: () => import("vue").CSSProperties;
    getCardColClass: (component: any, idx: number) => string[];
    getCardColStyle: (component: any) => import("vue").CSSProperties;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
    shadow: "never" | "hover" | "always";
    headerClass: string;
    headerBordered: boolean;
    bordered: boolean;
    ghost: boolean;
    group: boolean;
    colSpan: string | number;
    wrap: boolean;
    contentCenter: boolean;
    bodyClass: string;
    bodyStyle: import("vue").CSSProperties;
    showEmpty: boolean;
    emptyText: string;
    actionsBordered: boolean;
    actions: {
        key: string;
        icon?: import("vue").Component | undefined;
        text?: string | undefined;
    }[];
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin) & Record<string, any>;
export * from './src/card';
