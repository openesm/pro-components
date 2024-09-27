export declare const SdCategoryList: ({
    new (...args: any[]): {
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<{
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
            readonly title: string;
            readonly headerClass: string;
            readonly disabled: boolean;
            readonly data: any[];
            readonly autoActive: boolean;
            readonly activedItem: Record<string, any> | null;
            readonly width: string | number;
            readonly showHeader: boolean;
            readonly headerBorderd: boolean;
            readonly showFooter: boolean;
            readonly footerClass: string;
            readonly footerBorderd: boolean;
            readonly showCount: boolean;
            readonly showDesc: boolean;
            readonly enableDargSort: boolean;
            readonly headerStyle?: import('vue').CSSProperties | undefined;
            readonly emptyText?: string | undefined;
            readonly footerStyle?: import('vue').CSSProperties | undefined;
            readonly itemStyle?: import('vue').CSSProperties | undefined;
            readonly operations?: import("./src/types").SdCategoryListTypes.OperationItem<any>[] | undefined;
            readonly prop?: import("./src/types").SdCategoryListTypes.Prop | undefined;
            readonly filterMethod?: Function | undefined;
            readonly emptyStyle?: import('vue').CSSProperties | undefined;
            readonly emptyConfig?: Partial<import('element-plus').EmptyProps> | undefined;
            readonly scrollbarConfig?: Partial<import('element-plus').ScrollbarProps> | undefined;
            readonly dargSortConfig?: any;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
            autoActive: {
                type: BooleanConstructor;
                default: boolean;
            };
            activedItem: {
                type: import('vue').PropType<Record<string, any> | null>;
                default: null;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            width: {
                type: import('vue').PropType<string | number>;
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
                type: import('vue').PropType<import('vue').CSSProperties>;
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
                type: import('vue').PropType<import('vue').CSSProperties>;
            };
            footerBorderd: {
                type: BooleanConstructor;
                default: boolean;
            };
            itemStyle: {
                type: import('vue').PropType<import('vue').CSSProperties>;
            };
            operations: {
                type: import('vue').PropType<import("./src/types").SdCategoryListTypes.OperationItem<any>[]>;
            };
            data: {
                type: import('vue').PropType<any[]>;
                default: () => never[];
            };
            prop: {
                type: import('vue').PropType<import("./src/types").SdCategoryListTypes.Prop>;
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
                type: import('vue').PropType<import('vue').CSSProperties>;
            };
            emptyConfig: {
                type: import('vue').PropType<Partial<import('element-plus').EmptyProps>>;
            };
            scrollbarConfig: {
                type: import('vue').PropType<Partial<import('element-plus').ScrollbarProps>>;
            };
            enableDargSort: {
                type: BooleanConstructor;
                default: boolean;
            };
            dargSortConfig: {
                type: import('vue').PropType<any>;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        }, "title" | "headerClass" | "disabled" | "data" | "autoActive" | "activedItem" | "width" | "showHeader" | "headerBorderd" | "showFooter" | "footerClass" | "footerBorderd" | "showCount" | "showDesc" | "enableDargSort">;
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
            autoActive: {
                type: BooleanConstructor;
                default: boolean;
            };
            activedItem: {
                type: import('vue').PropType<Record<string, any> | null>;
                default: null;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            width: {
                type: import('vue').PropType<string | number>;
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
                type: import('vue').PropType<import('vue').CSSProperties>;
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
                type: import('vue').PropType<import('vue').CSSProperties>;
            };
            footerBorderd: {
                type: BooleanConstructor;
                default: boolean;
            };
            itemStyle: {
                type: import('vue').PropType<import('vue').CSSProperties>;
            };
            operations: {
                type: import('vue').PropType<import("./src/types").SdCategoryListTypes.OperationItem<any>[]>;
            };
            data: {
                type: import('vue').PropType<any[]>;
                default: () => never[];
            };
            prop: {
                type: import('vue').PropType<import("./src/types").SdCategoryListTypes.Prop>;
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
                type: import('vue').PropType<import('vue').CSSProperties>;
            };
            emptyConfig: {
                type: import('vue').PropType<Partial<import('element-plus').EmptyProps>>;
            };
            scrollbarConfig: {
                type: import('vue').PropType<Partial<import('element-plus').ScrollbarProps>>;
            };
            enableDargSort: {
                type: BooleanConstructor;
                default: boolean;
            };
            dargSortConfig: {
                type: import('vue').PropType<any>;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        }, {
            scrollbar_ref: import('vue').Ref<any>;
            wrap_ref: import('vue').Ref<any>;
            actived_item$: import('vue').WritableComputedRef<Record<string, any> | null>;
            wrap_style$: import('vue').ComputedRef<{
                width: string;
                minWidth: string;
            }>;
            prop$: import('vue').ComputedRef<{
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
            scroll_top: import('vue').Ref<number>;
            list: import('vue').Ref<any>;
            origin_list: import('vue').Ref<any[]>;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, string[], string, {
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
        autoActive: {
            type: BooleanConstructor;
            default: boolean;
        };
        activedItem: {
            type: import('vue').PropType<Record<string, any> | null>;
            default: null;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        width: {
            type: import('vue').PropType<string | number>;
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
            type: import('vue').PropType<import('vue').CSSProperties>;
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
            type: import('vue').PropType<import('vue').CSSProperties>;
        };
        footerBorderd: {
            type: BooleanConstructor;
            default: boolean;
        };
        itemStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
        };
        operations: {
            type: import('vue').PropType<import("./src/types").SdCategoryListTypes.OperationItem<any>[]>;
        };
        data: {
            type: import('vue').PropType<any[]>;
            default: () => never[];
        };
        prop: {
            type: import('vue').PropType<import("./src/types").SdCategoryListTypes.Prop>;
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
            type: import('vue').PropType<import('vue').CSSProperties>;
        };
        emptyConfig: {
            type: import('vue').PropType<Partial<import('element-plus').EmptyProps>>;
        };
        scrollbarConfig: {
            type: import('vue').PropType<Partial<import('element-plus').ScrollbarProps>>;
        };
        enableDargSort: {
            type: BooleanConstructor;
            default: boolean;
        };
        dargSortConfig: {
            type: import('vue').PropType<any>;
        };
    }>> & {
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    } & import('vue').ShallowUnwrapRef<{
        scrollbar_ref: import('vue').Ref<any>;
        wrap_ref: import('vue').Ref<any>;
        actived_item$: import('vue').WritableComputedRef<Record<string, any> | null>;
        wrap_style$: import('vue').ComputedRef<{
            width: string;
            minWidth: string;
        }>;
        prop$: import('vue').ComputedRef<{
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
        scroll_top: import('vue').Ref<number>;
        list: import('vue').Ref<any>;
        origin_list: import('vue').Ref<any[]>;
    }> & {} & import('vue').ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    autoActive: {
        type: BooleanConstructor;
        default: boolean;
    };
    activedItem: {
        type: import('vue').PropType<Record<string, any> | null>;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: import('vue').PropType<string | number>;
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
        type: import('vue').PropType<import('vue').CSSProperties>;
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
        type: import('vue').PropType<import('vue').CSSProperties>;
    };
    footerBorderd: {
        type: BooleanConstructor;
        default: boolean;
    };
    itemStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
    };
    operations: {
        type: import('vue').PropType<import("./src/types").SdCategoryListTypes.OperationItem<any>[]>;
    };
    data: {
        type: import('vue').PropType<any[]>;
        default: () => never[];
    };
    prop: {
        type: import('vue').PropType<import("./src/types").SdCategoryListTypes.Prop>;
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
        type: import('vue').PropType<import('vue').CSSProperties>;
    };
    emptyConfig: {
        type: import('vue').PropType<Partial<import('element-plus').EmptyProps>>;
    };
    scrollbarConfig: {
        type: import('vue').PropType<Partial<import('element-plus').ScrollbarProps>>;
    };
    enableDargSort: {
        type: BooleanConstructor;
        default: boolean;
    };
    dargSortConfig: {
        type: import('vue').PropType<any>;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    scrollbar_ref: import('vue').Ref<any>;
    wrap_ref: import('vue').Ref<any>;
    actived_item$: import('vue').WritableComputedRef<Record<string, any> | null>;
    wrap_style$: import('vue').ComputedRef<{
        width: string;
        minWidth: string;
    }>;
    prop$: import('vue').ComputedRef<{
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
    scroll_top: import('vue').Ref<number>;
    list: import('vue').Ref<any>;
    origin_list: import('vue').Ref<any[]>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, string[], string, {
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
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin) & Record<string, any>;
export * from './src/category-list';
export * from './src/types';
