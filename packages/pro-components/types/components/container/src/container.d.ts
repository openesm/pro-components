import { ExtractPublicPropTypes, PropType, StyleValue } from 'vue';
import { ScrollbarProps } from 'element-plus';

export declare const sdContainerProps: {
    readonly lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly title: {
        readonly type: StringConstructor;
    };
    readonly wrap: {
        readonly type: BooleanConstructor;
    };
    readonly headerFixed: {
        readonly type: BooleanConstructor;
    };
    readonly headerClass: {
        readonly type: StringConstructor;
    };
    readonly headerStyle: {
        readonly type: PropType<StyleValue>;
    };
    readonly titleStyle: {
        readonly type: PropType<StyleValue>;
    };
    readonly bodyClass: {
        readonly type: StringConstructor;
    };
    readonly bodyStyle: {
        readonly type: PropType<StyleValue>;
    };
    readonly renderContent: {
        readonly type: BooleanConstructor;
    };
    readonly contentStyle: {
        readonly type: PropType<StyleValue>;
    };
    readonly footerFixed: {
        readonly type: BooleanConstructor;
    };
    readonly footerClass: {
        readonly type: StringConstructor;
    };
    readonly footerStyle: {
        readonly type: PropType<StyleValue>;
    };
    readonly scrollbarConfig: {
        readonly type: PropType<Partial<ScrollbarProps>>;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
    };
    readonly loadingDelay: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly showError: {
        readonly type: BooleanConstructor;
    };
    readonly errorText: {
        readonly type: StringConstructor;
    };
};
export declare const sdContainerEmits: string[];
export type SdContainerProps = ExtractPublicPropTypes<typeof sdContainerProps>;
