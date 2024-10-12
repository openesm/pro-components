import type { SdProTableDefineTypes } from '../types'

/** 解析表格列字段，字符串定义 */
export function parseTableCols(str: string) {
    const arr = str.trim().split('\n')
    if ( !arr.length ) return []

    const cols: SdProTableDefineTypes.ColumnOptions[] = []

    // 解析字符串声明
    const parseStatement = (str: string) => {
        const [left_str = '', right_str = ''] = str.split(':')

        // 取得字段属性、及渲染类型
        const right_statement = right_str.match(/([a-zA-Z0-9_]+@[a-zA-Z0-9\-]+)|([a-zA-Z0-9_]+)/g) || []
        const [id = '', renderType = ''] = (right_statement[0] || '').split('@')

        // 构造列配置
        const col: SdProTableDefineTypes.ColumnOptions = {
            name      : left_str.trim(),
            id        : id.trim(),
            renderType: renderType.trim() as SdProTableDefineTypes.RenderType,
        }

        // v24.03.04 增加 ? 默认隐藏
        if (col.name!.endsWith('?')) {
            col!.name    = col.name?.replace(/\?$/, '')
            col!.visible = false
        }

        // 取得宽度|最小宽度
        const width_satement = right_str.match(/([0-9]+\+?)/)
        if (width_satement && width_satement[0]) {
            if (width_satement[0].endsWith('+')) {
                col.minWidth = Number(width_satement[0].replace('+', ''))
            } else {
                col.width = Number(width_satement[0])
            }
        }

        return col
    }

    arr.forEach((statement: string) => {
        const val = statement.trim()
        if ( !val || val.startsWith('//') || val.startsWith('/**') ) return

        cols.push(parseStatement(statement))
    })

    return cols
}
