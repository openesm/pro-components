import type { CheckboxGroupProps } from 'element-plus';
declare const _default: import("vue").DefineComponent<{
    button: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: import("vue").PropType<import("../../../types").OptionComponentTypes.item[]>;
        default: () => never[];
    };
    prop: {
        type: import("vue").PropType<import("../../../types").OptionComponentTypes.PropConfig>;
    };
    modelValue: import("element-plus/es/utils/index.mjs").EpPropFinalized<(new (...args: any[]) => import("element-plus").CheckboxGroupValueType) | (() => import("element-plus").CheckboxGroupValueType) | ((new (...args: any[]) => import("element-plus").CheckboxGroupValueType) | (() => import("element-plus").CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
    disabled: BooleanConstructor;
    min: NumberConstructor;
    max: NumberConstructor;
    size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    label: StringConstructor;
    fill: StringConstructor;
    textColor: StringConstructor;
    tag: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    validateEvent: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, {
    internal_value$: import("vue").WritableComputedRef<import("element-plus").CheckboxGroupValueType>;
    prop$: import("vue").ComputedRef<{
        label: string;
        value: string;
    }>;
    checkbox_group_props$: import("vue").ComputedRef<CheckboxGroupProps>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: import("element-plus").CheckboxGroupValueType) => boolean;
    change: (val: import("element-plus").CheckboxValueType[]) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    button: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: import("vue").PropType<import("../../../types").OptionComponentTypes.item[]>;
        default: () => never[];
    };
    prop: {
        type: import("vue").PropType<import("../../../types").OptionComponentTypes.PropConfig>;
    };
    modelValue: import("element-plus/es/utils/index.mjs").EpPropFinalized<(new (...args: any[]) => import("element-plus").CheckboxGroupValueType) | (() => import("element-plus").CheckboxGroupValueType) | ((new (...args: any[]) => import("element-plus").CheckboxGroupValueType) | (() => import("element-plus").CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
    disabled: BooleanConstructor;
    min: NumberConstructor;
    max: NumberConstructor;
    size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    label: StringConstructor;
    fill: StringConstructor;
    textColor: StringConstructor;
    tag: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    validateEvent: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
    onChange?: ((val: import("element-plus").CheckboxValueType[]) => any) | undefined;
    "onUpdate:modelValue"?: ((val: import("element-plus").CheckboxGroupValueType) => any) | undefined;
}, {
    disabled: boolean;
    button: boolean;
    tag: string;
    modelValue: import("element-plus").CheckboxGroupValueType;
    validateEvent: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    options: import("../../../types").OptionComponentTypes.item[];
}, {}>;
export default _default;
