import type { ExtractPublicPropTypes, PropType } from 'vue';
import type { SdProFormDefine } from './types';
import type { RowProps } from 'element-plus';
export declare const sdProFormProps: {
    schema: {
        type: PropType<SdProFormDefine.SchemaConfig[]>;
    };
    fieldsConfig: {
        type: PropType<SdProFormDefine.FieldsConifg>;
    };
    rulesConfig: {
        type: PropType<SdProFormDefine.RulesConfig>;
    };
    layout: {
        type: BooleanConstructor;
    };
    rowProps: {
        type: PropType<RowProps>;
    };
    model: {
        type: PropType<Record<string, any>>;
    };
    labelWidth: {
        default: number;
        type: PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelSuffix: {
        default: string;
        type: PropType<string>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    rules: {
        readonly type: PropType<Partial<Record<string, import("element-plus/es/utils/typescript.mjs").Arrayable<import("element-plus").FormItemRule>>>>;
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
        readonly type: PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: {
        readonly type: PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
};
export declare const sdProFormEmits: {
    submit: null;
    'update:model': null;
    validate: (prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => boolean;
};
export declare const sdProFormOmitKeys: string[];
export type SdProFormProps = ExtractPublicPropTypes<typeof sdProFormProps>;
