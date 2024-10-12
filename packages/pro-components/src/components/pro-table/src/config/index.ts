
export * from './value-type'

// 数字值类型
export const NUMBER_VALUE_TYPE = ['number', 'money', 'progress']

// 筛选为空文本
export const FILTER_EMPTY_TEXT = '(空)'

/** 数字筛选条件 */
export const NUMBER_FILTER_OPTIONS = [
    { label: '相等'      , value: 'EQUAL'                 },
    { label: '不相等'    , value: 'NOT_EQUAL'             },
    { label: '小于'      , value: 'LESS_THAN'             },
    { label: '小于或等于', value: 'LESS_THAN_OR_EQUAL'    },
    { label: '大于'      , value: 'GREATER_THAN'          },
    { label: '大于或等于', value: 'GREATER_THAN_OR_EQUAL' },
]

/** 文本筛选条件 */
export const TEXT_FILTER_OPTIONS = [
    { label: '相等'   , value: 'EQUAL'              },
    { label: '不相等' , value: 'NOT_EQUAL'          },
    { label: '包含'   , value: 'CONTAINS'           },
    { label: '不包含' , value: 'DOES_NOT_CONTAIN'   },
    { label: '以开始' , value: 'STARTS_WITH'        },
    { label: '以结尾' , value: 'ENDS_WITH'          },
]

/** 日期筛选条件 */
export const DATE_FILTER_OPTIONS = [
    { label: '相等'              , value: 'EQUAL'                 },
    { label: '不相等'            , value: 'NOT_EQUAL'             },
    { label: '以下日期之前'      , value: 'LESS_THAN'             },
    { label: '以下日期之前或相同', value: 'LESS_THAN_OR_EQUAL'    },
    { label: '以下日期之后'      , value: 'GREATER_THAN'          },
    { label: '以下日期之后或相同', value: 'GREATER_THAN_OR_EQUAL' },
]

/** 筛选条件操作类型 */
export const JOIN_FILTER_OPTIONS = [
    { label: '并且', value: 'and' },
    { label: '或者', value: 'or'  },
]
