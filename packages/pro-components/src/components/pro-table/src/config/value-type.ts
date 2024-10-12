import type { VNode } from 'vue'
import type { SdProTableDefineTypes } from '../types'

import { ElTag, ElProgress, ElDivider, dayjs } from 'element-plus'
import { Link as IconLink } from '@element-plus/icons-vue'
import { h } from 'vue'
import { toPrice, toInt, toBankcard } from '../tools'

import { SdLink   } from '../../../link'
import { SdImage  } from '../../../image'
import { SdStatus } from '../../../status'

// 值类型渲染器及格式化函数配置
type ValueTypeMap = Record<SdProTableDefineTypes.RenderType | string, {
    render   ?: (params: { row: any; column: SdProTableDefineTypes.VxeColumnInfo }) => JSX.Element[] | VNode[] | string[]
    formatter?: SdProTableDefineTypes.FormatterMethod
}>

// 行格式化数据属性名
export const ROW_FORMAT_PROP = '_ROW_FORMAT_'

// 为空占位文本
const EMPTY_TEXT = '-'

// 最小日期
const MIN_DATE      = '1900-01-01'
const MIN_DATE_TIME = '1900-01-01 00:00:00'

// 获取单元格值
export function getCellValue(row: any, field: string) {
    if (row[ROW_FORMAT_PROP] && field in row[ROW_FORMAT_PROP]) {
        return row[ROW_FORMAT_PROP][field]
    } else {
        return row[field]
    }
}

// 处理不同类型的格式化函数
const format: {
    [key: string]: ((params: { row: any; column: SdProTableDefineTypes.VxeColumnInfo | SdProTableDefineTypes.ColumnInfo }) => string | number)
} = {
    enums: ({ row, column }) => {
        const params     = column.params
        const cellValue  = row[column.field]
        const valueEnums = params.valueEnums || []
        if ( !valueEnums.length ) return cellValue // 未设置过滤项则使用原始值

        const  item = valueEnums.find(item => item.id === cellValue)
        return item ? item.name : EMPTY_TEXT
    },
}

