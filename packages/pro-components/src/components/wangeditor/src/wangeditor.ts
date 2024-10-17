
import type { PropType, ExtractPublicPropTypes } from 'vue'
import type { SlateDescendant } from '@wangeditor/editor'
import type { SdWangeditorTypes } from './types'

export const wangeditorProps = {
    modelValue    : { type: String },
    defaultContent: { type: Array as PropType<SlateDescendant[]>, default: () => [] },
    defaultHtml   : { type: String, default: '' },
    mode          : { type: String as PropType<SdWangeditorTypes.EditorMode>   },
    config        : { type: Object as PropType<SdWangeditorTypes.EditorConfig> },
}

export const wangeditorEmits = [
    'require',
    'require-success',
    'require-error',
    'ready',
    // -------------
    'update:modelValue',
    'created',
    'change',
    'destroyed',
    'over-maxlength',
    'focus',
    'blur',
]

export type SdWangeditorProps = ExtractPublicPropTypes<typeof wangeditorProps>
