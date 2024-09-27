export declare const SdTypeList: ({
    new (...args: any[]): {
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            title: string;
            headerClass: string;
            sort: boolean;
            width: string | number;
            showHeader: boolean;
            showFooter: boolean;
            footerClass: string;
            showCount: boolean;
            list: unknown[];
            modelValue: Record<string, any> | null;
            animation: number;
            showOption: boolean;
            showMore: boolean;
        }> & Omit<{
            readonly title: string;
            readonly headerClass: string;
            readonly sort: boolean;
            readonly width: string | number;
            readonly showHeader: boolean;
            readonly showFooter: boolean;
            readonly footerClass: string;
            readonly showCount: boolean;
            readonly list: unknown[];
            readonly modelValue: Record<string, any> | null;
            readonly animation: number;
            readonly showOption: boolean;
            readonly showMore: boolean;
            readonly headerStyle?: import('vue').CSSProperties | undefined;
            readonly emptyText?: string | undefined;
            readonly filter?: Function | undefined;
            readonly footerStyle?: import('vue').CSSProperties | undefined;
            readonly prop?: {
                label?: string | undefined;
                value?: string | undefined;
                icon?: string | undefined;
                count?: string | undefined;
            } | undefined;
            readonly sortHandle?: string | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            "onSort-start"?: ((...args: any[]) => any) | undefined;
            "onSort-end"?: ((...args: any[]) => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
            width: {
                type: import('vue').PropType<string | number>;
                default: number;
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
            showOption: {
                type: BooleanConstructor;
                default: boolean;
            };
            title: {
                type: StringConstructor;
                default: string;
            };
            showMore: {
                type: BooleanConstructor;
                default: boolean;
            };
            list: {
                type: ArrayConstructor;
                default: () => never[];
            };
            prop: {
                type: import('vue').PropType<{
                    label?: string | undefined;
                    value?: string | undefined;
                    icon?: string | undefined;
                    count?: string | undefined;
                }>;
            };
            showCount: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelValue: {
                type: import('vue').PropType<Record<string, any> | null>;
                default: null;
            };
            emptyText: {
                type: StringConstructor;
            };
            filter: {
                type: FunctionConstructor;
            };
            sort: {
                type: BooleanConstructor;
                default: boolean;
            };
            sortHandle: {
                type: StringConstructor;
            };
            animation: {
                type: NumberConstructor;
                default: number;
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            "onSort-start"?: ((...args: any[]) => any) | undefined;
            "onSort-end"?: ((...args: any[]) => any) | undefined;
        }, "title" | "headerClass" | "sort" | "width" | "showHeader" | "showFooter" | "footerClass" | "showCount" | "list" | "modelValue" | "animation" | "showOption" | "showMore">;
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
        $emit: (event: "sort-start" | "sort-end" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
            width: {
                type: import('vue').PropType<string | number>;
                default: number;
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
            showOption: {
                type: BooleanConstructor;
                default: boolean;
            };
            title: {
                type: StringConstructor;
                default: string;
            };
            showMore: {
                type: BooleanConstructor;
                default: boolean;
            };
            list: {
                type: ArrayConstructor;
                default: () => never[];
            };
            prop: {
                type: import('vue').PropType<{
                    label?: string | undefined;
                    value?: string | undefined;
                    icon?: string | undefined;
                    count?: string | undefined;
                }>;
            };
            showCount: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelValue: {
                type: import('vue').PropType<Record<string, any> | null>;
                default: null;
            };
            emptyText: {
                type: StringConstructor;
            };
            filter: {
                type: FunctionConstructor;
            };
            sort: {
                type: BooleanConstructor;
                default: boolean;
            };
            sortHandle: {
                type: StringConstructor;
            };
            animation: {
                type: NumberConstructor;
                default: number;
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            "onSort-start"?: ((...args: any[]) => any) | undefined;
            "onSort-end"?: ((...args: any[]) => any) | undefined;
        }, {
            internalValue$: import('vue').WritableComputedRef<Record<string, any> | null>;
            wrapStyle$: import('vue').ComputedRef<{
                width: string;
                minWidth: string;
            }>;
            list$: import('vue').ComputedRef<any>;
            prop$: import('vue').ComputedRef<{
                label: string;
                value: string;
                icon: string;
                count: string;
            }>;
            scrollbarRef: import('vue').Ref<any>;
            onScroll: (detail: {
                scrollTop: number;
            }) => void;
            onClick: (element: any) => void;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("sort-start" | "sort-end" | "update:modelValue")[], string, {
            title: string;
            headerClass: string;
            sort: boolean;
            width: string | number;
            showHeader: boolean;
            showFooter: boolean;
            footerClass: string;
            showCount: boolean;
            list: unknown[];
            modelValue: Record<string, any> | null;
            animation: number;
            showOption: boolean;
            showMore: boolean;
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
            default: number;
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
        showOption: {
            type: BooleanConstructor;
            default: boolean;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        showMore: {
            type: BooleanConstructor;
            default: boolean;
        };
        list: {
            type: ArrayConstructor;
            default: () => never[];
        };
        prop: {
            type: import('vue').PropType<{
                label?: string | undefined;
                value?: string | undefined;
                icon?: string | undefined;
                count?: string | undefined;
            }>;
        };
        showCount: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: import('vue').PropType<Record<string, any> | null>;
            default: null;
        };
        emptyText: {
            type: StringConstructor;
        };
        filter: {
            type: FunctionConstructor;
        };
        sort: {
            type: BooleanConstructor;
            default: boolean;
        };
        sortHandle: {
            type: StringConstructor;
        };
        animation: {
            type: NumberConstructor;
            default: number;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        "onSort-start"?: ((...args: any[]) => any) | undefined;
        "onSort-end"?: ((...args: any[]) => any) | undefined;
    } & import('vue').ShallowUnwrapRef<{
        internalValue$: import('vue').WritableComputedRef<Record<string, any> | null>;
        wrapStyle$: import('vue').ComputedRef<{
            width: string;
            minWidth: string;
        }>;
        list$: import('vue').ComputedRef<any>;
        prop$: import('vue').ComputedRef<{
            label: string;
            value: string;
            icon: string;
            count: string;
        }>;
        scrollbarRef: import('vue').Ref<any>;
        onScroll: (detail: {
            scrollTop: number;
        }) => void;
        onClick: (element: any) => void;
    }> & {} & import('vue').ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    width: {
        type: import('vue').PropType<string | number>;
        default: number;
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
    showOption: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    showMore: {
        type: BooleanConstructor;
        default: boolean;
    };
    list: {
        type: ArrayConstructor;
        default: () => never[];
    };
    prop: {
        type: import('vue').PropType<{
            label?: string | undefined;
            value?: string | undefined;
            icon?: string | undefined;
            count?: string | undefined;
        }>;
    };
    showCount: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: import('vue').PropType<Record<string, any> | null>;
        default: null;
    };
    emptyText: {
        type: StringConstructor;
    };
    filter: {
        type: FunctionConstructor;
    };
    sort: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortHandle: {
        type: StringConstructor;
    };
    animation: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onSort-start"?: ((...args: any[]) => any) | undefined;
    "onSort-end"?: ((...args: any[]) => any) | undefined;
}, {
    internalValue$: import('vue').WritableComputedRef<Record<string, any> | null>;
    wrapStyle$: import('vue').ComputedRef<{
        width: string;
        minWidth: string;
    }>;
    list$: import('vue').ComputedRef<any>;
    prop$: import('vue').ComputedRef<{
        label: string;
        value: string;
        icon: string;
        count: string;
    }>;
    scrollbarRef: import('vue').Ref<any>;
    onScroll: (detail: {
        scrollTop: number;
    }) => void;
    onClick: (element: any) => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("sort-start" | "sort-end" | "update:modelValue")[], "sort-start" | "sort-end" | "update:modelValue", {
    title: string;
    headerClass: string;
    sort: boolean;
    width: string | number;
    showHeader: boolean;
    showFooter: boolean;
    footerClass: string;
    showCount: boolean;
    list: unknown[];
    modelValue: Record<string, any> | null;
    animation: number;
    showOption: boolean;
    showMore: boolean;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin) & Record<string, any>;
export * from './src/type-list';
