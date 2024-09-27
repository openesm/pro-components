import type { ExtractPublicPropTypes, PropType, CSSProperties } from 'vue'
import type { OptionComponentTypes } from '../../../types'

import { radioGroupProps, radioGroupEmits, badgeProps } from 'element-plus'

const extraProps = {
    button       : { type: Boolean, default: true  },
    showCount    : { type: Boolean, deafult: false },
    showCountZero: { type: Boolean, deafult: false },
    options      : { type: Array  as PropType<OptionComponentTypes.item[]>, default: () => [] },
    prop         : { type: Object as PropType<OptionComponentTypes.PropConfig> },
    badgeStyle   : { type: Object as PropType<CSSProperties> },
    badgeType    : badgeProps.type,
    badgeMax     : badgeProps.max,
}

export const sdRadioGroupProps = {
    ...radioGroupProps,
    // -------------------------------
    ...extraProps,
}

export const sdRadioGroupEmits = radioGroupEmits

export const sdRadioGroupOmitKeys = [
    'modelValue',
    // ---------------------
    ...Object.keys(extraProps),
]

export type SdRadioGroupProps = ExtractPublicPropTypes<typeof sdRadioGroupProps>
