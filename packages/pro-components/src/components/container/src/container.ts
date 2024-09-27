import type { ExtractPublicPropTypes, PropType, StyleValue } from 'vue'
import type { ScrollbarProps } from 'element-plus'

export const sdContainerProps = {
    lockScroll     : { type: Boolean, default: false                  }, // 锁定滚动
    title          : { type: String                                   }, // 页面标题
    wrap           : { type: Boolean                                  }, // flex 容器
    headerFixed    : { type: Boolean                                  }, // 固定头部
    headerClass    : { type: String                                   }, // 顶部类名
    headerStyle    : { type: [String, Object] as PropType<StyleValue> }, // 顶部样式
    titleStyle     : { type: [String, Object] as PropType<StyleValue> }, // 标题自定义样式
    bodyClass      : { type: String                                   }, // 内容类名
    bodyStyle      : { type: [String, Object] as PropType<StyleValue> }, // 内容样式
    renderContent  : { type: Boolean },
    contentStyle   : { type: [String, Object] as PropType<StyleValue> }, // 内容区域自定义样式
    footerFixed    : { type: Boolean                                  }, // 固定底部
    footerClass    : { type: String                                   }, // 底部类名
    footerStyle    : { type: [String, Object] as PropType<StyleValue> }, // 底部样式
    scrollbarConfig: { type: Object as PropType<Partial<ScrollbarProps>> },
    loading        : { type: Boolean },
    loadingDelay   : { type: Number, default: 0 },
    showError      : { type: Boolean },
    errorText      : { type: String  },
} as const

export const sdContainerEmits = [
    'scroll',
    'reload',
]

export type SdContainerProps = ExtractPublicPropTypes<typeof sdContainerProps>
