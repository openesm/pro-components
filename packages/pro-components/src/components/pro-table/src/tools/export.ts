import type { Style } from 'exceljs'
import { isNumber } from 'lodash-es'

interface ExportOptions {
    file_name  : string
    sheet_name?: string
    columns    : any[]
    data       : any[]
}

function importExcelJs() {
    return import('exceljs')
}

// 导出 xlxs
export async function xlsxExport(options: ExportOptions) {
    const ExcelJs    = await importExcelJs()
    const workboot   = new ExcelJs.Workbook()
    workboot.creator = options.file_name
    const sheet = workboot.addWorksheet(options.sheet_name || options.file_name, {
        views: [{ state: 'frozen', ySplit: 1 }], // 冻结表头
    })

    sheet.columns = options.columns.map((c) => {
        return {
            header: c.name,
            key   : c.id,
            width : isNumber(c.width) ? c.width / 10 : 20,
            style : {
                alignment: { horizontal: 'center', vertical: 'middle' },
            } as Style,
        }
    })
    sheet.addRows(options.data)
    // sheet.getRow(1).font = {
    //     color: { argb: '606266' },
    //     bold : true,
    // }
    // sheet.getRow(1).fill = {
    //     type   : 'pattern',
    //     pattern: 'solid', 单一颜色
    //     fgColor: { argb: 'f8f8f9' },
    // }

    const buffer = await workboot.xlsx.writeBuffer()
    const blob   = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    FileSaver(blob, `${ options.file_name }.xlsx`)
}

// 导出 csv
export function csvExport(options: ExportOptions) {

    const toCsv = (columns: { id: string; name: string }[], data: any[]) => {
        let csv = ''

        // 读取表头
        const title_row = columns.map(c => `${ c.name }`).join(',')
        csv += `${ title_row }\r\n`

        data.forEach((d) => {
            const row: string[] = []

            try {
                columns.forEach((t) => {
                    let val = d[t.id]
                    if (typeof val === 'undefined') {
                        val = ''
                    } else {
                        val = String(val)
                    }

                    // 去除金额前缀，不去除导出会被识别为文本
                    if (val.startsWith('￥')) val = val.replace('￥', '')

                    // 不加入 \t 日期格式会被显示成 #######
                    if (val.length >= 10) {
                        row.push(`"${ val }"\t`)
                    } else {
                        row.push(`"${ val }"`)
                    }
                })
            } catch (e) {}

            csv += `${ row.join(',')  }\r\n`
        })

        return csv
    }

    // 数据转成 csv
    const data = toCsv(options.columns, options.data)
    if ( !data ) return

    const blob = new Blob([`\uFEFF${ data }`], { type: 'text/csv' })
    FileSaver(blob, `${ options.file_name  }.csv`)
}

// 下载文件
export function FileSaver(blob: Blob, download_name: string) {
    const link    = document.createElement('a')
    link.href     = URL.createObjectURL(blob)
    link.download = download_name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
