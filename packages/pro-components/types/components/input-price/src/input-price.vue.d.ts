import { InputProps } from 'element-plus';

declare const _default: import('vue').DefineComponent<{
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
    id: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    type: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
    resize: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "horizontal" | "vertical" | "none" | "both", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    autosize: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => boolean | {
        minRows?: number | undefined;
        maxRows?: number | undefined;
    }) | (() => import('element-plus').InputAutoSize) | ((new (...args: any[]) => boolean | {
        minRows?: number | undefined;
        maxRows?: number | undefined;
    }) | (() => import('element-plus').InputAutoSize))[], unknown, unknown, false, boolean>;
    autocomplete: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
    formatter: {
        readonly type: import('vue').PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    parser: {
        readonly type: import('vue').PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    form: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    showPassword: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    showWordLimit: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    suffixIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    prefixIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    containerRole: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    label: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    tabindex: import('element-plus/es/utils/index.mjs').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    validateEvent: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    inputStyle: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | ((new (...args: any[]) => string | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue))[], unknown, unknown, () => import('element-plus/es/utils/typescript.mjs').Mutable<{}>, boolean>;
    autofocus: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}, {
    internal_value: import('vue').Ref<string>;
    internal_value$: import('vue').WritableComputedRef<string | undefined>;
    input_props$: import('vue').ComputedRef<InputProps>;
    onBlur: (event: FocusEvent) => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
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
}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
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
    id: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    type: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
    resize: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "horizontal" | "vertical" | "none" | "both", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    autosize: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => boolean | {
        minRows?: number | undefined;
        maxRows?: number | undefined;
    }) | (() => import('element-plus').InputAutoSize) | ((new (...args: any[]) => boolean | {
        minRows?: number | undefined;
        maxRows?: number | undefined;
    }) | (() => import('element-plus').InputAutoSize))[], unknown, unknown, false, boolean>;
    autocomplete: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
    formatter: {
        readonly type: import('vue').PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    parser: {
        readonly type: import('vue').PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    form: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    showPassword: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    showWordLimit: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    suffixIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    prefixIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    containerRole: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    label: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    tabindex: import('element-plus/es/utils/index.mjs').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    validateEvent: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    inputStyle: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | ((new (...args: any[]) => string | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue))[], unknown, unknown, () => import('element-plus/es/utils/typescript.mjs').Mutable<{}>, boolean>;
    autofocus: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}>> & {
    onMouseenter?: ((evt: MouseEvent) => any) | undefined;
    onMouseleave?: ((evt: MouseEvent) => any) | undefined;
    onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
    onFocus?: ((evt: FocusEvent) => any) | undefined;
    onBlur?: ((evt: FocusEvent) => any) | undefined;
    onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
    onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
    onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onInput?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((_value: number) => any) | undefined;
    onClear?: (() => any) | undefined;
}, {
    symbol: string;
    disabled: boolean;
    id: string;
    type: string;
    label: string;
    validateEvent: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    tabindex: import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    autofocus: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    placeholder: string;
    clearable: boolean;
    readonly: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    precision: number;
    autosize: import('element-plus').InputAutoSize;
    autocomplete: string;
    showPassword: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    showWordLimit: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    containerRole: string;
    inputStyle: import('vue').StyleValue;
}, {}>;
export default _default;
