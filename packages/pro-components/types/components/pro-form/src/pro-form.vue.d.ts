import type { SdProFormDefine } from './types';
import type { VNode } from 'vue';
import type { FormItemProp } from 'element-plus';
declare const _default: import("vue").DefineComponent<{
    schema: {
        type: import("vue").PropType<SdProFormDefine.SchemaConfig[]>;
    };
    fieldsConfig: {
        type: import("vue").PropType<SdProFormDefine.FieldsConifg>;
    };
    rulesConfig: {
        type: import("vue").PropType<SdProFormDefine.RulesConfig>;
    };
    layout: {
        type: BooleanConstructor;
    };
    rowProps: {
        type: import("vue").PropType<import("element-plus").RowProps>;
    };
    model: {
        type: import("vue").PropType<Record<string, any>>;
    };
    labelWidth: {
        default: number;
        type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelSuffix: {
        default: string;
        type: import("vue").PropType<string>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    rules: {
        readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils/typescript.mjs").Arrayable<import("element-plus").FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
    requireAsteriskPosition: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    validateOnRuleChange: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    hideRequiredAsterisk: BooleanConstructor;
    scrollToError: BooleanConstructor;
    scrollIntoViewOptions: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: null;
    'update:model': null;
    validate: (prop: FormItemProp, isValid: boolean, message: string) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    schema: {
        type: import("vue").PropType<SdProFormDefine.SchemaConfig[]>;
    };
    fieldsConfig: {
        type: import("vue").PropType<SdProFormDefine.FieldsConifg>;
    };
    rulesConfig: {
        type: import("vue").PropType<SdProFormDefine.RulesConfig>;
    };
    layout: {
        type: BooleanConstructor;
    };
    rowProps: {
        type: import("vue").PropType<import("element-plus").RowProps>;
    };
    model: {
        type: import("vue").PropType<Record<string, any>>;
    };
    labelWidth: {
        default: number;
        type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelSuffix: {
        default: string;
        type: import("vue").PropType<string>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    rules: {
        readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils/typescript.mjs").Arrayable<import("element-plus").FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
    requireAsteriskPosition: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    validateOnRuleChange: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    hideRequiredAsterisk: BooleanConstructor;
    scrollToError: BooleanConstructor;
    scrollIntoViewOptions: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
}>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
    onValidate?: ((prop: FormItemProp, isValid: boolean, message: string) => any) | undefined;
    "onUpdate:model"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    inline: boolean;
    layout: boolean;
    labelPosition: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
    requireAsteriskPosition: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "left" | "right", unknown>;
    labelWidth: import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    labelSuffix: string;
    inlineMessage: boolean;
    statusIcon: boolean;
    showMessage: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    validateOnRuleChange: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    hideRequiredAsterisk: boolean;
    scrollToError: boolean;
}, {}>;
export default _default;
