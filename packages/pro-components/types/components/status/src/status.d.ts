import type { ExtractPublicPropTypes, PropType } from 'vue';
import type { ComponentTypes } from '../../../types';
export declare const sdStatusProps: {
    type: {
        type: PropType<ComponentTypes>;
        default: string;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
};
export type SdStatusProps = ExtractPublicPropTypes<typeof sdStatusProps>;
