declare const _default: import("vue").DefineComponent<{
    underline: {
        type: import("vue").PropType<"hover" | "always" | "none">;
        default: string;
    };
    replace: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
    };
    color: {
        type: StringConstructor;
    };
    type: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, "default" | "primary" | "success" | "warning" | "danger" | "info", unknown, "default", boolean>;
    disabled: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    href: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    icon: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {
    onClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    underline: {
        type: import("vue").PropType<"hover" | "always" | "none">;
        default: string;
    };
    replace: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
    };
    color: {
        type: StringConstructor;
    };
    type: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, "default" | "primary" | "success" | "warning" | "danger" | "info", unknown, "default", boolean>;
    disabled: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    href: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    icon: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>>, {
    disabled: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    type: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "default" | "primary" | "success" | "warning" | "danger" | "info", unknown>;
    text: string;
    replace: boolean;
    underline: "hover" | "always" | "none";
    href: string;
}, {}>;
export default _default;
