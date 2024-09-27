import type { ExtractPublicPropTypes, PropType } from 'vue'
import type { DatePickType } from 'element-plus'

import { timePickerDefaultProps } from 'element-plus'

const extraProps = {
    width: { type: [String, Number] },
}
// ------------------------------------------------------------------

export const sdDatePickerProps = {
    ...timePickerDefaultProps,
    type            : { type: String as PropType<DatePickType>, default: 'date' },
    // 以下属性重置为 undefined , 内部含有预设，不为 undefined 时，props 传入优先级最高
    shortcuts       : { type: Array  },
    startPlaceholder: { type: String },
    endPlaceholder  : { type: String },
    rangeSeparator  : { type: String },
    placeholder     : { type: String },
    format          : { type: String },
    valueFormat     : { type: String },
    // ------------------------------------------------------------------
    ...extraProps,
}

export const sdDatePickerEmits = [
    'update:modelValue',
    'change',
    'focus',
    'blur',
    'calendar-change',
    'panel-change',
    'visible-change',
]

export const sdDatePickerOmitKeys = [
    'modelValue',
    // -------------
    ...Object.keys(extraProps),
]

export type SdDatePickerProps = ExtractPublicPropTypes<typeof sdDatePickerProps>
