import type { ExtractPublicPropTypes, PropType } from 'vue'


export const sdDateButtonGroupProps = {
    type    : { type: String as PropType<'day' | 'week' | 'month' | 'year'>, default: 'day' }, // 日期按钮类型
    disabled: { type: Boolean                                              , default: false }, // 禁用按钮
}

export const sdDateButtonGroupEmits = [
    'click',

    'prev_year',
    'curr_year',
    'next_year',

    'prev_month',
    'curr_month',
    'next_month',

    'prev_week',
    'curr_week',
    'next_week',

    'prev_day',
    'curr_day',
    'next_day',
]

export type SdDateButtonGroupProps = ExtractPublicPropTypes<typeof sdDateButtonGroupProps>
