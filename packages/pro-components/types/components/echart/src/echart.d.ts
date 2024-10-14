import type { PropType, ExtractPublicPropTypes } from 'vue';
export declare const sdEchartProps: {
    resize: {
        type: BooleanConstructor;
        default: boolean;
    };
    colors: {
        type: PropType<string[]>;
    };
    theme: {
        type: StringConstructor;
    };
    initOptions: {
        type: PropType<{
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
        type: PropType<any>;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingText: {
        type: StringConstructor;
    };
};
export declare const sdEchartEmits: string[];
export type SdEchartProps = ExtractPublicPropTypes<typeof sdEchartProps>;
