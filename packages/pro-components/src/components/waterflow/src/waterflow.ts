import type { PropType, ExtractPublicPropTypes } from 'vue'
import type { SdWaterflowTypes } from './types'
import type { ScrollbarProps   } from 'element-plus'

export const sdWaterflowProps = {
    list             : { type: Array as PropType<SdWaterflowTypes.WaterflowItem[]>, default: () => [] }, // 数据
    column           : { type: Number, default: 4                                                     }, // 列数
    confirmButtonText: { type: String, default: '确定使用'                                            }, // 确认按钮文字
    loadingText      : { type: String, default: '正在努力加载中...'                                   },
    nomoreText       : { type: String, default: '没有更多了...'                                       },
    nomore           : { type: Boolean, default: false                                                },
    scrollbarConfig  : { type: Object as PropType<Partial<ScrollbarProps>>                            },
    loadmore         : { type: Function                                                               },
    delay            : { type: Number, default: 200                                                   }, // 触发加载更多函数节流时延
    distance         : { type: Number, default: 0                                                     },  // 距离底部距离触发 loadmore
}

export const sdWaterflowEmits = [
    'scroll',
    'confirm',
]

export type SdWaterflowProps = ExtractPublicPropTypes<typeof sdWaterflowProps>
