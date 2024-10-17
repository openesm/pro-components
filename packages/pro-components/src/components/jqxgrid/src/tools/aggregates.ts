/**
 * 处理聚合函数
 */

import type { SdJqxgridTypes } from '../types'

function _sum(aggVal: number, currVal: number) {
    return currVal ? aggVal + currVal : aggVal
}

export const aggregatesMap: Record<string, SdJqxgridTypes.AggregateCustomType | (() => SdJqxgridTypes.AggregateCustomType)> = {
    // 合计
    count: {
        count: (aggVal) => {
            return Number(aggVal + 1)
        },
    },

    // 总和
    sum : { sum: _sum  },
    sumx: { sumx: _sum }, // 不带标题

    // 最小值
    min: {
        min: (aggVal, currVal, _column, record) => {
            if (record.boundindex === 0) return currVal || 0
            return Math.min(aggVal, currVal)
        },
    },

    // // 最大值
    max: {
        max: (aggVal, currVal) => {
            return Math.max(aggVal, currVal)
        },
    },

    // 平均值
    avg: () => {
        let total = 0
        let count = 0
        return {
            avg: (_aggVal, currVal, _column, record) => {
                if (record.boundindex === 0) {
                    total = 0
                    count = 0
                }
                total += (currVal || 0)
                count += 1
                return total ? (total / count) : ''
            },
        }
    },
}

export const getAggregates = (aggs?: (SdJqxgridTypes.AggregateType | SdJqxgridTypes.AggregateCustomType)[]) => {
    if (!aggs) return undefined

    return aggs.map((item) => {
        if (typeof item === 'string') {
            const result = aggregatesMap[item]
            return typeof result === 'function' ? result() : result
        } else {
            return item
        }
    }).filter(item => !!item) as SdJqxgridTypes.AggregateCustomType[]
}

export const aggregatesRenderer = (aggs: Record<string, string>) => {
    let temp = ''
    Object.keys(aggs).forEach((key) => {
        const value = aggs[key]
        switch (key) {
            case 'count': {
                const val = typeof value === 'string' ? (`${ value }`.match(/\d+/) || 0) : value
                temp += aggregatesTemp(Number(val), { prefix: '共 ', suffix: ' 项' })
                break
            }
            case 'sum' :
            case 'sumx': {
                temp += aggregatesTemp(value)
                break
            }
            case 'min': {
                temp += aggregatesTemp(value, { prefix: '最小值：' })
                break
            }
            case 'max': {
                temp += aggregatesTemp(value, { prefix: '最大值：' })
                break
            }
            case 'avg': {
                temp += aggregatesTemp(value, { prefix: '平均值：' })
                break
            }
        }
    })

    return temp
}

function aggregatesTemp(value?: number | string, options?: { prefix?: string; suffix?: string }) {
    const prefix = options?.prefix || ''
    const suffix = options?.suffix || ''
    return (
        `<div style="position: relative; margin: 4px 4px 0 4px; overflow: hidden;">
            ${ value ? `${ prefix }${ value }${ suffix }` : '' }
        </div>`
    )
}
