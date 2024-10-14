export declare const SdEchart: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            loading: boolean;
            resize: boolean;
        }> & Omit<{
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
            readonly loading: boolean;
            readonly resize: boolean;
            readonly options?: any;
            readonly colors?: string[] | undefined;
            readonly theme?: string | undefined;
            readonly initOptions?: {
                locale?: string | {
                    time: {
                        month: string[];
                        monthAbbr: string[];
                        dayOfWeek: string[];
                        dayOfWeekAbbr: string[];
                    };
                    legend: {
                        selector: {
                            all: string;
                            inverse: string;
                        };
                    };
                    toolbox: {
                        brush: {
                            title: {
                                rect: string;
                                polygon: string;
                                lineX: string;
                                lineY: string;
                                keep: string;
                                clear: string;
                            };
                        };
                        dataView: {
                            title: string;
                            lang: string[];
                        };
                        dataZoom: {
                            title: {
                                zoom: string;
                                back: string;
                            };
                        };
                        magicType: {
                            title: {
                                line: string;
                                bar: string;
                                stack: string;
                                tiled: string;
                            };
                        };
                        restore: {
                            title: string;
                        };
                        saveAsImage: {
                            title: string;
                            lang: string[];
                        };
                    };
                    series: {
                        typeNames: {
                            pie: string;
                            bar: string;
                            line: string;
                            scatter: string;
                            effectScatter: string;
                            radar: string;
                            tree: string;
                            treemap: string;
                            boxplot: string;
                            candlestick: string;
                            k: string;
                            heatmap: string;
                            map: string;
                            parallel: string;
                            lines: string;
                            graph: string;
                            sankey: string;
                            funnel: string;
                            gauge: string;
                            pictorialBar: string;
                            themeRiver: string;
                            sunburst: string;
                        };
                    };
                    aria: {
                        general: {
                            withTitle: string;
                            withoutTitle: string;
                        };
                        series: {
                            single: {
                                prefix: string;
                                withName: string;
                                withoutName: string;
                            };
                            multiple: {
                                prefix: string;
                                withName: string;
                                withoutName: string;
                                separator: {
                                    middle: string;
                                    end: string;
                                };
                            };
                        };
                        data: {
                            allData: string;
                            partialData: string;
                            withName: string;
                            withoutName: string;
                            separator: {
                                middle: string;
                                end: string;
                            };
                        };
                    };
                } | undefined;
                renderer?: ("canvas" | "svg") | undefined;
                devicePixelRatio?: number | undefined;
                useDirtyRect?: boolean | undefined;
                ssr?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            readonly loadingText?: string | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            resize: {
                type: BooleanConstructor;
                default: boolean;
            };
            colors: {
                type: import("vue").PropType<string[]>;
            };
            theme: {
                type: StringConstructor;
            };
            initOptions: {
                type: import("vue").PropType<{
                    locale?: string | {
                        time: {
                            month: string[];
                            monthAbbr: string[];
                            dayOfWeek: string[];
                            dayOfWeekAbbr: string[];
                        };
                        legend: {
                            selector: {
                                all: string;
                                inverse: string;
                            };
                        };
                        toolbox: {
                            brush: {
                                title: {
                                    rect: string;
                                    polygon: string;
                                    lineX: string;
                                    lineY: string;
                                    keep: string;
                                    clear: string;
                                };
                            };
                            dataView: {
                                title: string;
                                lang: string[];
                            };
                            dataZoom: {
                                title: {
                                    zoom: string;
                                    back: string;
                                };
                            };
                            magicType: {
                                title: {
                                    line: string;
                                    bar: string;
                                    stack: string;
                                    tiled: string;
                                };
                            };
                            restore: {
                                title: string;
                            };
                            saveAsImage: {
                                title: string;
                                lang: string[];
                            };
                        };
                        series: {
                            typeNames: {
                                pie: string;
                                bar: string;
                                line: string;
                                scatter: string;
                                effectScatter: string;
                                radar: string;
                                tree: string;
                                treemap: string;
                                boxplot: string;
                                candlestick: string;
                                k: string;
                                heatmap: string;
                                map: string;
                                parallel: string;
                                lines: string;
                                graph: string;
                                sankey: string;
                                funnel: string;
                                gauge: string;
                                pictorialBar: string;
                                themeRiver: string;
                                sunburst: string;
                            };
                        };
                        aria: {
                            general: {
                                withTitle: string;
                                withoutTitle: string;
                            };
                            series: {
                                single: {
                                    prefix: string;
                                    withName: string;
                                    withoutName: string;
                                };
                                multiple: {
                                    prefix: string;
                                    withName: string;
                                    withoutName: string;
                                    separator: {
                                        middle: string;
                                        end: string;
                                    };
                                };
                            };
                            data: {
                                allData: string;
                                partialData: string;
                                withName: string;
                                withoutName: string;
                                separator: {
                                    middle: string;
                                    end: string;
                                };
                            };
                        };
                    } | undefined;
                    renderer?: ("canvas" | "svg") | undefined;
                    devicePixelRatio?: number | undefined;
                    useDirtyRect?: boolean | undefined;
                    ssr?: boolean | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                } | undefined>;
            };
            options: {
                type: import("vue").PropType<any>;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            loadingText: {
                type: StringConstructor;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        }, "loading" | "resize">;
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
            resize: {
                type: BooleanConstructor;
                default: boolean;
            };
            colors: {
                type: import("vue").PropType<string[]>;
            };
            theme: {
                type: StringConstructor;
            };
            initOptions: {
                type: import("vue").PropType<{
                    locale?: string | {
                        time: {
                            month: string[];
                            monthAbbr: string[];
                            dayOfWeek: string[];
                            dayOfWeekAbbr: string[];
                        };
                        legend: {
                            selector: {
                                all: string;
                                inverse: string;
                            };
                        };
                        toolbox: {
                            brush: {
                                title: {
                                    rect: string;
                                    polygon: string;
                                    lineX: string;
                                    lineY: string;
                                    keep: string;
                                    clear: string;
                                };
                            };
                            dataView: {
                                title: string;
                                lang: string[];
                            };
                            dataZoom: {
                                title: {
                                    zoom: string;
                                    back: string;
                                };
                            };
                            magicType: {
                                title: {
                                    line: string;
                                    bar: string;
                                    stack: string;
                                    tiled: string;
                                };
                            };
                            restore: {
                                title: string;
                            };
                            saveAsImage: {
                                title: string;
                                lang: string[];
                            };
                        };
                        series: {
                            typeNames: {
                                pie: string;
                                bar: string;
                                line: string;
                                scatter: string;
                                effectScatter: string;
                                radar: string;
                                tree: string;
                                treemap: string;
                                boxplot: string;
                                candlestick: string;
                                k: string;
                                heatmap: string;
                                map: string;
                                parallel: string;
                                lines: string;
                                graph: string;
                                sankey: string;
                                funnel: string;
                                gauge: string;
                                pictorialBar: string;
                                themeRiver: string;
                                sunburst: string;
                            };
                        };
                        aria: {
                            general: {
                                withTitle: string;
                                withoutTitle: string;
                            };
                            series: {
                                single: {
                                    prefix: string;
                                    withName: string;
                                    withoutName: string;
                                };
                                multiple: {
                                    prefix: string;
                                    withName: string;
                                    withoutName: string;
                                    separator: {
                                        middle: string;
                                        end: string;
                                    };
                                };
                            };
                            data: {
                                allData: string;
                                partialData: string;
                                withName: string;
                                withoutName: string;
                                separator: {
                                    middle: string;
                                    end: string;
                                };
                            };
                        };
                    } | undefined;
                    renderer?: ("canvas" | "svg") | undefined;
                    devicePixelRatio?: number | undefined;
                    useDirtyRect?: boolean | undefined;
                    ssr?: boolean | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                } | undefined>;
            };
            options: {
                type: import("vue").PropType<any>;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            loadingText: {
                type: StringConstructor;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        }, {
            container_ref: import("vue").Ref<any>;
            require_loading: import("vue").Ref<boolean>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
            loading: boolean;
            resize: boolean;
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
        resize: {
            type: BooleanConstructor;
            default: boolean;
        };
        colors: {
            type: import("vue").PropType<string[]>;
        };
        theme: {
            type: StringConstructor;
        };
        initOptions: {
            type: import("vue").PropType<{
                locale?: string | {
                    time: {
                        month: string[];
                        monthAbbr: string[];
                        dayOfWeek: string[];
                        dayOfWeekAbbr: string[];
                    };
                    legend: {
                        selector: {
                            all: string;
                            inverse: string;
                        };
                    };
                    toolbox: {
                        brush: {
                            title: {
                                rect: string;
                                polygon: string;
                                lineX: string;
                                lineY: string;
                                keep: string;
                                clear: string;
                            };
                        };
                        dataView: {
                            title: string;
                            lang: string[];
                        };
                        dataZoom: {
                            title: {
                                zoom: string;
                                back: string;
                            };
                        };
                        magicType: {
                            title: {
                                line: string;
                                bar: string;
                                stack: string;
                                tiled: string;
                            };
                        };
                        restore: {
                            title: string;
                        };
                        saveAsImage: {
                            title: string;
                            lang: string[];
                        };
                    };
                    series: {
                        typeNames: {
                            pie: string;
                            bar: string;
                            line: string;
                            scatter: string;
                            effectScatter: string;
                            radar: string;
                            tree: string;
                            treemap: string;
                            boxplot: string;
                            candlestick: string;
                            k: string;
                            heatmap: string;
                            map: string;
                            parallel: string;
                            lines: string;
                            graph: string;
                            sankey: string;
                            funnel: string;
                            gauge: string;
                            pictorialBar: string;
                            themeRiver: string;
                            sunburst: string;
                        };
                    };
                    aria: {
                        general: {
                            withTitle: string;
                            withoutTitle: string;
                        };
                        series: {
                            single: {
                                prefix: string;
                                withName: string;
                                withoutName: string;
                            };
                            multiple: {
                                prefix: string;
                                withName: string;
                                withoutName: string;
                                separator: {
                                    middle: string;
                                    end: string;
                                };
                            };
                        };
                        data: {
                            allData: string;
                            partialData: string;
                            withName: string;
                            withoutName: string;
                            separator: {
                                middle: string;
                                end: string;
                            };
                        };
                    };
                } | undefined;
                renderer?: ("canvas" | "svg") | undefined;
                devicePixelRatio?: number | undefined;
                useDirtyRect?: boolean | undefined;
                ssr?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
            } | undefined>;
        };
        options: {
            type: import("vue").PropType<any>;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadingText: {
            type: StringConstructor;
        };
    }>> & {
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        container_ref: import("vue").Ref<any>;
        require_loading: import("vue").Ref<boolean>;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    resize: {
        type: BooleanConstructor;
        default: boolean;
    };
    colors: {
        type: import("vue").PropType<string[]>;
    };
    theme: {
        type: StringConstructor;
    };
    initOptions: {
        type: import("vue").PropType<{
            locale?: string | {
                time: {
                    month: string[];
                    monthAbbr: string[];
                    dayOfWeek: string[];
                    dayOfWeekAbbr: string[];
                };
                legend: {
                    selector: {
                        all: string;
                        inverse: string;
                    };
                };
                toolbox: {
                    brush: {
                        title: {
                            rect: string;
                            polygon: string;
                            lineX: string;
                            lineY: string;
                            keep: string;
                            clear: string;
                        };
                    };
                    dataView: {
                        title: string;
                        lang: string[];
                    };
                    dataZoom: {
                        title: {
                            zoom: string;
                            back: string;
                        };
                    };
                    magicType: {
                        title: {
                            line: string;
                            bar: string;
                            stack: string;
                            tiled: string;
                        };
                    };
                    restore: {
                        title: string;
                    };
                    saveAsImage: {
                        title: string;
                        lang: string[];
                    };
                };
                series: {
                    typeNames: {
                        pie: string;
                        bar: string;
                        line: string;
                        scatter: string;
                        effectScatter: string;
                        radar: string;
                        tree: string;
                        treemap: string;
                        boxplot: string;
                        candlestick: string;
                        k: string;
                        heatmap: string;
                        map: string;
                        parallel: string;
                        lines: string;
                        graph: string;
                        sankey: string;
                        funnel: string;
                        gauge: string;
                        pictorialBar: string;
                        themeRiver: string;
                        sunburst: string;
                    };
                };
                aria: {
                    general: {
                        withTitle: string;
                        withoutTitle: string;
                    };
                    series: {
                        single: {
                            prefix: string;
                            withName: string;
                            withoutName: string;
                        };
                        multiple: {
                            prefix: string;
                            withName: string;
                            withoutName: string;
                            separator: {
                                middle: string;
                                end: string;
                            };
                        };
                    };
                    data: {
                        allData: string;
                        partialData: string;
                        withName: string;
                        withoutName: string;
                        separator: {
                            middle: string;
                            end: string;
                        };
                    };
                };
            } | undefined;
            renderer?: ("canvas" | "svg") | undefined;
            devicePixelRatio?: number | undefined;
            useDirtyRect?: boolean | undefined;
            ssr?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
        } | undefined>;
    };
    options: {
        type: import("vue").PropType<any>;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingText: {
        type: StringConstructor;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    container_ref: import("vue").Ref<any>;
    require_loading: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
    loading: boolean;
    resize: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin) & Record<string, any>;
export * from './src/echart';
export * from './src/types';
