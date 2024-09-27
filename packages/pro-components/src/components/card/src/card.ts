import type { ExtractPublicPropTypes, PropType, CSSProperties, Component } from 'vue'

type ActionItem = {
    key  : string
    icon?: Component
    text?: string
}

export const sdCardProps = {
    title         : { type: String },
    subTitle      : { type: String },
    tooltip       : { type: String },
    extra         : { type: String },
    shadow        : { type: String as PropType<'never' | 'hover' | 'always'> , default: 'never' },
    headerClass   : { type: String , default: '' },
    headerStyle   : { type: Object as PropType<CSSProperties>  },
    headerBordered: { type: Boolean, default: false },
    bordered      : { type: Boolean, default: false },
    ghost         : { type: Boolean, default: false },
    gutter        : { type: [Number, Array] as PropType<number | number[]> },
    group         : { type: Boolean, default: false },

    colSpan      : { type: [String, Number] as PropType<string | number>, default: 24 },
    split        : { type: String as PropType<'horizontal' | 'vertical'> },
    direction    : { type: String as PropType<'row' | 'column'> },
    wrap         : { type: Boolean, default: false },
    contentCenter: { type: Boolean, default: false },

    height   : { type: [String, Number] as PropType<string | number>   },
    maxHeight: { type: [String, Number] as PropType<string | number>   },
    bodyClass: { type: String , default: '' },
    bodyStyle: { type: Object as PropType<CSSProperties>, default: () => ({}) },

    showEmpty: { type: Boolean, default: false },
    emptyText: { type: String , default: '暂无数据' },

    actionsBordered: { type: Boolean, default: true },
    actions        : { type: Array as PropType<ActionItem[]>, default: () => [] },
}

export const sdCardEmits = ['action']

export type SdCardProps = ExtractPublicPropTypes<typeof sdCardProps>
