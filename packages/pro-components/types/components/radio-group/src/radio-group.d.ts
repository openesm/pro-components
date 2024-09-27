import { ExtractPublicPropTypes, PropType, CSSProperties } from 'vue';
import { OptionComponentTypes } from '../../../types';

export declare const sdRadioGroupProps: {
    button: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCount: {
        type: BooleanConstructor;
        deafult: boolean;
    };
    showCountZero: {
        type: BooleanConstructor;
        deafult: boolean;
    };
    options: {
        type: PropType<OptionComponentTypes.item[]>;
        default: () => never[];
    };
    prop: {
        type: PropType<OptionComponentTypes.PropConfig>;
    };
    badgeStyle: {
        type: PropType<CSSProperties>;
    };
    badgeType: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "primary" | "success" | "warning" | "danger" | "info", unknown, "danger", boolean>;
    badgeMax: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 99, boolean>;
    id: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    size: {
        readonly type: PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    modelValue: import('element-plus/es/utils/index.mjs').EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
    fill: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    label: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    textColor: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    name: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    validateEvent: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};
export declare const sdRadioGroupEmits: {
    "update:modelValue": (val: string | number | boolean) => boolean;
    change: (val: string | number | boolean) => boolean;
};
export declare const sdRadioGroupOmitKeys: string[];
export type SdRadioGroupProps = ExtractPublicPropTypes<typeof sdRadioGroupProps>;
