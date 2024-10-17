import type { PropType, ExtractPublicPropTypes, CSSProperties } from 'vue'
import type { SdJexcelTypes } from './types'

export const jexcelProps = {
    showLoading       : { type: Boolean, default: true                                            }, // 显示加载库 Loading
    loadingHeight     : { type: [String, Number]                                                  }, // Loading 高度
    loadingStyle      : { type: Object as PropType<CSSProperties>                                 }, // Loading 自定义样式
    index             : { type: Boolean, default: true                                            }, // 是否显示行号
    readonlyBackground: { type: String                                                            }, // 只读数据背景色
    readonlyColor     : { type: String                                                            }, // 只读数据颜色
    titleHeight       : { type: [String, Number]                                                  }, // 标题高度
    rowHeight         : { type: [String, Number]                                                  }, // 行高度
    columns           : { type: Array as PropType<SdJexcelTypes.ColumnOptions[]>, default: () => []   }, // 列配置
    data              : { type: Array as PropType<any[]>    , default: () => []                   }, // 数据
    mergeCells        : { type: Object as PropType<SdJexcelTypes.MergeCells>                          }, // 合并单元格
    minDimensions     : { type: Array as PropType<number[]> , default: () => [0, 0]               }, // 最小表格尺寸：[cols，rows]
    onBeforeChange    : { type: Function as PropType<SdJexcelTypes.InitOptions['onBeforeChange']>     }, // 数据修改前钩子，可用于转换数据
    onAfterChanges    : { type: Function as PropType<SdJexcelTypes.InitOptions['onAfterChanges']>     }, // 数据修改后钩子，可用于检查数据合法性
    onUpdateTable     : { type: Function as PropType<SdJexcelTypes.InitOptions['updateTable']>        }, // 更新表格，可用于修改单元格样式
    onEditionStart    : { type: Function as PropType<SdJexcelTypes.InitOptions['onEditionStart']>     }, // 编辑单元格开始
    onEditionEnd      : { type: Function as PropType<SdJexcelTypes.InitOptions['onEditionEnd']>       }, // 编辑单元格结束
    onFocus           : { type: Function as PropType<SdJexcelTypes.InitOptions['onFocus']>            }, // 编辑单元格结束
    onBlur            : { type: Function as PropType<SdJexcelTypes.InitOptions['onBlur']>             }, // 编辑单元格结束
    onSelection       : { type: Function as PropType<SdJexcelTypes.InitOptions['onSelection']>             }, // 编辑单元格结束
    options           : { type: Object as PropType<SdJexcelTypes.InitOptions>   , default: () => ({}) }, // 初始化配置
}

export const jexcelEmits = [
    'require',
    'require-success',
    'require-error',
    'ready',
]

export type SdJexcelProps = ExtractPublicPropTypes<typeof jexcelProps>
