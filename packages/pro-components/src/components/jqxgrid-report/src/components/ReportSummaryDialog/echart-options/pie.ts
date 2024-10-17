
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
        tooltip: { trigger: 'item', formatter: '{b} : {c} ({d}%)' },
        legend : { orient: 'vertical', x: 'left', data: types },
        series : [{ type: 'pie', radius: '70%', center: ['50%', '60%'], data: values }],
    }
}
