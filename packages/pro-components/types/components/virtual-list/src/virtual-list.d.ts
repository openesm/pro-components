import type { ExtractPublicPropTypes, PropType } from 'vue';
export declare const sdVirtualListProps: {
    height: {
        type: NumberConstructor;
        required: boolean;
    };
    minHeight: {
        type: NumberConstructor;
    };
    maxHeight: {
        type: NumberConstructor;
    };
    width: {
        type: NumberConstructor;
    };
    minWidth: {
        type: NumberConstructor;
    };
    maxWidth: {
        type: NumberConstructor;
    };
    bench: {
        type: NumberConstructor;
        default: number;
    };
    itemHeight: {
        type: NumberConstructor;
        required: boolean;
    };
    items: {
        type: PropType<any[]>;
        default: () => never[];
    };
};
export type SdVirtualListProps = ExtractPublicPropTypes<typeof sdVirtualListProps>;
