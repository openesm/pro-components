import type { ExtractPropTypes, PropType, StyleValue } from 'vue'

export const sdPageProps = {
    lockScroll : { type: Boolean, default: false                  }, // 锁定滚动
    title      : { type: String                                   }, // 页面标题
    wrap       : { type: Boolean                                  }, // flex 容器
    headerFixed: { type: Boolean                                  }, // 固定头部
    headerClass: { type: String                                   }, // 顶部类名
    headerStyle: { type: [String, Object] as PropType<StyleValue> }, // 顶部样式
    bodyClass  : { type: String                                   }, // 内容类名
    bodyStyle  : { type: [String, Object] as PropType<StyleValue> }, // 内容样式
    footerFixed: { type: Boolean                                  }, // 固定底部
    footerClass: { type: String                                   }, // 底部类名
    footerStyle: { type: [String, Object] as PropType<StyleValue> }, // 底部样式
} as const

export type SdPageProps = ExtractPropTypes<typeof sdPageProps>
