import type { ExtractPublicPropTypes, PropType, CSSProperties } from 'vue'
import type { ScrollbarProps } from 'element-plus'

import { dialogProps, dialogEmits } from 'element-plus'

const extraProps = {
    height               : { type: [String, Number] as PropType<string | number>, default: 'auto' }, // 内容高度：设置后内容超出指定高度则滚动显示
    maxHeight            : { type: [String, Number] as PropType<string | number>                  }, // 最大内容高度
    closeIconSize        : { type: Number, default: 18                                            }, // 关闭图标大小
    closeIconColor       : { type: String                                                         }, // 关闭图片颜色
    titleStyle           : { type: Object as PropType<CSSProperties>                              }, // 标题自定义样式
    headerStyle          : { type: Object as PropType<CSSProperties>                              }, // header区域自定义样式
    bodyStyle            : { type: Object as PropType<CSSProperties>                              }, // body区域自定义样式
    footerStyle          : { type: Object as PropType<CSSProperties>                              }, // footer区域自定义样式
    submitting           : { type: Boolean                                                        }, // 是否提交中
    showFooter           : { type: Boolean, default: true                                         }, // 显示弹窗底部
    showCancelButton     : { type: Boolean, default: true                                         }, // 显示取消按钮
    disabledCancelButton : { type: Boolean, default: false                                        }, // 显示取消按钮
    cancelButtonText     : { type: String , default: '取消'                                       }, // 取消按钮文字
    showConfirmButton    : { type: Boolean, default: true                                         }, // 显示确认按钮
    disabledConfirmButton: { type: Boolean, default: false                                        }, // 禁用确认按钮
    confirmButtonText    : { type: String , default: '确认'                                       }, // 确认按钮文字
    /** deprecated */
    scrollbarConfig      : { type: Object as PropType<Partial<ScrollbarProps>>                    }, // 滚动配置
    scrollbarProps       : { type: Object as PropType<Partial<ScrollbarProps>>                    }, // 滚动组件属性配置（TODO）
}
export const sdDialogProps = {
    ...dialogProps,
    // ------------------------------------------------------------------------------------------
    alignCenter   : { ...dialogProps.alignCenter   , default: true  }, // 弹窗居中显示
    draggable     : { ...dialogProps.draggable     , default: true  }, // 可否拖拽
    appendToBody  : { ...dialogProps.appendToBody  , default: true  }, // 渲染弹窗至 body 中
    destroyOnClose: { ...dialogProps.destroyOnClose, default: true  }, // 弹窗关闭时，销毁内部元素
    // ------------------------------------------------------------------------------------------
    ...extraProps,
}

export const sdDialogEmits = {
    ...dialogEmits,
    // -------------------------
    cancel : null,
    confirm: null,
    scroll : null,
}

export const sdDialogOmitKeys = [
    'update:modelValue',
    'title',
    'fullscreen',
    'draggable',
    'width',
    // --------------------------
    ...Object.keys(extraProps),
]

export type SdDialogProps = ExtractPublicPropTypes<typeof sdDialogProps>
