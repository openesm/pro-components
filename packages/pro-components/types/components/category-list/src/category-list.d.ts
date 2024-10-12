import type { ExtractPublicPropTypes, PropType, CSSProperties } from 'vue';
import type { EmptyProps, ScrollbarProps } from 'element-plus';
import type { SdCategoryListTypes } from './types';
export declare const sdCategoryListProps: {
    autoActive: {
        type: BooleanConstructor;
        default: boolean;
    };
    activedItem: {
        type: PropType<Record<string, any> | null>;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: PropType<string | number>;
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
        type: PropType<CSSProperties>;
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
        type: PropType<CSSProperties>;
    };
    footerBorderd: {
        type: BooleanConstructor;
        default: boolean;
    };
    itemStyle: {
        type: PropType<CSSProperties>;
    };
    operations: {
        type: PropType<SdCategoryListTypes.OperationItem<any>[]>;
    };
    data: {
        type: PropType<any[]>;
        default: () => never[];
    };
    prop: {
        type: PropType<SdCategoryListTypes.Prop>;
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
        type: PropType<CSSProperties>;
    };
    emptyConfig: {
        type: PropType<Partial<EmptyProps>>;
    };
    scrollbarConfig: {
        type: PropType<Partial<ScrollbarProps>>;
    };
    enableDargSort: {
        type: BooleanConstructor;
        default: boolean;
    };
    dargSortConfig: {
        type: PropType<any>;
    };
};
export declare const sdCategoryListEmits: string[];
export type SdCategoryListProps = ExtractPublicPropTypes<typeof sdCategoryListProps>;
