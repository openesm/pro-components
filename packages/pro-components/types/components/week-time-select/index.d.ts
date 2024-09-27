export declare const SdWeekTimeSelect: ({
    new (...args: any[]): {
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            modelValue: string;
        }> & Omit<{
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
            readonly modelValue: string;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
            modelValue: {
                type: StringConstructor;
                default: string;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        }, "modelValue">;
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
            modelValue: {
                type: StringConstructor;
                default: string;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        }, {
            formRef: import('vue').Ref<any>;
            WEEK_DAY: {
                id: number;
                label: string;
            }[];
            state: {
                curr_time: string;
                select_times: {
                    is_all: boolean;
                    indeterminate: boolean;
                    weekdays: number[];
                    times: {
                        begin: string | undefined;
                        end: string | undefined;
                        error?: string | undefined;
                    }[];
                }[];
                select_weekdays: number[];
            };
            disabled_week_select$: import('vue').ComputedRef<boolean>;
            validate: () => Promise<unknown>;
            validatorWeekdays: (_rule: any, value: any, callback: any) => void;
            validatorBeginTime: (time: {
                begin: string | undefined;
                end: string | undefined;
                error?: string | undefined;
            }, timeIndex: number, times: {
                begin: string | undefined;
                end: string | undefined;
                error?: string | undefined;
            }[], callback: any) => void;
            validatorEndTime: (time: {
                begin: string | undefined;
                end: string | undefined;
                error?: string | undefined;
            }, callback: any) => void;
            checkTimes: (times: {
                begin: string | undefined;
                end: string | undefined;
                error?: string | undefined;
            }[]) => void;
            onWeekdaysAllChange: (is_all: string | number | boolean, item: {
                is_all: boolean;
                indeterminate: boolean;
                weekdays: number[];
                times: {
                    begin: string | undefined;
                    end: string | undefined;
                    error?: string | undefined;
                }[];
            }) => void;
            onWeekdaysChange: (value: (string | number | boolean)[], item: {
                is_all: boolean;
                indeterminate: boolean;
                weekdays: number[];
                times: {
                    begin: string | undefined;
                    end: string | undefined;
                    error?: string | undefined;
                }[];
            }) => void;
            handleAddTimeGroup: () => void;
            handleDelTimeGroup: (index: number) => void;
            handleAddTimeItem: (item: {
                is_all: boolean;
                indeterminate: boolean;
                weekdays: number[];
                times: {
                    begin: string | undefined;
                    end: string | undefined;
                    error?: string | undefined;
                }[];
            }) => void;
            handelDelTimeItem: (item: {
                is_all: boolean;
                indeterminate: boolean;
                weekdays: number[];
                times: {
                    begin: string | undefined;
                    end: string | undefined;
                    error?: string | undefined;
                }[];
            }, index: number) => void;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, string[], string, {
            modelValue: string;
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
        modelValue: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    } & import('vue').ShallowUnwrapRef<{
        formRef: import('vue').Ref<any>;
        WEEK_DAY: {
            id: number;
            label: string;
        }[];
        state: {
            curr_time: string;
            select_times: {
                is_all: boolean;
                indeterminate: boolean;
                weekdays: number[];
                times: {
                    begin: string | undefined;
                    end: string | undefined;
                    error?: string | undefined;
                }[];
            }[];
            select_weekdays: number[];
        };
        disabled_week_select$: import('vue').ComputedRef<boolean>;
        validate: () => Promise<unknown>;
        validatorWeekdays: (_rule: any, value: any, callback: any) => void;
        validatorBeginTime: (time: {
            begin: string | undefined;
            end: string | undefined;
            error?: string | undefined;
        }, timeIndex: number, times: {
            begin: string | undefined;
            end: string | undefined;
            error?: string | undefined;
        }[], callback: any) => void;
        validatorEndTime: (time: {
            begin: string | undefined;
            end: string | undefined;
            error?: string | undefined;
        }, callback: any) => void;
        checkTimes: (times: {
            begin: string | undefined;
            end: string | undefined;
            error?: string | undefined;
        }[]) => void;
        onWeekdaysAllChange: (is_all: string | number | boolean, item: {
            is_all: boolean;
            indeterminate: boolean;
            weekdays: number[];
            times: {
                begin: string | undefined;
                end: string | undefined;
                error?: string | undefined;
            }[];
        }) => void;
        onWeekdaysChange: (value: (string | number | boolean)[], item: {
            is_all: boolean;
            indeterminate: boolean;
            weekdays: number[];
            times: {
                begin: string | undefined;
                end: string | undefined;
                error?: string | undefined;
            }[];
        }) => void;
        handleAddTimeGroup: () => void;
        handleDelTimeGroup: (index: number) => void;
        handleAddTimeItem: (item: {
            is_all: boolean;
            indeterminate: boolean;
            weekdays: number[];
            times: {
                begin: string | undefined;
                end: string | undefined;
                error?: string | undefined;
            }[];
        }) => void;
        handelDelTimeItem: (item: {
            is_all: boolean;
            indeterminate: boolean;
            weekdays: number[];
            times: {
                begin: string | undefined;
                end: string | undefined;
                error?: string | undefined;
            }[];
        }, index: number) => void;
    }> & {} & import('vue').ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    formRef: import('vue').Ref<any>;
    WEEK_DAY: {
        id: number;
        label: string;
    }[];
    state: {
        curr_time: string;
        select_times: {
            is_all: boolean;
            indeterminate: boolean;
            weekdays: number[];
            times: {
                begin: string | undefined;
                end: string | undefined;
                error?: string | undefined;
            }[];
        }[];
        select_weekdays: number[];
    };
    disabled_week_select$: import('vue').ComputedRef<boolean>;
    validate: () => Promise<unknown>;
    validatorWeekdays: (_rule: any, value: any, callback: any) => void;
    validatorBeginTime: (time: {
        begin: string | undefined;
        end: string | undefined;
        error?: string | undefined;
    }, timeIndex: number, times: {
        begin: string | undefined;
        end: string | undefined;
        error?: string | undefined;
    }[], callback: any) => void;
    validatorEndTime: (time: {
        begin: string | undefined;
        end: string | undefined;
        error?: string | undefined;
    }, callback: any) => void;
    checkTimes: (times: {
        begin: string | undefined;
        end: string | undefined;
        error?: string | undefined;
    }[]) => void;
    onWeekdaysAllChange: (is_all: string | number | boolean, item: {
        is_all: boolean;
        indeterminate: boolean;
        weekdays: number[];
        times: {
            begin: string | undefined;
            end: string | undefined;
            error?: string | undefined;
        }[];
    }) => void;
    onWeekdaysChange: (value: (string | number | boolean)[], item: {
        is_all: boolean;
        indeterminate: boolean;
        weekdays: number[];
        times: {
            begin: string | undefined;
            end: string | undefined;
            error?: string | undefined;
        }[];
    }) => void;
    handleAddTimeGroup: () => void;
    handleDelTimeGroup: (index: number) => void;
    handleAddTimeItem: (item: {
        is_all: boolean;
        indeterminate: boolean;
        weekdays: number[];
        times: {
            begin: string | undefined;
            end: string | undefined;
            error?: string | undefined;
        }[];
    }) => void;
    handelDelTimeItem: (item: {
        is_all: boolean;
        indeterminate: boolean;
        weekdays: number[];
        times: {
            begin: string | undefined;
            end: string | undefined;
            error?: string | undefined;
        }[];
    }, index: number) => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, string[], string, {
    modelValue: string;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin) & Record<string, any>;
export * from './src/week-time-select';
