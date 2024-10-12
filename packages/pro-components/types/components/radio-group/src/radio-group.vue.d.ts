import type { RadioGroupProps } from 'element-plus';
declare const _default: import("vue").DefineComponent<{
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
        type: import("vue").PropType<import("../../../types").OptionComponentTypes.item[]>;
        default: () => never[];
    };
    prop: {
        type: import("vue").PropType<import("../../../types").OptionComponentTypes.PropConfig>;
    };
    badgeStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    badgeType: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, "primary" | "success" | "warning" | "danger" | "info", unknown, "danger", boolean>;
    badgeMax: import("element-plus/es/utils/index.mjs").EpPropFinalized<NumberConstructor, unknown, unknown, 99, boolean>;
    id: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    modelValue: import("element-plus/es/utils/index.mjs").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
    fill: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    label: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    textColor: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    name: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    validateEvent: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, {
    internal_value$: import("vue").WritableComputedRef<import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
    prop$: import("vue").ComputedRef<{
        label: string;
        value: string;
        count: string;
    }>;
    radio_group_props$: import("vue").ComputedRef<RadioGroupProps>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: string | number | boolean) => boolean;
    change: (val: string | number | boolean) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<import("../../../types").OptionComponentTypes.item[]>;
        default: () => never[];
    };
    prop: {
        type: import("vue").PropType<import("../../../types").OptionComponentTypes.PropConfig>;
    };
    badgeStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    badgeType: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, "primary" | "success" | "warning" | "danger" | "info", unknown, "danger", boolean>;
    badgeMax: import("element-plus/es/utils/index.mjs").EpPropFinalized<NumberConstructor, unknown, unknown, 99, boolean>;
    id: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    modelValue: import("element-plus/es/utils/index.mjs").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
    fill: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    label: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    textColor: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    name: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    validateEvent: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
    onChange?: ((val: string | number | boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
}, {
    disabled: boolean;
    id: string;
    fill: string;
    name: string;
    button: boolean;
    label: string;
    showCount: boolean;
    modelValue: import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
    textColor: string;
    validateEvent: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    options: import("../../../types").OptionComponentTypes.item[];
    showCountZero: boolean;
    badgeType: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "danger" | "info", unknown>;
    badgeMax: number;
}, {}>;
export default _default;
