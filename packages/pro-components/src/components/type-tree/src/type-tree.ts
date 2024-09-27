import type { SdTypeTreeTypes } from './types'
import type { ExtractPropTypes, PropType, CSSProperties } from 'vue'

export const sdTypeTreeProps = {
    width        : { type: [Number, String] as PropType<number | string>                , default: 250 }, // 宽度
    headClass    : { type: [Object, String] as PropType<Record<string, string> | string>, default: ''  }, // 头部区域类名
    headStyle    : { type: [Object, String] as PropType<CSSProperties | string>         , default: ''  }, // 头部区域样式
    mainClass    : { type: [Object, String] as PropType<Record<string, string> | string>, default: ''  }, // 内容区域类名
    mainStyle    : { type: [Object, String] as PropType<CSSProperties | string>         , default: ''  }, // 内容区域样式
    footClass    : { type: [Object, String] as PropType<Record<string, string> | string>, default: ''  }, // 底部区域类名
    footStyle    : { type: [Object, String] as PropType<CSSProperties | string>         , default: ''  }, // 底部区域样式
    showHead     : { type: Boolean, default: true                                                      }, // 是否显示头部
    showFoot     : { type: Boolean, default: false                                                     }, // 是否显示底部
    title        : { type: String , default: ''                                                        }, // 头部标题
    list         : { type: Array  , default: () => []                                                  }, // 列表数据
    prop         : { type: Object as PropType<SdTypeTreeTypes.PropConfig>, default: () => {}           }, // 自定义列字段
    emptyText    : { type: String                                                                      }, // 数据为空时提示文字
    showRefresh  : { type: Boolean, default: false                                                     }, // 显示刷新按钮
    renderContent: { type: Function                                                                    }, // 节点渲染函数
    accordion    : { type: Boolean, default: true                                                      }, // 手风琴模式
    nodeKey      : { type: String , default: 'value'                                                   },
}

export type SdTypeTreeProps = ExtractPropTypes<typeof sdTypeTreeProps>
