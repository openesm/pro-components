declare const _default: import('vue').DefineComponent<{
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
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("sort-start" | "sort-end" | "update:modelValue")[], "sort-start" | "sort-end" | "update:modelValue", import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
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
}, {}>;
export default _default;
