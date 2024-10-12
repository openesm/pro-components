export declare const SdInputPrice: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            symbol: string;
            disabled: boolean;
            id: string;
            type: string;
            label: string;
            validateEvent: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            tabindex: import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            autofocus: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            placeholder: string;
            clearable: boolean;
            readonly: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            precision: number;
            autosize: import("element-plus").InputAutoSize;
            autocomplete: string;
            showPassword: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            showWordLimit: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            containerRole: string;
            inputStyle: import("vue").StyleValue;
        }> & Omit<{
            readonly symbol: string;
            readonly disabled: boolean;
            readonly type: string;
            readonly validateEvent: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly tabindex: import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly autofocus: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly placeholder: string;
            readonly clearable: boolean;
            readonly readonly: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly precision: number;
            readonly autosize: import("element-plus").InputAutoSize;
            readonly autocomplete: string;
            readonly showPassword: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly showWordLimit: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly inputStyle: import("vue").StyleValue;
            readonly id?: string | undefined;
            readonly size?: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
            readonly form?: string | undefined;
            readonly label?: string | undefined;
            readonly modelValue?: number | undefined;
            readonly max?: number | undefined;
            readonly prefixIcon?: import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown> | undefined;
            readonly resize?: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "horizontal" | "vertical" | "none" | "both", unknown> | undefined;
            readonly formatter?: Function | undefined;
            readonly parser?: Function | undefined;
            readonly suffixIcon?: import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown> | undefined;
            readonly containerRole?: string | undefined;
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
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
        }, "symbol" | "disabled" | "id" | "type" | "label" | "validateEvent" | "tabindex" | "autofocus" | "placeholder" | "clearable" | "readonly" | "precision" | "autosize" | "autocomplete" | "showPassword" | "showWordLimit" | "containerRole" | "inputStyle">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "focus", evt: FocusEvent) => void) & ((event: "input", value: string) => void) & ((event: "change", value: string) => void) & ((event: "update:modelValue", _value: number) => void) & ((event: "clear") => void) & ((event: "blur", evt: FocusEvent) => void) & ((event: "compositionend", evt: CompositionEvent) => void) & ((event: "compositionstart", evt: CompositionEvent) => void) & ((event: "compositionupdate", evt: CompositionEvent) => void) & ((event: "keydown", evt: Event | KeyboardEvent) => void) & ((event: "mouseenter", evt: MouseEvent) => void) & ((event: "mouseleave", evt: MouseEvent) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
            internal_value: import("vue").Ref<string>;
            internal_value$: import("vue").WritableComputedRef<string | undefined>;
            input_props$: import("vue").ComputedRef<import("element-plus").InputProps>;
            onBlur: (event: FocusEvent) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
        }, string, {
            symbol: string;
            disabled: boolean;
            id: string;
            type: string;
            label: string;
            validateEvent: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            tabindex: import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            autofocus: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            placeholder: string;
            clearable: boolean;
            readonly: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            precision: number;
            autosize: import("element-plus").InputAutoSize;
            autocomplete: string;
            showPassword: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            showWordLimit: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            containerRole: string;
            inputStyle: import("vue").StyleValue;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
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
    } & import("vue").ShallowUnwrapRef<{
        internal_value: import("vue").Ref<string>;
        internal_value$: import("vue").WritableComputedRef<string | undefined>;
        input_props$: import("vue").ComputedRef<import("element-plus").InputProps>;
        onBlur: (event: FocusEvent) => void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    internal_value: import("vue").Ref<string>;
    internal_value$: import("vue").WritableComputedRef<string | undefined>;
    input_props$: import("vue").ComputedRef<import("element-plus").InputProps>;
    onBlur: (event: FocusEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
}, string, {
    symbol: string;
    disabled: boolean;
    id: string;
    type: string;
    label: string;
    validateEvent: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    tabindex: import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    autofocus: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    placeholder: string;
    clearable: boolean;
    readonly: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    precision: number;
    autosize: import("element-plus").InputAutoSize;
    autocomplete: string;
    showPassword: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    showWordLimit: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    containerRole: string;
    inputStyle: import("vue").StyleValue;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin) & Record<string, any>;
export * from './src/input-price';
