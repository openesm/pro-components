/**
 * 图表汇总
 */

import type { ListItem, SummaryListItem } from '../types'

export default { show }
function show(cols: any[], def_values: any[]) {
    const list1: ListItem[] = []
    const list2: ListItem[] = []
    const list3: ListItem[] = [
        { label: '饼形图', value: 'pie'    },
        { label: '条形图', value: 'bar'    },
        { label: '曲线图', value: 'line'   },
        { label: '漏斗图', value: 'funnel' },
    ]

    cols.forEach((c, i) => {
        const label = c.text || c.title || c.name
        const item: ListItem = { label, value: i }

        if (['number', 'int', 'float', 'money'].includes(c.type)) {
            list2.push(item)
        } else {
            list1.push(item)
        }
    })

    return {
        dialog_props: {
            title     : '图表汇总',
            width     : 660,
            showFooter: false,
        },
        list: [
            { width: '150px', height: '120px', checkboxes: false, items: list1, value: def_values[0] ?? undefined },
            { width: '150px', height: '120px', checkboxes: false, items: list2, value: def_values[1] ?? undefined },
            { width: '150px', height: '120px', checkboxes: false, items: list3, value: def_values[2] ?? undefined },
        ] as SummaryListItem[],
    }
}
