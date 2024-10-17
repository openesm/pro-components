export default function (rpt: {
    rows: any[];
    title: string;
    subtitle: string;
}): {
    title: {
        text: string;
        subtext: string;
        x: string;
        textStyle: {
            color: string;
            fontWeight: string;
        };
    };
    tooltip: {
        trigger: string;
    };
    calculable: boolean;
    xAxis: {
        type: string;
        data: any[];
        boundaryGap: boolean;
        axisLine: {
            lineStyle: {
                color: string;
            };
        };
    }[];
    yAxis: {
        type: string;
        axisLine: {
            lineStyle: {
                color: string;
            };
        };
    }[];
    series: {
        type: string;
        smooth: boolean;
        data: any[];
        areaStyle: {
            color: string;
        };
    }[];
};
