import type { ExtractPublicPropTypes, PropType } from 'vue';
export declare const sdLinkProps: {
    underline: {
        type: PropType<"hover" | "always" | "none">;
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
        readonly type: PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type SdLinkProps = ExtractPublicPropTypes<typeof sdLinkProps>;
