// 导出数据
export function exportCsv(options: {
    file_name: string
    columns  : { title: string; field: string | number; [key: string]: any }[]
    data     : any[]
}) {
    const { file_name, columns, data } = options

    if (!Array.isArray(columns)) return false
    if (!Array.isArray(data)) return false

    let CSV = ''

    // 读取表头
    let title_row = ''
    columns.forEach((t) => {
        if (t.title) title_row += `${ t.title  },`
    })
    CSV += `${ title_row  }\r\n`

    data.forEach((d) => {
        const row: any[] = []

        try {
            columns.forEach((t) => {
                let val = d[t.field]

                if (typeof val === 'undefined') val = ''
                if (t.title) {
                    // 不加入 \t 日期格式会被显示成 #######
                    if (String(val).length > 11) {
                        row.push(`"${ val }"\t`)
                    } else {
                        row.push(`"${ val }"`)
                    }
                }
            })
        } catch (e) {

            console.log(e)
        }

        CSV += `${ row.join(',')  }\r\n`
    })
    if (CSV === '') return false

    const url     = new Blob([`\uFEFF${  CSV }`], { type: 'text/csv' })
    const link    = document.createElement('a')
    link.href     = URL.createObjectURL(url)
    link.download = `${ file_name }.csv`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    return true
}

