import type { ExtractPublicPropTypes, PropType } from 'vue';
import type { OptionComponentTypes } from '../../../types';
import { checkboxGroupProps } from 'element-plus';
export declare const sdCheckboxGroupProps: {
    button: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: PropType<OptionComponentTypes.item[]>;
        default: () => never[];
    };
    prop: {
        type: PropType<OptionComponentTypes.PropConfig>;
    };
    modelValue: import("element-plus/es/utils/index.mjs").EpPropFinalized<(new (...args: any[]) => import("element-plus").CheckboxGroupValueType) | (() => import("element-plus").CheckboxGroupValueType) | ((new (...args: any[]) => import("element-plus").CheckboxGroupValueType) | (() => import("element-plus").CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
    disabled: BooleanConstructor;
    min: NumberConstructor;
    max: NumberConstructor;
    size: {
        readonly type: PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    label: StringConstructor;
    fill: StringConstructor;
    textColor: StringConstructor;
    tag: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    validateEvent: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};
export declare const sdCheckboxGroupEmits: {
    "update:modelValue": (val: import("element-plus").CheckboxGroupValueType) => boolean;
    change: (val: import("element-plus").CheckboxValueType[]) => boolean;
};
export declare const sdCheckboxGroupOmitKeys: string[];
export type SdCheckboxGroupProps = ExtractPublicPropTypes<typeof checkboxGroupProps>;
