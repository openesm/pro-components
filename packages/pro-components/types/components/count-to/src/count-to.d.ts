import type { ExtractPublicPropTypes } from 'vue';
import type _CountTo from './count-to.vue';
export declare const sdCountToProps: {
    startVal: {
        type: NumberConstructor;
        default: number;
    };
    endVal: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    decimals: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    decimal: {
        type: StringConstructor;
        default: string;
    };
    separator: {
        type: StringConstructor;
        default: string;
    };
    prefix: {
        type: StringConstructor;
        default: string;
    };
    suffix: {
        type: StringConstructor;
        default: string;
    };
    useEasing: {
        type: BooleanConstructor;
        default: boolean;
    };
    easingFn: {
        type: FunctionConstructor;
        default(t: number, b: number, c: number, d: number): number;
    };
};
export declare const sdCountToEmits: string[];
export type SdCountToProps = ExtractPublicPropTypes<typeof sdCountToProps>;
export type SdCountTo = InstanceType<typeof _CountTo>;
