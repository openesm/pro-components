import type { ExtractPublicPropTypes } from 'vue';
export declare const sdInputPriceProps: {
    symbol: {
        type: StringConstructor;
        default: string;
    };
    max: {
        type: NumberConstructor;
    };
    precision: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    type: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
    resize: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "horizontal" | "vertical" | "none" | "both", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    autosize: import("element-plus/es/utils/index.mjs").EpPropFinalized<(new (...args: any[]) => boolean | {
        minRows?: number | undefined;
        maxRows?: number | undefined;
    }) | (() => import("element-plus").InputAutoSize) | ((new (...args: any[]) => boolean | {
        minRows?: number | undefined;
        maxRows?: number | undefined;
    }) | (() => import("element-plus").InputAutoSize))[], unknown, unknown, false, boolean>;
    autocomplete: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
    formatter: {
        readonly type: import("vue").PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    parser: {
        readonly type: import("vue").PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    form: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    showPassword: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    showWordLimit: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    suffixIcon: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    prefixIcon: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    containerRole: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    label: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    tabindex: import("element-plus/es/utils/index.mjs").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    validateEvent: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    inputStyle: import("element-plus/es/utils/index.mjs").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils/typescript.mjs").Mutable<{}>, boolean>;
    autofocus: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
};
export declare const sdInputPriceEmits: {
    'update:modelValue': (_value: number) => boolean;
    input: (value: string) => boolean;
    change: (value: string) => boolean;
    focus: (evt: FocusEvent) => boolean;
    blur: (evt: FocusEvent) => boolean;
    clear: () => boolean;
    mouseleave: (evt: MouseEvent) => boolean;
    mouseenter: (evt: MouseEvent) => boolean;
    keydown: (evt: Event | KeyboardEvent) => boolean;
    compositionstart: (evt: CompositionEvent) => boolean;
    compositionupdate: (evt: CompositionEvent) => boolean;
    compositionend: (evt: CompositionEvent) => boolean;
};
export declare const sdInputPriceOmitKeys: string[];
export type SdInputPriceProps = ExtractPublicPropTypes<typeof sdInputPriceProps>;
