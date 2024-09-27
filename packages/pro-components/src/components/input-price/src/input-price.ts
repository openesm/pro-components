import type { ExtractPublicPropTypes } from 'vue'

import { inputProps, inputEmits } from 'element-plus'

const extraProps = {
    symbol   : { type: String , default: '¥' }, // 金额前缀符号
    max      : { type: Number                }, // 最大金额
    precision: { type: Number , default: 2   }, // 数值精度
}

export const sdInputPriceProps = {
    ...inputProps,
    // ---------------------------------------------------
    modelValue : { type: Number },
    placeholder: { type: String , default: '请输入' },
    clearable  : { type: Boolean, default: true     },
    // ---------------------------------------------------
    ...extraProps,
}

export const sdInputPriceEmits = {
    ...inputEmits,
    'update:modelValue': (_value: number) => true,
}

export const sdInputPriceOmitKeys = [...Object.keys(extraProps)]

export type SdInputPriceProps = ExtractPublicPropTypes<typeof sdInputPriceProps>
