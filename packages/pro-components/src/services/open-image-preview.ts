import type { VNode } from 'vue'

import { createVNode, render } from 'vue'
import { ElImageViewer       } from 'element-plus'
import { isFunction          } from 'lodash-es'
import { plusModalCount, minusModalCount } from '../utils/modal'

interface ImagePreviewOptions {
    urlList            : string[]
    zIndex            ?: number
    initialIndex      ?: number     // default: 0
    infinite          ?: boolean    // default: true
    hideOnClickModal  ?: boolean
    closeOnPressEscape?: boolean    // default: true
    zoomRate          ?: number     // default: 1.2
    minScale          ?: number     // default: 0.2
    maxScale          ?: number     // default: 7
    crossorigin       ?: 'anonymous' | 'use-credentials' | ''
    onClose           ?: () => void
    onSwitch          ?: (index: number) => number
    onRotate          ?: (deg: number) => number
}

// 打开图片预览
let container    : HTMLDivElement | undefined
let preview_vnode: VNode | undefined
let is_lock_route = false

export function openImagePreview(options: ImagePreviewOptions, lock_route = true) {
    if (preview_vnode) return
    is_lock_route = false
    if (lock_route) is_lock_route = true

    // 创建虚拟节点渲染到实际 DOM 元素中
    container     = document.createElement('div')
    preview_vnode = createVNode(ElImageViewer, {
        ...options,
        teleported: true,
        onClose,
    } as any)
    render(preview_vnode, container)

    // 渲染失败
    if (!container.firstChild) {
        container     = undefined
        preview_vnode = undefined
        is_lock_route = false
        return
    }

    // 支持多次调用
    document.body.appendChild(container.firstChild)

    is_lock_route && plusModalCount()
    function onClose() {
        if (is_lock_route) {
            is_lock_route = false
            minusModalCount()
        }

        if (isFunction(options.onClose)) options.onClose()
        if (container                  ) render(null, container)
        if (preview_vnode              ) preview_vnode = undefined
    }
}

// 切换指定下标预览图片
export function switchImagePreview(index: number) {
    preview_vnode && (preview_vnode.component?.exposed as any).setActiveItem(index)
}

// 关闭图片预览
export function closeImagePreview() {
    if (is_lock_route) {
        is_lock_route = false
        minusModalCount()
    }

    if (container    ) render(null, container)
    if (preview_vnode) preview_vnode = undefined
}
