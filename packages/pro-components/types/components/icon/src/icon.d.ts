import type { ExtractPublicPropTypes } from 'vue';
export declare const sdIconProps: {
    prefix: {
        type: StringConstructor;
    };
    name: {
        type: StringConstructor;
    };
    size: {
        type: NumberConstructor;
    };
    color: {
        type: StringConstructor;
    };
    inline: {
        type: BooleanConstructor;
    };
};
export type SdIconProps = ExtractPublicPropTypes<typeof sdIconProps>;
