declare const _default: import("vue").DefineComponent<{
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
        type: import("vue").PropType<import("./types").SdTypeTreeTypes.PropConfig>;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("node-expand" | "node-click" | "node-collapse")[], "node-expand" | "node-click" | "node-collapse", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<import("./types").SdTypeTreeTypes.PropConfig>;
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
    title: string;
    width: string | number;
    prop: import("./types").SdTypeTreeTypes.PropConfig;
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
}, {}>;
export default _default;
