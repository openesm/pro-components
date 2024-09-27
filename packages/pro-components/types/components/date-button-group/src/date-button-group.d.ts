import { ExtractPublicPropTypes, PropType } from 'vue';

export declare const sdDateButtonGroupProps: {
    type: {
        type: PropType<"day" | "week" | "month" | "year">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const sdDateButtonGroupEmits: string[];
export type SdDateButtonGroupProps = ExtractPublicPropTypes<typeof sdDateButtonGroupProps>;
