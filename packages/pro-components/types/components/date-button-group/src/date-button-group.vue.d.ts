declare const _default: import('vue').DefineComponent<{
    type: {
        type: import('vue').PropType<"day" | "week" | "month" | "year">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    options$: import('vue').ComputedRef<{
        prop: string;
        label: string;
    }[]>;
    handleClick: (item: {
        prop: string;
        label: string;
    }) => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, string[], string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: import('vue').PropType<"day" | "week" | "month" | "year">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    type: "day" | "week" | "month" | "year";
}, {}>;
export default _default;
