import type { PropType, ExtractPublicPropTypes } from 'vue';
import type { SdWaterflowTypes } from './types';
import type { ScrollbarProps } from 'element-plus';
export declare const sdWaterflowProps: {
    list: {
        type: PropType<SdWaterflowTypes.WaterflowItem[]>;
        default: () => never[];
    };
    column: {
        type: NumberConstructor;
        default: number;
    };
    confirmButtonText: {
        type: StringConstructor;
        default: string;
    };
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    nomoreText: {
        type: StringConstructor;
        default: string;
    };
    nomore: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollbarConfig: {
        type: PropType<Partial<ScrollbarProps>>;
    };
    loadmore: {
        type: FunctionConstructor;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    distance: {
        type: NumberConstructor;
        default: number;
    };
};
export declare const sdWaterflowEmits: string[];
export type SdWaterflowProps = ExtractPublicPropTypes<typeof sdWaterflowProps>;
