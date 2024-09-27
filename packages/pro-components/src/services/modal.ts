/**
 * v24.03.17
 * 方法调用弹窗
 */
import type { ComponentPublicInstance, VNode } from 'vue'
import type { SdDialogProps } from '../components/dialog'
import type { SdDrawerProps } from '../components/drawer'

import { createVNode, render  } from 'vue'
import { isFunction, defaults } from 'lodash-es'
import { SdDialog   } from '../components/dialog'
import { SdDrawer   } from '../components/drawer'

interface ExtraOptions {
    appContext?: any
    appendTo  ?: HTMLElement | (() => HTMLElement)
}

type ModalInstance = ComponentPublicInstance<{ visible: boolean; submitting: boolean }>

type RenderContentType  = string | VNode | null | undefined
type RenderMethodReturn = RenderContentType | RenderContentType[]
interface DialogOptions extends SdDialogProps, CompoentEvent {
    slots            ?: Record<string, () => RenderMethodReturn>
    render           ?: () => RenderMethodReturn
    renderHeader     ?: () => RenderMethodReturn
    renderHeaderExtra?: () => RenderMethodReturn
    renderExtra      ?: () => RenderMethodReturn
    renderFooter     ?: () => RenderMethodReturn
}

interface DrawerOptions extends SdDrawerProps, CompoentEvent {
    slots            ?: Record<string, () => RenderMethodReturn>
    render           ?: () => RenderMethodReturn
    renderTitle      ?: () => RenderMethodReturn
    renderHeaderExtra?: () => RenderMethodReturn
    renderFooter     ?: () => RenderMethodReturn
}

type CompoentEvent = {
    onOpen    ?: () => void
    onOpened  ?: () => void
    onClose   ?: () => void
    onClosed  ?: () => void
    onCancel  ?: () => void
    onConfirm ?: () => void
    onScroll  ?: (params: { scrollTop: number; scrollLeft: number }) => void
}

export function showDialog(options: DialogOptions, extra_opts?: ExtraOptions) {
    const slots = defaults({
        'default'     : options.render,
        'header'      : options.renderHeader,
        'header-extra': options.renderHeaderExtra,
        'extra'       : options.renderExtra,
        'footer'      : options.renderFooter,
    }, options.slots)

    const props = { ...options }
    Object.keys(props).forEach((k) => {
        if (k === 'slots' || k.startsWith('render')) {
            Reflect.deleteProperty(props, k)
        }
    })

    return _showModal(createVNode(SdDialog, props, slots), extra_opts)
}

export function showDrawer(options: DrawerOptions, extra_opts?: ExtraOptions) {
    const slots = defaults({
        'default'     : options.render,
        'title'       : options.renderTitle,
        'header-extra': options.renderHeaderExtra,
        'footer'      : options.renderFooter,
    }, options.slots)

    const props = { ...options }
    Object.keys(props).forEach((k) => {
        if (k === 'slots' || k.startsWith('render')) {
            Reflect.deleteProperty(props, k)
        }
    })

    return _showModal(createVNode(SdDrawer, props, slots), extra_opts)
}

function _showModal(modal_vnode: VNode, extra_opts?: ExtraOptions) {
    // 取得要插入的目标容器
    const target_container = getTargetContainer()

    // 每次渲染容器都是一个新的实例
    const container = document.createElement('div')

    /**
     * 通过 createVNode 创建的组件 appContext 为空，需要手动关联
     * - 如不关联 appContext, 则无法通过使用 resolveComponent 查找到全局组件
     */
    const appContext = extra_opts?.appContext
    if (appContext) {
        modal_vnode.appContext = appContext
    }

    // 将虚拟节点渲染到实际 DOM 元素中
    render(modal_vnode, container)

    // 支持多次调用
    if (target_container && container.firstChild) {
        target_container.appendChild(container.firstChild)
    }

    // 取得组件代理
    const $modal = modal_vnode.component?.proxy  as ModalInstance

    /**
     * 显示弹窗
     * - createVNode 使用 modelValue: true 不会触发 open 事件
     * - 通过取得组件实例，设置响应值解决此类问题
     */
    $modal.visible = true

    // 关闭弹窗
    function close() {
        $modal.visible = false
    }

    return { $modal, close }
}

// 取得插入的容器元素对象
function getTargetContainer(extra_opts?: ExtraOptions): HTMLElement {
    const appendTo = extra_opts?.appendTo
    if ( !appendTo ) return document.body

    return isFunction(appendTo) ? appendTo() : appendTo
}
