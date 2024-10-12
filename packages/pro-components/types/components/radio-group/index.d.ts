export declare const SdRadioGroup: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
            options: import("../../types").OptionComponentTypes.item[];
            showCountZero: boolean;
            badgeType: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "danger" | "info", unknown>;
            badgeMax: number;
        }> & Omit<{
            readonly disabled: boolean;
            readonly fill: string;
            readonly button: boolean;
            readonly showCount: boolean;
            readonly modelValue: import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
            readonly textColor: string;
            readonly validateEvent: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly options: import("../../types").OptionComponentTypes.item[];
            readonly showCountZero: boolean;
            readonly badgeType: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "danger" | "info", unknown>;
            readonly badgeMax: number;
            readonly id?: string | undefined;
            readonly size?: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
            readonly name?: string | undefined;
            readonly label?: string | undefined;
            readonly prop?: import("../../types").OptionComponentTypes.PropConfig | undefined;
            readonly badgeStyle?: import("vue").CSSProperties | undefined;
            onChange?: ((val: string | number | boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
                type: import("vue").PropType<import("../../types").OptionComponentTypes.item[]>;
                default: () => never[];
            };
            prop: {
                type: import("vue").PropType<import("../../types").OptionComponentTypes.PropConfig>;
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
        }, "disabled" | "id" | "fill" | "name" | "button" | "label" | "showCount" | "modelValue" | "textColor" | "validateEvent" | "options" | "showCountZero" | "badgeType" | "badgeMax">;
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
        $emit: ((event: "change", val: string | number | boolean) => void) & ((event: "update:modelValue", val: string | number | boolean) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
                type: import("vue").PropType<import("../../types").OptionComponentTypes.item[]>;
                default: () => never[];
            };
            prop: {
                type: import("vue").PropType<import("../../types").OptionComponentTypes.PropConfig>;
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
            internal_value$: import("vue").WritableComputedRef<import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
            prop$: import("vue").ComputedRef<{
                label: string;
                value: string;
                count: string;
            }>;
            radio_group_props$: import("vue").ComputedRef<import("element-plus").RadioGroupProps>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (val: string | number | boolean) => boolean;
            change: (val: string | number | boolean) => boolean;
        }, string, {
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
            options: import("../../types").OptionComponentTypes.item[];
            showCountZero: boolean;
            badgeType: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "danger" | "info", unknown>;
            badgeMax: number;
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
        showCount: {
            type: BooleanConstructor;
            deafult: boolean;
        };
        showCountZero: {
            type: BooleanConstructor;
            deafult: boolean;
        };
        options: {
            type: import("vue").PropType<import("../../types").OptionComponentTypes.item[]>;
            default: () => never[];
        };
        prop: {
            type: import("vue").PropType<import("../../types").OptionComponentTypes.PropConfig>;
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
    } & import("vue").ShallowUnwrapRef<{
        internal_value$: import("vue").WritableComputedRef<import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
        prop$: import("vue").ComputedRef<{
            label: string;
            value: string;
            count: string;
        }>;
        radio_group_props$: import("vue").ComputedRef<import("element-plus").RadioGroupProps>;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<import("../../types").OptionComponentTypes.item[]>;
        default: () => never[];
    };
    prop: {
        type: import("vue").PropType<import("../../types").OptionComponentTypes.PropConfig>;
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
    internal_value$: import("vue").WritableComputedRef<import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
    prop$: import("vue").ComputedRef<{
        label: string;
        value: string;
        count: string;
    }>;
    radio_group_props$: import("vue").ComputedRef<import("element-plus").RadioGroupProps>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: string | number | boolean) => boolean;
    change: (val: string | number | boolean) => boolean;
}, string, {
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
    options: import("../../types").OptionComponentTypes.item[];
    showCountZero: boolean;
    badgeType: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "danger" | "info", unknown>;
    badgeMax: number;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin) & Record<string, any>;
export * from './src/radio-group';
