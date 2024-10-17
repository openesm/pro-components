
export default function (rpt: { rows: any[]; title: string; subtitle: string }) {
    const types  = rpt.rows.map(row => row[0])
    const values = rpt.rows.map(row => row[1])

    return {
        title: {
            text     : rpt.title,
            subtext  : rpt.subtitle,
            x        : 'center',
            textStyle: {
                color     : '#4a5a6a',
                fontWeight: '600',
            },
        },
        tooltip   : { trigger: 'axis' },
        calculable: true,
        xAxis     : [
            {
                type       : 'category',
                data       : types,
                boundaryGap: false,
                axisLine   : {
                    lineStyle: {
                        color: '#aaa',
                    },
                },
            },
        ],
        yAxis: [
            {
                type    : 'value',
                axisLine: {
                    lineStyle: {
                        color: '#aaa',
                    },
                },
            },
        ],
        series: [
            {
                type     : 'line',
                smooth   : true,
                data     : values,
                areaStyle: {
                    color: '#F2F8FD',
                },
            },
        ],
    }
}
