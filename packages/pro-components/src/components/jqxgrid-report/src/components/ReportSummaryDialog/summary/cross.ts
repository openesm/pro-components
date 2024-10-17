/**
 * 交叉汇总
 */

import type { ListItem, SummaryListItem } from '../types'

export default { show, load }

function show(cols: any[], def_values: any[]) {
    const list1: ListItem[] = [] // 分组列
    const list2: ListItem[] = [] // 交叉列
    const list3: ListItem[] = [] // 数据列

    cols.forEach((c, i) => {
        const label   = c.text || c.title || c.name
        const item: ListItem = { label, value: i }

        if (['number', 'int', 'float', 'money'].includes(c.type)) {
            list3.push(item)
        } else {
            list1.push(item)
            list2.push(item)
        }
    })

    return {
        dialog_props: {
            title     : '交叉汇总',
            width     : 650,
            showFooter: false,
        },
        list: [
            { width: '150px', height: '250px', checkboxes: true , items: list1, value: def_values[0] || []        },
            { width: '150px', height: '250px', checkboxes: false, items: list2, value: def_values[1] ?? undefined },
            { width: '150px', height: '250px', checkboxes: false, items: list3, value: def_values[2] ?? undefined },
        ] as SummaryListItem[],
    }
}

function load(
    rpt: { cols: any[]; rows: any[] },
    { group_cols, cross_col_idx, number_col_idx }: { group_cols: number[]; cross_col_idx: number; number_col_idx: number },
) {
    const cols = rpt.cols
    const rows = rpt.rows
    const colx = [] as any[]
    const rowx = [] as any[]

    // 分组列
    for (let i = 0; i < group_cols.length; i++) {
        const col = { ...cols[group_cols[i]!] } // 克隆
        col.pinned = true // 列固定
        if (i === 0 && !col.aggs) col.aggs = ['count'] // 计数
        colx.push(col)
    }

    const x_map: Record<string, any> = {} // 以分组列的值做key，存放对应行数
    const y_map: Record<string, any> = {} // 以交叉列的值做key，存放对应列数

    for (let i = 0; i < rows.length; i++) {
        // 取得分组列的值做key
        const key = group_cols.map((col_idx: number) => `${ rpt.rows[i][col_idx] }`).join('/')

        // 填充分组列值
        let row_idx = x_map[key]
        if (row_idx === undefined) {
            row_idx = rowx.length
            rowx[row_idx] = [] // 添加一行
            x_map[key] = row_idx // 存放对应行数
            for (let j = 0; j < group_cols.length; j++) {
                rowx[row_idx][j] = rows[i][group_cols[j]!]
            }
        }

        // 交叉列
        const y = rows[i][cross_col_idx]
        let col_idx = y_map[y]
        if (col_idx === undefined) {
            col_idx = colx.length
            const c = { ...cols[number_col_idx] } // 克隆
            c.text    = y // 使用交叉列的值做标题
            c.pinned  = false
            colx[col_idx] = c
            y_map[y]  = col_idx
        }

        // 累计汇总列的值
        rowx[row_idx][col_idx] = (rowx[row_idx][col_idx] || 0) + (Number(rows[i][number_col_idx]) || 0)
    }

    // 补全数组各行各列
    for (let i = 0; i < rowx.length; i++) {
        let total = 0
        for (let j = group_cols.length; j < colx.length; j++) {
            if (rowx[i][j] === undefined) rowx[i][j] = 0
            total += rowx[i][j]
        }
        rowx[i][colx.length] = total // 小计
    }

    // 行小计列clone
    const c = { ...cols[number_col_idx] } // 克隆
    c.pinned = true
    colx.push(c)

    return {
        cols: colx,
        rows: rowx,
    }
}
