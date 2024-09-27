import type { ExtractPublicPropTypes } from 'vue'

export const sdWeekTimeSelectProps = {
    modelValue: { type: String, default: '' },
}

export const sdWeekTimeSelectEmits = [
    'update:modelValue',
    'change',
    'error',
]

export type SdWeekTimeSelectProps = ExtractPublicPropTypes<typeof sdWeekTimeSelectProps>

