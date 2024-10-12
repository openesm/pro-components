import type { ExtractPropTypes, PropType, CSSProperties } from 'vue';
export declare const sdTypeListProps: {
    width: {
        type: PropType<string | number>;
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
        type: PropType<CSSProperties>;
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
        type: PropType<CSSProperties>;
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
        type: PropType<{
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
        type: PropType<Record<string, any> | null>;
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
};
export type SdTypeListProps = ExtractPropTypes<typeof sdTypeListProps>;
