declare const _default: import("vue").DefineComponent<{
    autoActive: {
        type: BooleanConstructor;
        default: boolean;
    };
    activedItem: {
        type: import("vue").PropType<Record<string, any> | null>;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    headerClass: {
        type: StringConstructor;
        default: string;
    };
    headerStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    headerBorderd: {
        type: BooleanConstructor;
        default: boolean;
    };
    showFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    footerClass: {
        type: StringConstructor;
        default: string;
    };
    footerStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    footerBorderd: {
        type: BooleanConstructor;
        default: boolean;
    };
    itemStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    operations: {
        type: import("vue").PropType<import("./types").SdCategoryListTypes.OperationItem<any>[]>;
    };
    data: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    prop: {
        type: import("vue").PropType<import("./types").SdCategoryListTypes.Prop>;
    };
    filterMethod: {
        type: FunctionConstructor;
    };
    showCount: {
        type: BooleanConstructor;
        default: boolean;
    };
    showDesc: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyText: {
        type: StringConstructor;
    };
    emptyStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    emptyConfig: {
        type: import("vue").PropType<Partial<import("element-plus").EmptyProps>>;
    };
    scrollbarConfig: {
        type: import("vue").PropType<Partial<import("element-plus").ScrollbarProps>>;
    };
    enableDargSort: {
        type: BooleanConstructor;
        default: boolean;
    };
    dargSortConfig: {
        type: import("vue").PropType<any>;
    };
}, {
    scrollbar_ref: import("vue").Ref<any>;
    wrap_ref: import("vue").Ref<any>;
    actived_item$: import("vue").WritableComputedRef<Record<string, any> | null>;
    wrap_style$: import("vue").ComputedRef<{
        width: string;
        minWidth: string;
    }>;
    prop$: import("vue").ComputedRef<{
        label: string;
        value: string;
        icon: string;
        count: string;
        desc: any;
    }>;
    onScroll: (detail: {
        scrollTop: number;
    }) => void;
    onClick: (item: any, index: number) => void;
    scrollIntoView: (active_item: any) => void;
    setActiveItem: (active_item: any) => void;
    restoreSort: () => void;
    scroll_top: import("vue").Ref<number>;
    list: import("vue").Ref<any>;
    origin_list: import("vue").Ref<any[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    autoActive: {
        type: BooleanConstructor;
        default: boolean;
    };
    activedItem: {
        type: import("vue").PropType<Record<string, any> | null>;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    headerClass: {
        type: StringConstructor;
        default: string;
    };
    headerStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    headerBorderd: {
        type: BooleanConstructor;
        default: boolean;
    };
    showFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    footerClass: {
        type: StringConstructor;
        default: string;
    };
    footerStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    footerBorderd: {
        type: BooleanConstructor;
        default: boolean;
    };
    itemStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    operations: {
        type: import("vue").PropType<import("./types").SdCategoryListTypes.OperationItem<any>[]>;
    };
    data: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    prop: {
        type: import("vue").PropType<import("./types").SdCategoryListTypes.Prop>;
    };
    filterMethod: {
        type: FunctionConstructor;
    };
    showCount: {
        type: BooleanConstructor;
        default: boolean;
    };
    showDesc: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyText: {
        type: StringConstructor;
    };
    emptyStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    emptyConfig: {
        type: import("vue").PropType<Partial<import("element-plus").EmptyProps>>;
    };
    scrollbarConfig: {
        type: import("vue").PropType<Partial<import("element-plus").ScrollbarProps>>;
    };
    enableDargSort: {
        type: BooleanConstructor;
        default: boolean;
    };
    dargSortConfig: {
        type: import("vue").PropType<any>;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    headerClass: string;
    disabled: boolean;
    data: any[];
    autoActive: boolean;
    activedItem: Record<string, any> | null;
    width: string | number;
    showHeader: boolean;
    headerBorderd: boolean;
    showFooter: boolean;
    footerClass: string;
    footerBorderd: boolean;
    showCount: boolean;
    showDesc: boolean;
    enableDargSort: boolean;
}, {}>;
export default _default;
