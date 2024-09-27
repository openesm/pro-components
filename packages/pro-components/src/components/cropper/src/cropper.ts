import type { PropType, ExtractPublicPropTypes, CSSProperties } from 'vue'
import type Cropper  from 'cropperjs'
import type _Cropper from './cropper.vue'

export const sdCropperProps = {
    src              : { type: String , default: ''                }, // 裁剪图片地址
    circle           : { type: Boolean, default: false             }, // 裁剪圆形图片
    width            : { type: Number, default: 160 * 5            }, // 容器宽度
    height           : { type: Number, default: 90 * 5             }, // 容器高度
    outputType       : { type: String                              }, // 输出裁剪图片类型
    autoCrop         : { type: Boolean, default: true              }, // 自动裁剪
    aspectRatio      : { type: Number                              }, // 裁剪比例
    outputConfig     : { type: Object as PropType<Cropper.GetCroppedCanvasOptions> }, // 输出裁剪后的图片配置
    cropperConfig    : { type: Object as PropType<Cropper.Options> }, // 裁剪配置
    showTools        : { type: Boolean, default: false             }, // 显示工具区域
    showChooseFile   : { type: Boolean, default: false             }, // 显示选择文件
    showPreview      : { type: Boolean, default: false             }, // 是否显示预览区域
    previewTitle     : { type: String , default: '裁剪预览'        }, // 自定义预览标题
    previewTitleStyle: { type: Object as PropType<CSSProperties>   }, // 自定义预览标题样式
    previewSizes     : { type: Array as PropType<number[]>, default: () => [] },
}

export const sdCropperEmits = [
    'error',
    'cropped',           // 裁剪结束
    'cropped-error',     // 裁剪失败
    'choose-file-click', // 选择文件点击
]

export type SdCropperProps    = ExtractPublicPropTypes<typeof sdCropperProps>
export type SdCropperInstance = InstanceType<typeof _Cropper>
