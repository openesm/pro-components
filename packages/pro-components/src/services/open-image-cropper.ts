/**
 * 图片裁剪方法调用
 * v24.04.29
 */
import type { SdCropperProps } from '../components/cropper/src/cropper'

import { SdCropper } from '../components/cropper'
import { SdDialog  } from '../components/dialog'

import { createVNode, render, ref } from 'vue'
import { pick, omit } from 'lodash-es'
import { showAlert  } from './message-box'

type OpenImageCropperDialogOptions = { title?: string; confirmButtonText?: string; cancelButtonText?: string }
type OpenImageCropperOptions       = SdCropperProps & OpenImageCropperDialogOptions
type OpenImageCropperReturn        = Promise<{ confirm: boolean; src?: string; file?: File | Blob }>

// 弹窗属性默认配置
const DIALOG_DEFAULT_OPTIONS = {
    title            : '裁剪图片',
    confirmButtonText: '完成裁剪',
    cancelButtonText : '取消',
}
const DIALOG_KEYS = Object.keys(DIALOG_DEFAULT_OPTIONS)

export function openImageCropper(options: OpenImageCropperOptions): OpenImageCropperReturn {
    return new Promise((resolve) => {
        // 裁剪图片回调参数
        let cropped_src  = ''
        let cropped_file = null as null | File | Blob
        const modal_ref = ref()

        // 创建裁剪组件
        const cropper_vnode = createVNode(SdCropper, {
            showTools  : true,                // 默认显示工具按钮
            showPreview: true,                // 默认显示预览
            ...omit(options, ...DIALOG_KEYS), // 裁剪组件属性配置
            onCropped,                        // 监听裁剪完成回调
        })

        // 创建弹窗组件
        const modal_vnode = createVNode(SdDialog, {
            ref                  : modal_ref,
            ...DIALOG_DEFAULT_OPTIONS,          // 默认弹窗属性配置
            ...pick(options, ...DIALOG_KEYS),   // 外部弹窗属性配置
            width                : 'auto',      // 弹窗宽度
            closeOnClickModal    : false,       // 不允许点击模态框关闭
            closeOnPressEscape   : false,       // 不允许 ESC 快捷键关闭
            disabledConfirmButton: true,        // 默认禁用确认按钮
            onOpened,
            onClose,                            // 监听弹窗关闭事件回调
            onClosed,                           // 监听弹窗关闭动画结束事件回调（清理 DOM）
            onConfirm,                          // 监听弹窗确认按钮点击事件
        }, { default: () => cropper_vnode })

        // 渲染组件
        const container   = document.createElement('div')
        render(modal_vnode, container)

        // 支持多次调用而非覆盖
        if (container.firstChild) document.body.appendChild(container.firstChild)

        // 取得组件代理
        const $modal = modal_vnode.component?.proxy as any
        /**
         * 显示弹窗
         * - createVNode 使用 modelValue: true 不会触发 open 事件
         * - 通过取得组件实例，设置响应值解决此类问题
         */
        $modal.visible = true

        // 已裁剪图片回调
        function onCropped(params: { src: string; file: File | Blob }) {
            cropped_src  = params.src
            cropped_file = params.file
        }

        // 弹窗打开动画结束时
        async function onOpened() {
            // 取得组件代理
            const cropper_exposed = cropper_vnode.component?.exposed as any
            if ( !cropper_exposed ) return

            // 取得裁剪器实例
            const $cropper = cropper_exposed.getCropperInstance()
            if ( !$cropper || !$cropper.image ) {
                await showAlert('请选择正确的图片进行裁剪')
                $modal.visible = false
                resolve({ confirm: false })
            } else {
                $modal.setOption({ disabledConfirmButton: false })
            }
        }

        // 弹窗关闭
        function onClose() { resolve({ confirm: false }) }

        // 弹窗关闭动画结束，清理 DOM
        function onClosed() {
            render(null, container)
        }

        // 点击弹窗确认事件回调
        async function onConfirm() {
            if (!cropped_src || !cropped_file) return

            $modal.visible = false
            resolve({ confirm: true, src: cropped_src, file: cropped_file })
        }
    })
}

