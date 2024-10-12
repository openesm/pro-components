export declare const SdTypeTree: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            title: string;
            width: string | number;
            prop: import("./src/types").SdTypeTreeTypes.PropConfig;
            list: unknown[];
            headClass: string | Record<string, string>;
            headStyle: string | import("vue").CSSProperties;
            mainClass: string | Record<string, string>;
            mainStyle: string | import("vue").CSSProperties;
            footClass: string | Record<string, string>;
            footStyle: string | import("vue").CSSProperties;
            showHead: boolean;
            showFoot: boolean;
            showRefresh: boolean;
            accordion: boolean;
            nodeKey: string;
        }> & Omit<{
            readonly title: string;
            readonly width: string | number;
            readonly prop: import("./src/types").SdTypeTreeTypes.PropConfig;
            readonly list: unknown[];
            readonly headClass: string | Record<string, string>;
            readonly headStyle: string | import("vue").CSSProperties;
            readonly mainClass: string | Record<string, string>;
            readonly mainStyle: string | import("vue").CSSProperties;
            readonly footClass: string | Record<string, string>;
            readonly footStyle: string | import("vue").CSSProperties;
            readonly showHead: boolean;
            readonly showFoot: boolean;
            readonly showRefresh: boolean;
            readonly accordion: boolean;
            readonly nodeKey: string;
            readonly emptyText?: string | undefined;
            readonly renderContent?: Function | undefined;
            "onNode-expand"?: ((...args: any[]) => any) | undefined;
            "onNode-click"?: ((...args: any[]) => any) | undefined;
            "onNode-collapse"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            width: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            headClass: {
                type: import("vue").PropType<string | Record<string, string>>;
                default: string;
            };
            headStyle: {
                type: import("vue").PropType<string | import("vue").CSSProperties>;
                default: string;
            };
            mainClass: {
                type: import("vue").PropType<string | Record<string, string>>;
                default: string;
            };
            mainStyle: {
                type: import("vue").PropType<string | import("vue").CSSProperties>;
                default: string;
            };
            footClass: {
                type: import("vue").PropType<string | Record<string, string>>;
                default: string;
            };
            footStyle: {
                type: import("vue").PropType<string | import("vue").CSSProperties>;
                default: string;
            };
            showHead: {
                type: BooleanConstructor;
                default: boolean;
            };
            showFoot: {
                type: BooleanConstructor;
                default: boolean;
            };
            title: {
                type: StringConstructor;
                default: string;
            };
            list: {
                type: ArrayConstructor;
                default: () => never[];
            };
            prop: {
                type: import("vue").PropType<import("./src/types").SdTypeTreeTypes.PropConfig>;
                default: () => void;
            };
            emptyText: {
                type: StringConstructor;
            };
            showRefresh: {
                type: BooleanConstructor;
                default: boolean;
            };
            renderContent: {
                type: FunctionConstructor;
            };
            accordion: {
                type: BooleanConstructor;
                default: boolean;
            };
            nodeKey: {
                type: StringConstructor;
                default: string;
            };
        }>> & {
            "onNode-expand"?: ((...args: any[]) => any) | undefined;
            "onNode-click"?: ((...args: any[]) => any) | undefined;
            "onNode-collapse"?: ((...args: any[]) => any) | undefined;
        }, "title" | "width" | "prop" | "list" | "headClass" | "headStyle" | "mainClass" | "mainStyle" | "footClass" | "footStyle" | "showHead" | "showFoot" | "showRefresh" | "accordion" | "nodeKey">;
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
        $emit: (event: "node-expand" | "node-click" | "node-collapse", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            width: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            headClass: {
                type: import("vue").PropType<string | Record<string, string>>;
                default: string;
            };
            headStyle: {
                type: import("vue").PropType<string | import("vue").CSSProperties>;
                default: string;
            };
            mainClass: {
                type: import("vue").PropType<string | Record<string, string>>;
                default: string;
            };
            mainStyle: {
                type: import("vue").PropType<string | import("vue").CSSProperties>;
                default: string;
            };
            footClass: {
                type: import("vue").PropType<string | Record<string, string>>;
                default: string;
            };
            footStyle: {
                type: import("vue").PropType<string | import("vue").CSSProperties>;
                default: string;
            };
            showHead: {
                type: BooleanConstructor;
                default: boolean;
            };
            showFoot: {
                type: BooleanConstructor;
                default: boolean;
            };
            title: {
                type: StringConstructor;
                default: string;
            };
            list: {
                type: ArrayConstructor;
                default: () => never[];
            };
            prop: {
                type: import("vue").PropType<import("./src/types").SdTypeTreeTypes.PropConfig>;
                default: () => void;
            };
            emptyText: {
                type: StringConstructor;
            };
            showRefresh: {
                type: BooleanConstructor;
                default: boolean;
            };
            renderContent: {
                type: FunctionConstructor;
            };
            accordion: {
                type: BooleanConstructor;
                default: boolean;
            };
            nodeKey: {
                type: StringConstructor;
                default: string;
            };
        }>> & {
            "onNode-expand"?: ((...args: any[]) => any) | undefined;
            "onNode-click"?: ((...args: any[]) => any) | undefined;
            "onNode-collapse"?: ((...args: any[]) => any) | undefined;
        }, {
            state: {
                expand_key: string;
                current_key: string;
            };
            wrapstyle$: import("vue").ComputedRef<{
                width: string;
                minWidth: string;
            }>;
            prop$: import("vue").ComputedRef<{
                id: string;
                name: string;
                icon: string;
                children: string;
            }>;
            treeRef: any;
            handleRenderContent: (h: Function, { data }: any) => any;
            onNodeClick: (data: any, node: any, $vm: any) => void;
            onNodeExpand: (data: any, node: any, $vm: any) => void;
            onNodeCollapse: (data: any, node: any, $vm: any) => void;
            setCurrentKey: (key: string) => void;
            setCurrent: (key: string) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("node-expand" | "node-click" | "node-collapse")[], string, {
            title: string;
            width: string | number;
            prop: import("./src/types").SdTypeTreeTypes.PropConfig;
            list: unknown[];
            headClass: string | Record<string, string>;
            headStyle: string | import("vue").CSSProperties;
            mainClass: string | Record<string, string>;
            mainStyle: string | import("vue").CSSProperties;
            footClass: string | Record<string, string>;
            footStyle: string | import("vue").CSSProperties;
            showHead: boolean;
            showFoot: boolean;
            showRefresh: boolean;
            accordion: boolean;
            nodeKey: string;
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
            type: import("vue").PropType<string | number>;
            default: number;
        };
        headClass: {
            type: import("vue").PropType<string | Record<string, string>>;
            default: string;
        };
        headStyle: {
            type: import("vue").PropType<string | import("vue").CSSProperties>;
            default: string;
        };
        mainClass: {
            type: import("vue").PropType<string | Record<string, string>>;
            default: string;
        };
        mainStyle: {
            type: import("vue").PropType<string | import("vue").CSSProperties>;
            default: string;
        };
        footClass: {
            type: import("vue").PropType<string | Record<string, string>>;
            default: string;
        };
        footStyle: {
            type: import("vue").PropType<string | import("vue").CSSProperties>;
            default: string;
        };
        showHead: {
            type: BooleanConstructor;
            default: boolean;
        };
        showFoot: {
            type: BooleanConstructor;
            default: boolean;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        list: {
            type: ArrayConstructor;
            default: () => never[];
        };
        prop: {
            type: import("vue").PropType<import("./src/types").SdTypeTreeTypes.PropConfig>;
            default: () => void;
        };
        emptyText: {
            type: StringConstructor;
        };
        showRefresh: {
            type: BooleanConstructor;
            default: boolean;
        };
        renderContent: {
            type: FunctionConstructor;
        };
        accordion: {
            type: BooleanConstructor;
            default: boolean;
        };
        nodeKey: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        "onNode-expand"?: ((...args: any[]) => any) | undefined;
        "onNode-click"?: ((...args: any[]) => any) | undefined;
        "onNode-collapse"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        state: {
            expand_key: string;
            current_key: string;
        };
        wrapstyle$: import("vue").ComputedRef<{
            width: string;
            minWidth: string;
        }>;
        prop$: import("vue").ComputedRef<{
            id: string;
            name: string;
            icon: string;
            children: string;
        }>;
        treeRef: any;
        handleRenderContent: (h: Function, { data }: any) => any;
        onNodeClick: (data: any, node: any, $vm: any) => void;
        onNodeExpand: (data: any, node: any, $vm: any) => void;
        onNodeCollapse: (data: any, node: any, $vm: any) => void;
        setCurrentKey: (key: string) => void;
        setCurrent: (key: string) => void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    headClass: {
        type: import("vue").PropType<string | Record<string, string>>;
        default: string;
    };
    headStyle: {
        type: import("vue").PropType<string | import("vue").CSSProperties>;
        default: string;
    };
    mainClass: {
        type: import("vue").PropType<string | Record<string, string>>;
        default: string;
    };
    mainStyle: {
        type: import("vue").PropType<string | import("vue").CSSProperties>;
        default: string;
    };
    footClass: {
        type: import("vue").PropType<string | Record<string, string>>;
        default: string;
    };
    footStyle: {
        type: import("vue").PropType<string | import("vue").CSSProperties>;
        default: string;
    };
    showHead: {
        type: BooleanConstructor;
        default: boolean;
    };
    showFoot: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    list: {
        type: ArrayConstructor;
        default: () => never[];
    };
    prop: {
        type: import("vue").PropType<import("./src/types").SdTypeTreeTypes.PropConfig>;
        default: () => void;
    };
    emptyText: {
        type: StringConstructor;
    };
    showRefresh: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderContent: {
        type: FunctionConstructor;
    };
    accordion: {
        type: BooleanConstructor;
        default: boolean;
    };
    nodeKey: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onNode-expand"?: ((...args: any[]) => any) | undefined;
    "onNode-click"?: ((...args: any[]) => any) | undefined;
    "onNode-collapse"?: ((...args: any[]) => any) | undefined;
}, {
    state: {
        expand_key: string;
        current_key: string;
    };
    wrapstyle$: import("vue").ComputedRef<{
        width: string;
        minWidth: string;
    }>;
    prop$: import("vue").ComputedRef<{
        id: string;
        name: string;
        icon: string;
        children: string;
    }>;
    treeRef: any;
    handleRenderContent: (h: Function, { data }: any) => any;
    onNodeClick: (data: any, node: any, $vm: any) => void;
    onNodeExpand: (data: any, node: any, $vm: any) => void;
    onNodeCollapse: (data: any, node: any, $vm: any) => void;
    setCurrentKey: (key: string) => void;
    setCurrent: (key: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("node-expand" | "node-click" | "node-collapse")[], "node-expand" | "node-click" | "node-collapse", {
    title: string;
    width: string | number;
    prop: import("./src/types").SdTypeTreeTypes.PropConfig;
    list: unknown[];
    headClass: string | Record<string, string>;
    headStyle: string | import("vue").CSSProperties;
    mainClass: string | Record<string, string>;
    mainStyle: string | import("vue").CSSProperties;
    footClass: string | Record<string, string>;
    footStyle: string | import("vue").CSSProperties;
    showHead: boolean;
    showFoot: boolean;
    showRefresh: boolean;
    accordion: boolean;
    nodeKey: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin) & Record<string, any>;
export * from './src/type-tree';
export * from './src/types';
