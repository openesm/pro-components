declare const _default: import("vue").DefineComponent<{
    startVal: {
        type: NumberConstructor;
        default: number;
    };
    endVal: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    decimals: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    decimal: {
        type: StringConstructor;
        default: string;
    };
    separator: {
        type: StringConstructor;
        default: string;
    };
    prefix: {
        type: StringConstructor;
        default: string;
    };
    suffix: {
        type: StringConstructor;
        default: string;
    };
    useEasing: {
        type: BooleanConstructor;
        default: boolean;
    };
    easingFn: {
        type: FunctionConstructor;
        default(t: number, b: number, c: number, d: number): number;
    };
}, {
    pauseResume: () => void;
    reset: () => void;
    start: () => void;
    pause: () => void;
    resume: () => void;
    displayValue: import("vue").Ref<string>;
    localStartVal: import("vue").Ref<number>;
    localDuration: import("vue").Ref<number>;
    printVal: import("vue").Ref<number | null>;
    paused: import("vue").Ref<boolean>;
    startTime: import("vue").Ref<number | null>;
    timestamp: import("vue").Ref<number | null>;
    remaining: import("vue").Ref<number | null>;
    rAF: import("vue").Ref<Function | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    startVal: {
        type: NumberConstructor;
        default: number;
    };
    endVal: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    decimals: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    decimal: {
        type: StringConstructor;
        default: string;
    };
    separator: {
        type: StringConstructor;
        default: string;
    };
    prefix: {
        type: StringConstructor;
        default: string;
    };
    suffix: {
        type: StringConstructor;
        default: string;
    };
    useEasing: {
        type: BooleanConstructor;
        default: boolean;
    };
    easingFn: {
        type: FunctionConstructor;
        default(t: number, b: number, c: number, d: number): number;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    separator: string;
    prefix: string;
    startVal: number;
    endVal: number;
    duration: number;
    autoplay: boolean;
    decimals: number;
    decimal: string;
    suffix: string;
    useEasing: boolean;
    easingFn: Function;
}, {}>;
export default _default;
