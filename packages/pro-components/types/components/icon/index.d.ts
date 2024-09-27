export declare const SdIcon: ({
    new (...args: any[]): {
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            inline: boolean;
        }> & Omit<{
            readonly inline: boolean;
            readonly size?: number | undefined;
            readonly color?: string | undefined;
            readonly name?: string | undefined;
            readonly prefix?: string | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
            prefix: {
                type: StringConstructor;
            };
            name: {
                type: StringConstructor;
            };
            size: {
                type: NumberConstructor;
            };
            color: {
                type: StringConstructor;
            };
            inline: {
                type: BooleanConstructor;
            };
        }>>, "inline">;
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
            prefix: {
                type: StringConstructor;
            };
            name: {
                type: StringConstructor;
            };
            size: {
                type: NumberConstructor;
            };
            color: {
                type: StringConstructor;
            };
            inline: {
                type: BooleanConstructor;
            };
        }>>, {
            is_svg_icon$: import('vue').ComputedRef<boolean | undefined>;
            svg_icon_name$: import('vue').ComputedRef<string | undefined>;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
            inline: boolean;
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
        prefix: {
            type: StringConstructor;
        };
        name: {
            type: StringConstructor;
        };
        size: {
            type: NumberConstructor;
        };
        color: {
            type: StringConstructor;
        };
        inline: {
            type: BooleanConstructor;
        };
    }>> & import('vue').ShallowUnwrapRef<{
        is_svg_icon$: import('vue').ComputedRef<boolean | undefined>;
        svg_icon_name$: import('vue').ComputedRef<string | undefined>;
    }> & {} & import('vue').ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    prefix: {
        type: StringConstructor;
    };
    name: {
        type: StringConstructor;
    };
    size: {
        type: NumberConstructor;
    };
    color: {
        type: StringConstructor;
    };
    inline: {
        type: BooleanConstructor;
    };
}>>, {
    is_svg_icon$: import('vue').ComputedRef<boolean | undefined>;
    svg_icon_name$: import('vue').ComputedRef<string | undefined>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    inline: boolean;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin) & Record<string, any>;
export * from './src/icon';
