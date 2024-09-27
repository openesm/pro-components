import { ExtractPublicPropTypes, PropType, Component } from 'vue';
import { ComponentSizes, OptionComponentTypes } from '../../../types';

export declare const sdSelectProps: {
    group: {
        type: BooleanConstructor;
    };
    options: {
        type: PropType<OptionComponentTypes.item[]>;
        default: () => never[];
    };
    prop: {
        type: PropType<OptionComponentTypes.PropConfig>;
    };
    modelValue: {
        type: (StringConstructor | ObjectConstructor | BooleanConstructor | NumberConstructor | ArrayConstructor)[];
        default: undefined;
    };
    name: StringConstructor;
    id: StringConstructor;
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    size: {
        type: PropType<ComponentSizes>;
    };
    effect: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowCreate: BooleanConstructor;
    loading: BooleanConstructor;
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    remote: BooleanConstructor;
    loadingText: StringConstructor;
    noMatchText: StringConstructor;
    noDataText: StringConstructor;
    remoteMethod: FunctionConstructor;
    filterMethod: FunctionConstructor;
    multiple: BooleanConstructor;
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    defaultFirstOption: BooleanConstructor;
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    collapseTags: BooleanConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: undefined;
    };
    teleported: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: PropType<string | Component>;
    };
    fitInputWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    suffixIcon: {
        type: PropType<string | Component>;
    };
    tagType: {
        default: string;
        type: PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "success" | "warning" | "danger" | "info", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const sdSelectEmits: string[];
export declare const sdSelectOmitKeys: string[];
export type SelectProps = ExtractPublicPropTypes<typeof sdSelectProps>;
