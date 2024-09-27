import type { ExtractPublicPropTypes, PropType } from 'vue'
import type { OptionComponentTypes } from '../../../types'

import { tabsProps, tabsEmits } from 'element-plus'

const extraProps = {
    options: { type: Array  as PropType<OptionComponentTypes.item[]>, default: () => [] }, // 选项列表
    prop   : { type: Object as PropType<OptionComponentTypes.PropConfig> },
}
export const sdTabsProps = {
    ...tabsProps,
    // -----------------------
    ...extraProps,
}

export const sdTabsEmits    = {
    ...tabsEmits,
    'tab-click': tabsEmits.tabClick,
}

export const sdTabsOmitKeys = ['modelValue', ...Object.keys(extraProps)]

export type SdTabsProps = ExtractPublicPropTypes<typeof sdTabsProps>
