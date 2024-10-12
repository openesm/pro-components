export declare const SdSelect: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            group: boolean;
            disabled: boolean;
            persistent: boolean;
            teleported: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            effect: string;
            popperClass: string;
            modelValue: string | number | boolean | unknown[] | Record<string, any>;
            options: import("../../types").OptionComponentTypes.item[];
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
        }> & Omit<{
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
            readonly group: boolean;
            readonly disabled: boolean;
            readonly persistent: boolean;
            readonly teleported: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly effect: string;
            readonly popperClass: string;
            readonly options: import("../../types").OptionComponentTypes.item[];
            readonly loading: boolean;
            readonly multiple: boolean;
            readonly placeholder: string;
            readonly clearable: boolean;
            readonly autocomplete: string;
            readonly automaticDropdown: boolean;
            readonly filterable: boolean;
            readonly allowCreate: boolean;
            readonly remote: boolean;
            readonly multipleLimit: number;
            readonly defaultFirstOption: boolean;
            readonly reserveKeyword: boolean;
            readonly valueKey: string;
            readonly collapseTags: boolean;
            readonly fitInputWidth: boolean;
            readonly tagType: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "success" | "warning" | "danger" | "info", unknown>;
            readonly id?: string | undefined;
            readonly size?: import("../../types").ComponentSizes | undefined;
            readonly name?: string | undefined;
            readonly prop?: import("../../types").OptionComponentTypes.PropConfig | undefined;
            readonly filterMethod?: Function | undefined;
            readonly modelValue?: string | number | boolean | unknown[] | Record<string, any> | undefined;
            readonly clearIcon?: string | import("vue").Component | undefined;
            readonly suffixIcon?: string | import("vue").Component | undefined;
            readonly loadingText?: string | undefined;
            readonly noMatchText?: string | undefined;
            readonly noDataText?: string | undefined;
            readonly remoteMethod?: Function | undefined;
            readonly popperAppendToBody?: boolean | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            group: {
                type: BooleanConstructor;
            };
            options: {
                type: import("vue").PropType<import("../../types").OptionComponentTypes.item[]>;
                default: () => never[];
            };
            prop: {
                type: import("vue").PropType<import("../../types").OptionComponentTypes.PropConfig>;
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
                type: import("vue").PropType<import("../../types").ComponentSizes>;
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
        }, "group" | "disabled" | "persistent" | "teleported" | "effect" | "popperClass" | "modelValue" | "options" | "loading" | "multiple" | "placeholder" | "clearable" | "autocomplete" | "automaticDropdown" | "filterable" | "allowCreate" | "remote" | "multipleLimit" | "defaultFirstOption" | "reserveKeyword" | "valueKey" | "collapseTags" | "popperAppendToBody" | "fitInputWidth" | "tagType">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            group: {
                type: BooleanConstructor;
            };
            options: {
                type: import("vue").PropType<import("../../types").OptionComponentTypes.item[]>;
                default: () => never[];
            };
            prop: {
                type: import("vue").PropType<import("../../types").OptionComponentTypes.PropConfig>;
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
                type: import("vue").PropType<import("../../types").ComponentSizes>;
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
            internal_value$: import("vue").WritableComputedRef<string | number | boolean | unknown[] | Record<string, any> | undefined>;
            select_props$: import("vue").ComputedRef<any>;
            prop$: import("vue").ComputedRef<{
                label: string;
                value: string;
                disabled: string;
            }>;
            onChange: (val: string | number) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
            group: boolean;
            disabled: boolean;
            persistent: boolean;
            teleported: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            effect: string;
            popperClass: string;
            modelValue: string | number | boolean | unknown[] | Record<string, any>;
            options: import("../../types").OptionComponentTypes.item[];
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
        group: {
            type: BooleanConstructor;
        };
        options: {
            type: import("vue").PropType<import("../../types").OptionComponentTypes.item[]>;
            default: () => never[];
        };
        prop: {
            type: import("vue").PropType<import("../../types").OptionComponentTypes.PropConfig>;
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
            type: import("vue").PropType<import("../../types").ComponentSizes>;
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
    } & import("vue").ShallowUnwrapRef<{
        internal_value$: import("vue").WritableComputedRef<string | number | boolean | unknown[] | Record<string, any> | undefined>;
        select_props$: import("vue").ComputedRef<any>;
        prop$: import("vue").ComputedRef<{
            label: string;
            value: string;
            disabled: string;
        }>;
        onChange: (val: string | number) => void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    group: {
        type: BooleanConstructor;
    };
    options: {
        type: import("vue").PropType<import("../../types").OptionComponentTypes.item[]>;
        default: () => never[];
    };
    prop: {
        type: import("vue").PropType<import("../../types").OptionComponentTypes.PropConfig>;
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
        type: import("vue").PropType<import("../../types").ComponentSizes>;
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
    internal_value$: import("vue").WritableComputedRef<string | number | boolean | unknown[] | Record<string, any> | undefined>;
    select_props$: import("vue").ComputedRef<any>;
    prop$: import("vue").ComputedRef<{
        label: string;
        value: string;
        disabled: string;
    }>;
    onChange: (val: string | number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
    group: boolean;
    disabled: boolean;
    persistent: boolean;
    teleported: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    effect: string;
    popperClass: string;
    modelValue: string | number | boolean | unknown[] | Record<string, any>;
    options: import("../../types").OptionComponentTypes.item[];
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
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin) & Record<string, any>;
export * from './src/select';