// 处理不同值类型对应的渲染函数及格式化函数
export const VALUE_TYPE: ValueTypeMap = {
    /** 单元格渲染为: 选项中对应标题 */
    'enums-text': {
        formatter: format.enums,
    },

    /** 单元格渲染为: 标签 */
    'enums-tag': {
        render: ({ row, column }) => {
            const params     = column.params
            const cellValue  = row[column.field]
            const valueEnums = params.valueEnums || []
            if ( !valueEnums.length ) return [cellValue] // 未设置过滤项则使用原始值

            const item = valueEnums.find((item: any) => item.id === cellValue)
            if ( !item ) return [EMPTY_TEXT]

            return [
                h(ElTag, { type: item.type as any, disableTransitions: true }, { default: () => item.name }),
            ]
        },
        formatter: format.enums,
    },

    /** 单元格渲染为: 含状态文字 */
    'enums-status': {
        render: ({ row, column }) => {
            const params     = column.params
            const cellValue  = row[column.field]
            const valueEnums = params.valueEnums || []
            if ( !valueEnums.length ) return [cellValue] // 未设置过滤项则使用原始值

            const item = valueEnums.find((item: any) => item.id === cellValue)
            if ( !item ) return [EMPTY_TEXT]

            return [
                h(SdStatus, { type: item.type as any }, { default: () => item.name }),
            ]
        },
        formatter: format.enums,
    },

    /** 单元格渲染为: 指定 keys 的拼接 */
    'join': {
        render: ({ row, column }) => {
            const { resolveColumns, renderParams } = column.params

            const separator  = renderParams.separator || ''         // 链接符
            const empty_text = renderParams.emptyText || EMPTY_TEXT // 为空文本

            const ids    = resolveColumns.map(item => item.id)
            if ( !ids.length ) return [empty_text]

            // 取出字段对应值 (默认转为字符串，避免数值 0 被忽略)
            const values = ids.map(id => `${ getCellValue(row, id) }`).filter(val => !!val)
            if ( !values.length ) return [empty_text]

            return [values.join(separator)]
        },
    },

    /** 单元格渲染为: 指定 keys 的竖线拼接 */
    'join-divider': {
        render: ({ row, column }) => {
            const { resolveColumns, renderParams } = column.params

            const empty_text = renderParams.emptyText || EMPTY_TEXT // 为空文本
            const fields     = renderParams.fields                  // 渲染字段集合

            const ids = Array.isArray(fields) ? fields : resolveColumns.map(item => item.id)
            if ( !ids.length ) return [empty_text]

            // 取出字段对应值 (默认转为字符串，避免数值 0 被忽略)
            const values = ids.map(id => `${ getCellValue(row, id) }`).filter(val => !!val)
            if ( !values.length ) return [empty_text]

            // 渲染单元格
            const vNodes: VNode[] = []
            values.forEach((value, index) => {
                if (index > 0) vNodes.push(h(ElDivider, { direction: 'vertical' }))
                vNodes.push(h('span', value))
            })
            return vNodes
        },
    },

    /** 单元格渲染为: 根据配置字段渲染多行，一个字段的值占一行 */
    'multiline': {
        render: ({ row, column }) => {
            const { resolveColumns, renderParams } = column.params

            const empty_text = renderParams.emptyText || EMPTY_TEXT // 为空文本
            const margin_top = renderParams.marginTop || 3          // 顶部外边距值

            const ids    = resolveColumns.map(item => item.id)
            if ( !ids.length ) return [empty_text]

            // 取出字段对应值 (默认转为字符串，避免数值 0 被忽略)
            const values = ids.map(id => `${ getCellValue(row, id) }`).filter(val => !!val)
            if ( !values.length ) return [empty_text]

            // 渲染单元格
            const vNodes: ReturnType<typeof h>[] = []
            values.forEach((value, index) => {
                vNodes.push(h('div', { style: { marginTop: index > 0 ? `${ margin_top }px` : 0 } }, value))
            })
            return vNodes
        },
    },

    /** 单元格渲染为: 上日期、下时间 */
    'datetime-split': {
        render: ({ row, column }) => {
            const cellValue = getCellValue(row, column.field)

            if (!cellValue || cellValue <= MIN_DATE_TIME) return [EMPTY_TEXT]

            // 分割日期和时间
            const date  = cellValue.slice(2, 11)
            const time  = cellValue.slice(11)
            return [
                h('div', { style: { display: 'inline-block' } }, [
                    h('div', date),
                    h('div', { style: { marginTop: '3px', textAlign: 'left' } }, time),
                ]),
            ]
        },
        formatter({ row, column }) {
            const cellValue = getCellValue(row, column.field)
            if ( !cellValue || cellValue <= MIN_DATE_TIME ) return EMPTY_TEXT
            return dayjs(cellValue).format('YYYY-MM-DD HH:mm:ss')
        },
    },

    /** 单元格渲染为链接展示 */
    'link': {
        render: ({ row, column }) => {
            const link_text         = column.params.renderParams.linkText || '点击预览' // 链接文本
            const id                = column.params.renderParams.id                     // 自定义取得链接属性
            const invalid_link_text = column.params.renderParams.invalidLinkText        // 无效链接文本

            // 指定 link prop 则读取指定，默认当前属性后补 _link
            let prop = ''
            if (id) {
                prop = id
            } if (`${ column.field }_link` in row) {
                prop = `${ column.field }_link`
            } else {
                prop = column.field
            }

            const href = getCellValue(row, prop) as string || ''
            const text = getCellValue(row, column.field)   || '' // 原值

            // 不是链接地址，不渲染为 link 组件
            if (!href || !/^https?:/.test(href)) return [invalid_link_text || text]

            return [
                h(SdLink, { href, icon: IconLink }, { default: () => link_text }),
            ]
        },
    },

    /** 单元格渲染为图片展示 */
    'image': {
        render: ({ row, column }) => {
            const style = {
                position      : 'absolute',
                top           : '6px',
                bottom        : '6px',
                left          : '6px',
                right         : '6px',
                display       : 'flex',
                justifyContent: 'center',
                alignItems    : 'center',
            }
            return [
                h('div', { style }, [
                    h(SdImage, {
                        src   : getCellValue(row, column.field),
                        width : '100%',
                        height: '100%',
                        lazy  : false,
                        fit   : 'contain',
                        ...column.params.renderParams,
                    }),
                ]),
            ]
        },
    },

    /** 单元格渲染为进度条展示 */
    'progress': {
        render: ({ row, column }) => {
            return [
                h(ElProgress, {
                    percentage : getCellValue(row, column.field),
                    strokeWidth: 8,
                }),
            ]
        },
    },

    'bankcard': {
        formatter({ row, column }) {
            const cellValue = row[column.field]
            return !cellValue ? EMPTY_TEXT : toBankcard(Number(cellValue))
        },
    },

    'mobile': {
        formatter({ row, column }) {
            const cellValue = row[column.field]
            return cellValue ? `${ cellValue.slice(0, 3) }****${ cellValue.slice(7) }` : EMPTY_TEXT
        },
    },

    'password': {
        formatter({ row, column }) {
            const cellValue = row[column.field]
            return cellValue ? '******' : EMPTY_TEXT
        },
    },

    'date': {
        formatter({ row, column }) {
            const cellValue = getCellValue(row, column.field)
            if ( !cellValue || cellValue <= MIN_DATE) return EMPTY_TEXT
            return dayjs(cellValue).format('YYYY-MM-DD')
        },
    },

    'datetime': {
        formatter({ row, column }) {
            const cellValue = getCellValue(row, column.field)
            if ( !cellValue || cellValue <= MIN_DATE_TIME ) return EMPTY_TEXT
            return dayjs(cellValue).format('YYYY-MM-DD HH:mm:ss')
        },
    },

    'money': {
        formatter({ row, column }) {
            const value = Number(getCellValue(row, column.field) ?? 0)
            if (isNaN(value) || value === 0) return EMPTY_TEXT
            return `￥${ toPrice(value, { digits: 2 }) }`
        },
    },
    'price': {
        formatter({ row, column }) {
            const value = Number(getCellValue(row, column.field) ?? 0)
            if (isNaN(value) || value === 0) return EMPTY_TEXT
            return `￥${ toPrice(value, { digits: 2 }) }`
        },
    },

    'number': {
        formatter({ row, column }) {
            const value = Number(getCellValue(row, column.field))
            if (isNaN(value) || value === 0) return EMPTY_TEXT

            return toInt(value)
        },
    },

    'text': {
        formatter({ row, column }) {
            return getCellValue(row, column.field) || EMPTY_TEXT
        },
    },
}
