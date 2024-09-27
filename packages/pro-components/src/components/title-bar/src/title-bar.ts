import type { ExtractPublicPropTypes, PropType, StyleValue, Component } from 'vue'
import type { ComponentTypes } from '../../../types'

export const sdTitleBarProps = {
    type     : { type: String as PropType<ComponentTypes>, default: 'primary' },
    icon     : { type: Object as PropType<Component> },
    iconColor: { type: String                        },
    iconSize : { type: Number                        },
    title    : { type: String, default: ''           },
    subTitle : { type: String, default: ''           },
    desc     : { type: String, default: ''           },
    arrow    : { type: Boolean, default: false       },
    headClass: { type: String },
    headStyle: { type: [String, Object] as PropType<StyleValue> },
    bodyClass: { type: String },
    bodyStyle: { type: [String, Object] as PropType<StyleValue> },
}

export const sdTieleBarEmits = [
    'click-header',
]

export type SdTitleBarProps = ExtractPublicPropTypes<typeof sdTitleBarProps>
