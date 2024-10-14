
import type { PropType, ExtractPublicPropTypes } from 'vue'
import type { SdEchartInitOptions } from './types'

export const sdEchartProps = {
    resize     : { type: Boolean, default: false                 }, // 是否监听容器变化，重新绘制图表
    colors     : { type: Array as PropType<string[]>             }, // 给定颜色集合
    theme      : { type: String                                  }, // 渲染主题
    initOptions: { type: Object as PropType<SdEchartInitOptions> }, // 初始化选项配置
    options    : { type: Object as PropType<any>                 }, // 图表配置
    loading    : { type: Boolean, default: true                  }, // 显示加载依赖 Loading
    loadingText: { type: String                                  }, // 显示加载依赖 Loading 文本
}

export const sdEchartEmits = [
    'require',
    'require-success',
    'require-error',
    'ready',
    'option-change',
]

export type SdEchartProps = ExtractPublicPropTypes<typeof sdEchartProps>
