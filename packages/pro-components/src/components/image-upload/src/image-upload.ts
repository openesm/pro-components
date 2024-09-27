import type { ExtractPublicPropTypes, PropType, CSSProperties } from 'vue'
import type { ImageProps     } from 'element-plus'
import type { SdCropperProps } from '../../cropper/src/cropper'

import { uploadProps } from 'element-plus'

const extraPorps = {
    modelValue         : { type: String             , default: ''     }, // 绑定值
    defaultValue       : { type: String             , default: ''     }, // 默认值 v23.08.10
    height             : { type: [Number, String]   , default: 140    }, // 高度
    width              : { type: [Number, String]   , default: 140    }, // 宽度
    progressWidth      : { type: Number             , default: 80     }, // 进度条宽度
    tip                : { type: String             , default: ''     }, // 底部上传提示语
    tipStyle           : { type: Object as PropType<CSSProperties>    }, // 底部上传提示语自定义样式
    placeholder        : { type: String             , default: ''     }, // 默认占位文本
    placeholderIconSize: { type: [Number, String]   , default: 20     }, // 默认占位图标大小
    placeholderStyle   : { type: Object as PropType<CSSProperties>    }, // 预览区域自定义样式
    circle             : { type: Boolean                              }, // 圆形
    showPreviewButton  : { type: Boolean            , default: true   }, // 显示预览按钮
    showDeleteButton   : { type: Boolean            , default: true   }, // 显示删除按钮
    imageProps         : { type: Object as PropType<ImageProps>       }, // 预览图片裁剪弹窗功能配置
    enableCropper      : { type: Boolean            , default: false  }, // 开启图片裁剪功能
    imageCropperProps  : { type: Object as PropType<SdCropperProps>   }, // 图片裁剪弹窗功能配置
    limitSize          : { type: Number                               }, // 文件大小校验
    onOverflowSize     : { type: Function                             }, // 文件超出大小限制回调
    api                : { type: Function           , default: null   }, // 请求函数
    transform          : { type: Function           , default: null   }, // 异构数据转换
    autoUpload         : { type: Boolean            , default: true   }, // 是否自动上传
    onSuccess          : { type: Function                             }, // 上传成功回调
    onError            : { type: Function                             }, // 上传失败回调
    beforeUpload       : { type: Function                             }, // 上传前回调
    name               : { type: String             , default: 'data' }, // 上传文件名称标识
    data               : { ...uploadProps.data                        }, // 补充上传请求参数
}
export const sdImageUploadProps = {
    // --- 覆盖原有属性默认值 ---------------------------------------------------------
    disabled: uploadProps.disabled,
    drag    : uploadProps.drag,
    // ---- 扩展组件属性 --------------------------------------------------------------
    ...extraPorps,
} as const

export const sdImageUploadEmits = [
    'update:modelValue',
    'change',
]

export const sdImageUploadOmitKeys = [
    'disabled',
    ...Object.keys(extraPorps),
]

export type SdImageUploadProps = ExtractPublicPropTypes<typeof sdImageUploadProps>
