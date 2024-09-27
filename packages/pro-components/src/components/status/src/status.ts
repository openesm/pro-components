import type { ExtractPublicPropTypes, PropType } from 'vue'
import type { ComponentTypes } from '../../../types'

export const sdStatusProps = {
    type: { type: String as PropType<ComponentTypes>, default: 'info' },
    text: { type: String  , default: ''                               }, // 显示文字
}

export type SdStatusProps = ExtractPublicPropTypes<typeof sdStatusProps>
