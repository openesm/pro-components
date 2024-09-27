import type { ExtractPublicPropTypes, PropType, Component } from 'vue'
import type { ComponentSizes, OptionComponentTypes } from '../../../types'

import { tagProps, useTooltipContentProps } from 'element-plus'

const extraProps = {
    group  : { type: Boolean },
    options: { type: Array  as PropType<OptionComponentTypes.item[]>, default: () => []          },
    prop   : { type: Object as PropType<OptionComponentTypes.PropConfig> },
}

export const sdSelectProps = {
    modelValue        : { type: [Array, String, Number, Boolean, Object], default: undefined },
    name              : String,
    id                : String,
    autocomplete      : { type: String, default: 'off' },
    automaticDropdown : Boolean,
    size              : { type: String as PropType<ComponentSizes> },
    effect            : { type: String as PropType<'light' | 'dark' | string>, default: 'light' },
    disabled          : Boolean,
    clearable         : Boolean,
    filterable        : { type: Boolean, default: true },
    allowCreate       : Boolean,
    loading           : Boolean,
    popperClass       : { type: String, default: '' },
    remote            : Boolean,
    loadingText       : String,
    noMatchText       : String,
    noDataText        : String,
    remoteMethod      : Function,
    filterMethod      : Function,
    multiple          : Boolean,
    multipleLimit     : { type: Number, default: 0 },
    placeholder       : { type: String, default: '请选择' },
    defaultFirstOption: Boolean,
    reserveKeyword    : { type: Boolean, default: true },
    valueKey          : { type: String, default: 'value' },
    collapseTags      : Boolean,
    popperAppendToBody: { type: Boolean, default: undefined },
    teleported        : useTooltipContentProps.teleported,
    persistent        : { type: Boolean, default: true },
    clearIcon         : { type: [String, Object] as PropType<string | Component> },
    fitInputWidth     : { type: Boolean, default: false },
    suffixIcon        : { type: [String, Object] as PropType<string | Component> },
    tagType           : { ...tagProps.type, default: 'info' },
    // -------------------------------------------------------------------------------------
    ...extraProps,
}

export const sdSelectEmits = [
    'update:modelValue',
    'change',
    'remove-tag',
    'clear',
    'visible-change',
    'focus',
    'blur',
]

export const sdSelectOmitKeys = [
    'modelValue',
    // ---------------------
    ...Object.keys(extraProps),
]

export type SelectProps = ExtractPublicPropTypes<typeof sdSelectProps>
