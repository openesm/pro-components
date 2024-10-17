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
        formatter: string;
    };
    legend: {
        orient: string;
        x: string;
        data: any[];
    };
    series: {
        type: string;
        radius: string;
        center: string[];
        data: {
            name: any;
            value: any;
        }[];
    }[];
};
