import type { ExtractPublicPropTypes, CSSProperties, PropType } from 'vue'
import type { ScrollbarProps } from 'element-plus'

import { drawerProps, drawerEmits } from 'element-plus'

const extraProps = {
    width                : { ...drawerProps.size                               }, // drawer 宽度
    background           : { type: String                                      }, // 内容区域背景颜色
    loading              : { type: Boolean, default: false                     }, // 内容加载中
    closeIconSize        : { type: Number, default: 18                         }, // 关闭图标大小
    closeIconColor       : { type: String                                      }, // 关闭图标颜色
    showHeader           : { ...drawerProps.withHeader, default: true          }, // 显示 drawer 顶部内容
    showFooter           : { type: Boolean, default: false                     }, // 显示弹窗底部
    headerStyle          : { type: Object as PropType<CSSProperties>           }, // header区域自定义样式
    titleStyle           : { type: Object as PropType<CSSProperties>           }, // 标题自定义样式
    bodyClass            : { type: String , default: ''                        }, // body区域自定义样式
    bodyStyle            : { type: Object as PropType<CSSProperties>           }, // header区域自定义样式
    footerStyle          : { type: Object as PropType<CSSProperties>           },
    bodyLockScroll       : { type: Boolean, default: false                     }, // 内容区域滚动锁定
    showCancelButton     : { type: Boolean, default: true                      }, // 显示取消按钮
    disabledCancelButton : { type: Boolean, default: false                     }, // 显示取消按钮
    cancelButtonText     : { type: String , default: '取消'                    }, // 取消按钮文字
    showConfirmButton    : { type: Boolean, default: true                      }, // 显示确认按钮
    disabledConfirmButton: { type: Boolean, default: false                     }, // 禁用确认按钮
    confirmButtonText    : { type: String , default: '确认'                    }, // 确认按钮文字
    submitting           : { type: Boolean, default: false                     }, // 提交中
    scrollbarConfig      : { type: Object as PropType<Partial<ScrollbarProps>> },
    scrollbarProps       : { type: Object as PropType<Partial<ScrollbarProps>> }, // 滚动组件属性配置（TODO）
}

export const sdDrawerProps = {
    ...drawerProps,
    // ----------------------------------------
    destroyOnClose: { type: Boolean, default: true }, // 销毁内部元素
    appendToBody  : { type: Boolean, default: true }, // 插入至 body 中
    // ----------------------------------------
    ...extraProps,
}

export const sdDrawerEmits = {
    ...drawerEmits,
    cancel : null,
    confirm: null,
    scroll : null,
}

export const sdDrawerOmitKeys = [
    'update:modelValue',
    'size',
    'withHeader',
    // --------------------
    ...Object.keys(extraProps),
]

export type SdDrawerProps = ExtractPublicPropTypes<typeof sdDrawerProps>
