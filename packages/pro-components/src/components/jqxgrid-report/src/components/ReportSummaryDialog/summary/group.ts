/**
 * 分组汇总
 */

import type { ListItem, SummaryListItem } from '../types'

export default { show, load }

function show(cols: any[], def_values: any[]) {
    const list1: ListItem[] = [] // 分组列
    const list2: ListItem[] = [] // 数据列

    cols.forEach((c, i) => {
        const label = c.text || c.title || c.name
        const item: ListItem = { label, value: i }

        if (['number', 'int', 'float', 'money'].includes(c.type)) {
            list2.push(item)
        } else {
            list1.push(item)
        }
    })

    const list: SummaryListItem[] = [
        { width: '150px', height: '250px', checkboxes: true, items: list1, value: def_values[0] || [] },
        { width: '150px', height: '250px', checkboxes: true, items: list2, value: def_values[1] || [] },
    ]

    return {
        dialog_props: {
            title     : '分组汇总',
            width     : 480,
            showFooter: false,
        },
        list,
    }
}

function load(rpt: { cols: any[]; rows: any[] }, { group_cols, number_cols }: { group_cols: number[]; number_cols: number[] }) {
    const colx = [] as any[]
    const rowx = [] as any[]

    // 分组列
    for (let i = 0; i < group_cols.length; i++) {
        const col = { ...rpt.cols[group_cols[i]!] } // 克隆
        col.pinned = true // 列固定
        if (i === 0 && !col.aggs) col.aggs = ['count'] // 计数
        colx.push(col)
    }

    // 数据列
    for (let i = 0; i < number_cols.length; i++) {
        const col = { ...rpt.cols[number_cols[i]!] } // 克隆
        col.pinned = false // 不固定
        colx.push(col)
    }

    const map: Record<string, any> = {} // 以分组列的值做key，存放对应行数

    for (let i = 0; i < rpt.rows.length; i++) {
        // 取得分组列的值做key
        const key = group_cols.map((col_idx: number) => `${ rpt.rows[i][col_idx] }`).join('/')

        // 填充分组列值
        let row_idx = map[key]
        if (row_idx === undefined) {
            row_idx = rowx.length
            rowx[row_idx] = []  // 添加一行
            map[key] = row_idx // 存放对应行数
            for (let j = 0; j < group_cols.length; j++) {
                rowx[row_idx][j] = rpt.rows[i][group_cols[j]!]
            }
        }

        // 累计汇总列的值
        for (let j = 0; j < number_cols.length; j++) {
            const col_idx = group_cols.length + j
            rowx[row_idx][col_idx] = (rowx[row_idx][col_idx] || 0) + (Number(rpt.rows[i][number_cols[j]!]) || 0)
        }
    }

    return {
        cols: colx,
        rows: rowx,
    }
}
