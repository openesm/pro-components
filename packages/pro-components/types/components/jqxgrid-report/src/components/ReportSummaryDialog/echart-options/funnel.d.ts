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
    legend: {
        orient: string;
        x: string;
        y: string;
        data: any[];
    };
    calculable: boolean;
    series: {
        type: string;
        x: string;
        x2: string;
        y2: string;
        itemStyle: {
            normal: {
                labelLine: {
                    show: boolean;
                };
            };
            emphasis: {
                labelLine: {
                    show: boolean;
                };
            };
        };
        data: {
            name: any;
            value: any;
        }[];
    }[];
};
