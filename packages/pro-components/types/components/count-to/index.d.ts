export declare const SdCountTo: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<{
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
            readonly separator: string;
            readonly prefix: string;
            readonly startVal: number;
            readonly endVal: number;
            readonly duration: number;
            readonly autoplay: boolean;
            readonly decimals: number;
            readonly decimal: string;
            readonly suffix: string;
            readonly useEasing: boolean;
            readonly easingFn: Function;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
        }, "separator" | "prefix" | "startVal" | "endVal" | "duration" | "autoplay" | "decimals" | "decimal" | "suffix" | "useEasing" | "easingFn">;
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
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
    } & import("vue").ShallowUnwrapRef<{
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
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
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
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin) & Record<string, any>;
export default SdCountTo;
