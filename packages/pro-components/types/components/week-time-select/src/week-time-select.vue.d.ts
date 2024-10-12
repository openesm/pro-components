type SelectTime = {
    begin: string | undefined;
    end: string | undefined;
    error?: string;
};
type SelectTimeGroup = {
    is_all: boolean;
    indeterminate: boolean;
    weekdays: number[];
    times: SelectTime[];
};
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}, {
    formRef: import("vue").Ref<any>;
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
    disabled_week_select$: import("vue").ComputedRef<boolean>;
    validate: () => Promise<unknown>;
    validatorWeekdays: (_rule: any, value: any, callback: any) => void;
    validatorBeginTime: (time: SelectTime, timeIndex: number, times: SelectTime[], callback: any) => void;
    validatorEndTime: (time: SelectTime, callback: any) => void;
    checkTimes: (times: SelectTime[]) => void;
    onWeekdaysAllChange: (is_all: string | number | boolean, item: SelectTimeGroup) => void;
    onWeekdaysChange: (value: (string | number | boolean)[], item: SelectTimeGroup) => void;
    handleAddTimeGroup: () => void;
    handleDelTimeGroup: (index: number) => void;
    handleAddTimeItem: (item: SelectTimeGroup) => void;
    handelDelTimeItem: (item: SelectTimeGroup, index: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
}, {}>;
export default _default;
