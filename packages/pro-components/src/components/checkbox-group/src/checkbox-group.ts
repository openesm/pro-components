import type { ExtractPublicPropTypes, PropType } from 'vue'
import type { OptionComponentTypes } from '../../../types'

import { checkboxGroupProps, checkboxGroupEmits } from 'element-plus'

const extraProps = {
    button : { type: Boolean, default: false },
    options: { type: Array  as PropType<OptionComponentTypes.item[]>, default: () => [] },
    prop   : { type: Object as PropType<OptionComponentTypes.PropConfig> },
}

export const sdCheckboxGroupProps = {
    ...checkboxGroupProps,
    // ---------------------------------------------------------------------------------
    ...extraProps,
}

export const sdCheckboxGroupEmits = checkboxGroupEmits
export const sdCheckboxGroupOmitKeys = [
    'modelValue',
    // -------------------
    ...Object.keys(extraProps),
]

export type SdCheckboxGroupProps = ExtractPublicPropTypes<typeof checkboxGroupProps>
