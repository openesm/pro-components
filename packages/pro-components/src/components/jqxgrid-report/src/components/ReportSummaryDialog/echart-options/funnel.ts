
export default function (rpt: { rows: any[]; title: string; subtitle: string }) {
    const types  = rpt.rows.map(row => row[0])
    const values = rpt.rows.map(row => ({ name: row[0], value: row[1] }))

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
        tooltip   : { trigger: 'item' },
        legend    : { orient: 'vertical', x: 'left', y: 'center', data: types },
        calculable: true,
        series    : [
            {
                type     : 'funnel',
                x        : '15%',
                x2       : '15%',
                y2       : '10%',
                itemStyle: {
                    normal  : { labelLine: { show: false } },
                    emphasis: { labelLine: { show: false } },
                },
                data: values,
            },
        ],
    }
}
