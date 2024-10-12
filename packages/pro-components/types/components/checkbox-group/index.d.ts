export declare const SdCheckboxGroup: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            button: boolean;
            tag: string;
            modelValue: import("element-plus").CheckboxGroupValueType;
            validateEvent: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            options: import("../../types").OptionComponentTypes.item[];
        }> & Omit<{
            readonly disabled: boolean;
            readonly button: boolean;
            readonly tag: string;
            readonly modelValue: import("element-plus").CheckboxGroupValueType;
            readonly validateEvent: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly options: import("../../types").OptionComponentTypes.item[];
            readonly fill?: string | undefined;
            readonly size?: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
            readonly label?: string | undefined;
            readonly prop?: import("../../types").OptionComponentTypes.PropConfig | undefined;
            readonly min?: number | undefined;
            readonly max?: number | undefined;
            readonly textColor?: string | undefined;
            onChange?: ((val: import("element-plus").CheckboxValueType[]) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("element-plus").CheckboxGroupValueType) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            button: {
                type: BooleanConstructor;
                default: boolean;
            };
            options: {
                type: import("vue").PropType<import("../../types").OptionComponentTypes.item[]>;
                default: () => never[];
            };
            prop: {
                type: import("vue").PropType<import("../../types").OptionComponentTypes.PropConfig>;
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
        }, "disabled" | "button" | "tag" | "modelValue" | "validateEvent" | "options">;
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
        $emit: ((event: "change", val: import("element-plus").CheckboxValueType[]) => void) & ((event: "update:modelValue", val: import("element-plus").CheckboxGroupValueType) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            button: {
                type: BooleanConstructor;
                default: boolean;
            };
            options: {
                type: import("vue").PropType<import("../../types").OptionComponentTypes.item[]>;
                default: () => never[];
            };
            prop: {
                type: import("vue").PropType<import("../../types").OptionComponentTypes.PropConfig>;
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
            internal_value$: import("vue").WritableComputedRef<import("element-plus").CheckboxGroupValueType>;
            prop$: import("vue").ComputedRef<{
                label: string;
                value: string;
            }>;
            checkbox_group_props$: import("vue").ComputedRef<import("element-plus").CheckboxGroupProps>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (val: import("element-plus").CheckboxGroupValueType) => boolean;
            change: (val: import("element-plus").CheckboxValueType[]) => boolean;
        }, string, {
            disabled: boolean;
            button: boolean;
            tag: string;
            modelValue: import("element-plus").CheckboxGroupValueType;
            validateEvent: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            options: import("../../types").OptionComponentTypes.item[];
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
        button: {
            type: BooleanConstructor;
            default: boolean;
        };
        options: {
            type: import("vue").PropType<import("../../types").OptionComponentTypes.item[]>;
            default: () => never[];
        };
        prop: {
            type: import("vue").PropType<import("../../types").OptionComponentTypes.PropConfig>;
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
    } & import("vue").ShallowUnwrapRef<{
        internal_value$: import("vue").WritableComputedRef<import("element-plus").CheckboxGroupValueType>;
        prop$: import("vue").ComputedRef<{
            label: string;
            value: string;
        }>;
        checkbox_group_props$: import("vue").ComputedRef<import("element-plus").CheckboxGroupProps>;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    button: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: import("vue").PropType<import("../../types").OptionComponentTypes.item[]>;
        default: () => never[];
    };
    prop: {
        type: import("vue").PropType<import("../../types").OptionComponentTypes.PropConfig>;
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
    internal_value$: import("vue").WritableComputedRef<import("element-plus").CheckboxGroupValueType>;
    prop$: import("vue").ComputedRef<{
        label: string;
        value: string;
    }>;
    checkbox_group_props$: import("vue").ComputedRef<import("element-plus").CheckboxGroupProps>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: import("element-plus").CheckboxGroupValueType) => boolean;
    change: (val: import("element-plus").CheckboxValueType[]) => boolean;
}, string, {
    disabled: boolean;
    button: boolean;
    tag: string;
    modelValue: import("element-plus").CheckboxGroupValueType;
    validateEvent: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    options: import("../../types").OptionComponentTypes.item[];
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin) & Record<string, any>;
export * from './src/checkbox-group';
