declare const _default: import("vue").DefineComponent<{
    group: {
        type: BooleanConstructor;
    };
    options: {
        type: import("vue").PropType<import("../../../types").OptionComponentTypes.item[]>;
        default: () => never[];
    };
    prop: {
        type: import("vue").PropType<import("../../../types").OptionComponentTypes.PropConfig>;
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
        type: import("vue").PropType<import("../../../types").ComponentSizes>;
    };
    effect: {
        type: import("vue").PropType<string>;
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
    teleported: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: import("vue").PropType<string | import("vue").Component>;
    };
    fitInputWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    suffixIcon: {
        type: import("vue").PropType<string | import("vue").Component>;
    };
    tagType: {
        default: string;
        type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "success" | "warning" | "danger" | "info", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {
    internal_value$: import("vue").WritableComputedRef<string | number | boolean | unknown[] | Record<string, any> | undefined>;
    select_props$: import("vue").ComputedRef<any>;
    prop$: import("vue").ComputedRef<{
        label: string;
        value: string;
        disabled: string;
    }>;
    onChange: (val: string | number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    group: {
        type: BooleanConstructor;
    };
    options: {
        type: import("vue").PropType<import("../../../types").OptionComponentTypes.item[]>;
        default: () => never[];
    };
    prop: {
        type: import("vue").PropType<import("../../../types").OptionComponentTypes.PropConfig>;
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
        type: import("vue").PropType<import("../../../types").ComponentSizes>;
    };
    effect: {
        type: import("vue").PropType<string>;
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
    teleported: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: import("vue").PropType<string | import("vue").Component>;
    };
    fitInputWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    suffixIcon: {
        type: import("vue").PropType<string | import("vue").Component>;
    };
    tagType: {
        default: string;
        type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "success" | "warning" | "danger" | "info", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    group: boolean;
    disabled: boolean;
    persistent: boolean;
    teleported: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    effect: string;
    popperClass: string;
    modelValue: string | number | boolean | unknown[] | Record<string, any>;
    options: import("../../../types").OptionComponentTypes.item[];
    loading: boolean;
    multiple: boolean;
    placeholder: string;
    clearable: boolean;
    autocomplete: string;
    automaticDropdown: boolean;
    filterable: boolean;
    allowCreate: boolean;
    remote: boolean;
    multipleLimit: number;
    defaultFirstOption: boolean;
    reserveKeyword: boolean;
    valueKey: string;
    collapseTags: boolean;
    popperAppendToBody: boolean;
    fitInputWidth: boolean;
    tagType: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "success" | "warning" | "danger" | "info", unknown>;
}, {}>;
export default _default;
