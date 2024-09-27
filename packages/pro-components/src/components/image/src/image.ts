import type { CSSProperties, ExtractPublicPropTypes, PropType } from 'vue'

import { imageProps, imageEmits } from 'element-plus'

const extraProps = {
    width               : { type: [Number, String] as PropType<string | number>                   }, // 宽度
    height              : { type: [Number, String] as PropType<string | number>                   }, // 高度
    minWidth            : { type: [Number, String] as PropType<string | number>                   }, // 最小宽度
    minHeight           : { type: [Number, String] as PropType<string | number>                   }, // 最小高度
    circle              : { type: Boolean                                       , default: false  }, // 显示圆形图片
    borderRadius        : { type: [Number, String] as PropType<string | number> , default: 4      }, // 圆角值
    disabledPreview     : { type: Boolean                                       , default: false  }, // 禁止预览
    placeholderStyle    : { type: Object as PropType<CSSProperties>                               }, // 预览图标自定义样式
    placeholderIconSize : { type: Number, default: 30                                             }, // 预览图标大小
    placeholderIconColor: { type: String, default: '#999'                                         }, // 预览图标颜色
    errorStyle          : { type: Object as PropType<CSSProperties>                               }, // 异常图标自定义样式
    errorIconSize       : { type: Number, default: 30                                             }, // 异常图标大小
    errorIconColor      : { type: String                                                          }, // 异常图标颜色
}

export const sdImageProps = {
    ...imageProps,
    // -------------------------------------------------------------------------------------------
    fit             : { ...imageProps.fit             , default: 'cover' }, // 图片渲染形式
    hideOnClickModal: { ...imageProps.hideOnClickModal, default: true    }, // 点击遮罩层可关闭 preview
    // -------------------------------------------------------------------------------------------
    ...extraProps,
}

export const sdImageEmits    = imageEmits
export const sdImageOmitKeys = [
    'previewSrcList',
    // -----------------------
    ...Object.keys(extraProps),
]

export type SdImageProps = ExtractPublicPropTypes<typeof sdImageProps>
