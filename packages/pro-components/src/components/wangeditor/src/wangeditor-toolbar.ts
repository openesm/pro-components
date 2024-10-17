import type { PropType, ExtractPublicPropTypes } from 'vue'
import type { SdWangeditorToolbarTypes, SdWangeditorTypes } from './types'

export const wangeditorToolbarProps = {
    editor: { type: Object as PropType<SdWangeditorTypes.EditorInstance | null>, default: null      }, // editor 实例
    mode  : { type: String as PropType<SdWangeditorToolbarTypes.ToolbarMode>   , default: 'default' }, // 编辑器模式
    config: { type: Object as PropType<SdWangeditorToolbarTypes.ToolbarConfig>                      }, // 工具栏配置
}

export type SdWangeditorToolbarProps = ExtractPublicPropTypes<typeof wangeditorToolbarProps>
