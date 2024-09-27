import { ExtractPropTypes, PropType, StyleValue } from 'vue';

export declare const sdPageProps: {
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
    readonly bodyClass: {
        readonly type: StringConstructor;
    };
    readonly bodyStyle: {
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
};
export type SdPageProps = ExtractPropTypes<typeof sdPageProps>;
