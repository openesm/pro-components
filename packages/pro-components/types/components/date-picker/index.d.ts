export declare const SdDatePicker: ({
    new (...args: any[]): {
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            popperClass: string;
            popperOptions: any;
            type: "week" | "month" | "year" | "date" | "dates" | "datetime" | "datetimerange" | "daterange" | "monthrange";
            name: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>))[], unknown, unknown>;
            label: string;
            modelValue: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType) | ((new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType))[], unknown, unknown>;
            validateEvent: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            tabindex: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
            arrowControl: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            unlinkPanels: boolean;
            clearable: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            clearIcon: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>;
            editable: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            prefixIcon: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>;
            readonly: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            isRange: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }> & Omit<{
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
            readonly disabled: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly popperClass: string;
            readonly popperOptions: any;
            readonly type: "week" | "month" | "year" | "date" | "dates" | "datetime" | "datetimerange" | "daterange" | "monthrange";
            readonly name: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>))[], unknown, unknown>;
            readonly modelValue: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType) | ((new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType))[], unknown, unknown>;
            readonly validateEvent: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly tabindex: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
            readonly arrowControl: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly unlinkPanels: boolean;
            readonly clearable: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly clearIcon: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>;
            readonly editable: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly prefixIcon: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>;
            readonly readonly: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly isRange: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly id?: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>))[], unknown, unknown> | undefined;
            readonly size?: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
            readonly label?: string | undefined;
            readonly width?: string | number | undefined;
            readonly shortcuts?: unknown[] | undefined;
            readonly startPlaceholder?: string | undefined;
            readonly endPlaceholder?: string | undefined;
            readonly rangeSeparator?: string | undefined;
            readonly placeholder?: string | undefined;
            readonly format?: string | undefined;
            readonly valueFormat?: string | undefined;
            readonly disabledDate?: Function | undefined;
            readonly cellClassName?: Function | undefined;
            readonly disabledHours?: import('element-plus/es/components/time-picker/src/props/shared.mjs').GetDisabledHours | undefined;
            readonly disabledMinutes?: import('element-plus/es/components/time-picker/src/props/shared.mjs').GetDisabledMinutes | undefined;
            readonly disabledSeconds?: import('element-plus/es/components/time-picker/src/props/shared.mjs').GetDisabledSeconds | undefined;
            readonly dateFormat?: string | undefined;
            readonly timeFormat?: string | undefined;
            readonly defaultValue?: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>))[], unknown, unknown> | undefined;
            readonly defaultTime?: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>))[], unknown, unknown> | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
            width: {
                type: (StringConstructor | NumberConstructor)[];
            };
            type: {
                type: import('vue').PropType<"week" | "month" | "year" | "date" | "dates" | "datetime" | "datetimerange" | "daterange" | "monthrange">;
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
                readonly type: import('vue').PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            cellClassName: {
                readonly type: import('vue').PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            arrowControl: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            label: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            tabindex: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
            validateEvent: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            unlinkPanels: BooleanConstructor;
            disabledHours: {
                readonly type: import('vue').PropType<import('element-plus/es/components/time-picker/src/props/shared.mjs').GetDisabledHours>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            disabledMinutes: {
                readonly type: import('vue').PropType<import('element-plus/es/components/time-picker/src/props/shared.mjs').GetDisabledMinutes>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            disabledSeconds: {
                readonly type: import('vue').PropType<import('element-plus/es/components/time-picker/src/props/shared.mjs').GetDisabledSeconds>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            id: {
                readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            name: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>))[], unknown, unknown, "", boolean>;
            popperClass: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            dateFormat: StringConstructor;
            timeFormat: StringConstructor;
            clearable: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            clearIcon: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown, import('vue').DefineComponent<{}, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>, boolean>;
            editable: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            prefixIcon: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown, "", boolean>;
            size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            disabled: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            popperOptions: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => Options) | (() => Options) | ((new (...args: any[]) => Options) | (() => Options))[], unknown, unknown, () => {}, boolean>;
            modelValue: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType) | ((new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType))[], unknown, unknown, "", boolean>;
            defaultValue: {
                readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            defaultTime: {
                readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            isRange: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        }, "disabled" | "popperClass" | "popperOptions" | "type" | "name" | "label" | "modelValue" | "validateEvent" | "tabindex" | "arrowControl" | "unlinkPanels" | "clearable" | "clearIcon" | "editable" | "prefixIcon" | "readonly" | "isRange">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
            width: {
                type: (StringConstructor | NumberConstructor)[];
            };
            type: {
                type: import('vue').PropType<"week" | "month" | "year" | "date" | "dates" | "datetime" | "datetimerange" | "daterange" | "monthrange">;
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
                readonly type: import('vue').PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            cellClassName: {
                readonly type: import('vue').PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            arrowControl: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            label: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            tabindex: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
            validateEvent: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            unlinkPanels: BooleanConstructor;
            disabledHours: {
                readonly type: import('vue').PropType<import('element-plus/es/components/time-picker/src/props/shared.mjs').GetDisabledHours>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            disabledMinutes: {
                readonly type: import('vue').PropType<import('element-plus/es/components/time-picker/src/props/shared.mjs').GetDisabledMinutes>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            disabledSeconds: {
                readonly type: import('vue').PropType<import('element-plus/es/components/time-picker/src/props/shared.mjs').GetDisabledSeconds>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            id: {
                readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            name: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>))[], unknown, unknown, "", boolean>;
            popperClass: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            dateFormat: StringConstructor;
            timeFormat: StringConstructor;
            clearable: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            clearIcon: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown, import('vue').DefineComponent<{}, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>, boolean>;
            editable: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            prefixIcon: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown, "", boolean>;
            size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            disabled: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            popperOptions: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => Options) | (() => Options) | ((new (...args: any[]) => Options) | (() => Options))[], unknown, unknown, () => {}, boolean>;
            modelValue: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType) | ((new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType))[], unknown, unknown, "", boolean>;
            defaultValue: {
                readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            defaultTime: {
                readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            isRange: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        }, {
            internal_value$: import('vue').WritableComputedRef<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType) | ((new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType))[], unknown, unknown>>;
            date_picker_props$: import('vue').ComputedRef<Omit<import('element-plus').DatePickerProps, "modelValue">>;
            date_pikcer_style$: import('vue').ComputedRef<import('vue').CSSProperties>;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, string[], string, {
            disabled: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            popperClass: string;
            popperOptions: any;
            type: "week" | "month" | "year" | "date" | "dates" | "datetime" | "datetimerange" | "daterange" | "monthrange";
            name: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>))[], unknown, unknown>;
            label: string;
            modelValue: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType) | ((new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType))[], unknown, unknown>;
            validateEvent: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            tabindex: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
            arrowControl: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            unlinkPanels: boolean;
            clearable: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            clearIcon: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>;
            editable: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            prefixIcon: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>;
            readonly: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            isRange: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
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
            renderTracked?: (((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import('vue').WatchOptions<boolean> | undefined): import('vue').WatchStopHandle;
    } & Readonly<import('vue').ExtractPropTypes<{
        width: {
            type: (StringConstructor | NumberConstructor)[];
        };
        type: {
            type: import('vue').PropType<"week" | "month" | "year" | "date" | "dates" | "datetime" | "datetimerange" | "daterange" | "monthrange">;
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
            readonly type: import('vue').PropType<Function>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        cellClassName: {
            readonly type: import('vue').PropType<Function>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        arrowControl: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        label: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        tabindex: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
        validateEvent: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        unlinkPanels: BooleanConstructor;
        disabledHours: {
            readonly type: import('vue').PropType<import('element-plus/es/components/time-picker/src/props/shared.mjs').GetDisabledHours>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        disabledMinutes: {
            readonly type: import('vue').PropType<import('element-plus/es/components/time-picker/src/props/shared.mjs').GetDisabledMinutes>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        disabledSeconds: {
            readonly type: import('vue').PropType<import('element-plus/es/components/time-picker/src/props/shared.mjs').GetDisabledSeconds>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        id: {
            readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        name: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>))[], unknown, unknown, "", boolean>;
        popperClass: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        dateFormat: StringConstructor;
        timeFormat: StringConstructor;
        clearable: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        clearIcon: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown, import('vue').DefineComponent<{}, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>, boolean>;
        editable: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        prefixIcon: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown, "", boolean>;
        size: {
            readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        disabled: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        popperOptions: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => Options) | (() => Options) | ((new (...args: any[]) => Options) | (() => Options))[], unknown, unknown, () => {}, boolean>;
        modelValue: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType) | ((new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType))[], unknown, unknown, "", boolean>;
        defaultValue: {
            readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        defaultTime: {
            readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        isRange: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    }>> & {
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    } & import('vue').ShallowUnwrapRef<{
        internal_value$: import('vue').WritableComputedRef<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType) | ((new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType))[], unknown, unknown>>;
        date_picker_props$: import('vue').ComputedRef<Omit<import('element-plus').DatePickerProps, "modelValue">>;
        date_pikcer_style$: import('vue').ComputedRef<import('vue').CSSProperties>;
    }> & {} & import('vue').ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
    type: {
        type: import('vue').PropType<"week" | "month" | "year" | "date" | "dates" | "datetime" | "datetimerange" | "daterange" | "monthrange">;
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
        readonly type: import('vue').PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    cellClassName: {
        readonly type: import('vue').PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    arrowControl: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    label: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    tabindex: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
    validateEvent: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    unlinkPanels: BooleanConstructor;
    disabledHours: {
        readonly type: import('vue').PropType<import('element-plus/es/components/time-picker/src/props/shared.mjs').GetDisabledHours>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabledMinutes: {
        readonly type: import('vue').PropType<import('element-plus/es/components/time-picker/src/props/shared.mjs').GetDisabledMinutes>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabledSeconds: {
        readonly type: import('vue').PropType<import('element-plus/es/components/time-picker/src/props/shared.mjs').GetDisabledSeconds>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    id: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    name: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>))[], unknown, unknown, "", boolean>;
    popperClass: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    dateFormat: StringConstructor;
    timeFormat: StringConstructor;
    clearable: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    clearIcon: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown, import('vue').DefineComponent<{}, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>, boolean>;
    editable: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    prefixIcon: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown, "", boolean>;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    disabled: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    popperOptions: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => Options) | (() => Options) | ((new (...args: any[]) => Options) | (() => Options))[], unknown, unknown, () => {}, boolean>;
    modelValue: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType) | ((new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType))[], unknown, unknown, "", boolean>;
    defaultValue: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    defaultTime: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import('element-plus').SingleOrRange<Date>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    isRange: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    internal_value$: import('vue').WritableComputedRef<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType) | ((new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType))[], unknown, unknown>>;
    date_picker_props$: import('vue').ComputedRef<Omit<import('element-plus').DatePickerProps, "modelValue">>;
    date_pikcer_style$: import('vue').ComputedRef<import('vue').CSSProperties>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, string[], string, {
    disabled: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    popperClass: string;
    popperOptions: any;
    type: "week" | "month" | "year" | "date" | "dates" | "datetime" | "datetimerange" | "daterange" | "monthrange";
    name: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>) | ((new (...args: any[]) => string | [string, string]) | (() => import('element-plus').SingleOrRange<string>))[], unknown, unknown>;
    label: string;
    modelValue: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType) | ((new (...args: any[]) => string | number | Date | [import('element-plus').DateModelType, import('element-plus').DateModelType]) | (() => import('element-plus').ModelValueType))[], unknown, unknown>;
    validateEvent: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    tabindex: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
    arrowControl: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    unlinkPanels: boolean;
    clearable: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    clearIcon: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>;
    editable: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    prefixIcon: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>;
    readonly: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    isRange: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin) & Record<string, any>;
export * from './src/date-picker';
