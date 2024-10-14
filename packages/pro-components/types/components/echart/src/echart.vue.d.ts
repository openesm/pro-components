declare const _default: import("vue").DefineComponent<{
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
}, {
    container_ref: import("vue").Ref<any>;
    require_loading: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    loading: boolean;
    resize: boolean;
}, {}>;
export default _default;
