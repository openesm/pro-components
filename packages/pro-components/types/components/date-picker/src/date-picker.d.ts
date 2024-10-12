import type { ExtractPublicPropTypes, PropType } from 'vue';
export declare const sdDatePickerProps: {
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
    type: {
        type: PropType<"week" | "month" | "year" | "date" | "dates" | "datetime" | "datetimerange" | "daterange" | "monthrange">;
        default: string;
    };
    shortcuts: {
        type: ArrayConstructor;
    };
    startPlaceholder: {
        type: StringConstructor;
    };
    endPlaceholder: {
        type: StringConstructor;
    };
    rangeSeparator: {
        type: StringConstructor;
    };
    placeholder: {
        type: StringConstructor;
    };
    format: {
        type: StringConstructor;
    };
    valueFormat: {
        type: StringConstructor;
    };
    disabledDate: {
        readonly type: PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    cellClassName: {
        readonly type: PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    arrowControl: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    label: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    tabindex: import("element-plus/es/utils/index.mjs").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
    validateEvent: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    unlinkPanels: BooleanConstructor;
    disabledHours: {
        readonly type: PropType<import("element-plus/es/components/time-picker/src/props/shared.mjs").GetDisabledHours>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabledMinutes: {
        readonly type: PropType<import("element-plus/es/components/time-picker/src/props/shared.mjs").GetDisabledMinutes>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabledSeconds: {
        readonly type: PropType<import("element-plus/es/components/time-picker/src/props/shared.mjs").GetDisabledSeconds>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    id: {
        readonly type: PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    name: import("element-plus/es/utils/index.mjs").EpPropFinalized<(new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import("element-plus").SingleOrRange<string>))[], unknown, unknown, "", boolean>;
    popperClass: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    dateFormat: StringConstructor;
    timeFormat: StringConstructor;
    clearable: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    clearIcon: import("element-plus/es/utils/index.mjs").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, boolean>;
    editable: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    prefixIcon: import("element-plus/es/utils/index.mjs").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
    size: {
        readonly type: PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    disabled: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    popperOptions: import("element-plus/es/utils/index.mjs").EpPropFinalized<(new (...args: any[]) => Options) | (() => Options) | ((new (...args: any[]) => Options) | (() => Options))[], unknown, unknown, () => {}, boolean>;
    modelValue: import("element-plus/es/utils/index.mjs").EpPropFinalized<(new (...args: any[]) => string | number | Date | [import("element-plus").DateModelType, import("element-plus").DateModelType]) | (() => import("element-plus").ModelValueType) | ((new (...args: any[]) => string | number | Date | [import("element-plus").DateModelType, import("element-plus").DateModelType]) | (() => import("element-plus").ModelValueType))[], unknown, unknown, "", boolean>;
    defaultValue: {
        readonly type: PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    defaultTime: {
        readonly type: PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus").SingleOrRange<Date>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    isRange: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
};
export declare const sdDatePickerEmits: string[];
export declare const sdDatePickerOmitKeys: string[];
export type SdDatePickerProps = ExtractPublicPropTypes<typeof sdDatePickerProps>;
