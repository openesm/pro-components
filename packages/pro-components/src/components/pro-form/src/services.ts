/**
 * v24.10.12
 * 显示表单弹窗
 */
import type { StyleValue, ComponentPublicInstance, CSSProperties, VNode } from 'vue'
import type { SdDialogProps                     } from '../../dialog'
import type { SdDrawerProps                     } from '../../drawer'
import type { SdProFormProps                    } from './pro-form'
import type { SdProFormDefine, SdProFormContext } from './types'

import { createVNode, render } from 'vue'
import { isFunction, defaults, pick, isString } from 'lodash-es'
import { defineProFormSchema } from './helper'
import { globalConfig } from '../../../config'
import { SdDialog     } from '../../dialog'
import { SdDrawer     } from '../../drawer'
import ProForm from './pro-form.vue'

interface Options<T = Record<string, any>> {
    title        ?: string
    titleStyle   ?: CSSProperties
    width        ?: string | number
    height       ?: string | number
    maxHeight    ?: string | number
    modalConfig  ?: Partial<SdDialogProps | SdDrawerProps> & { style?: StyleValue }
    modalSlots   ?: Record<string, () => RenderMethodReturn>
    onOpen       ?: (params: { $proForm: SdProFormContext }) => void
    onOpened     ?: (params: { $proForm: SdProFormContext }) => void
    onClose      ?: (params: { $proForm: SdProFormContext }) => void
    onClosed     ?: () => void
    onCancel     ?: (params: { $proForm: SdProFormContext }) => void
    onConfirm    ?: (params: { $proForm: SdProFormContext }) => void
    onScroll     ?: (params: { $proForm: SdProFormContext }) => void
    // ------------------------------------------------------------------
    labelWidth   ?: number | string
    labelPosition?: 'top' | 'right' | 'left'
    labelSuffix  ?: string
    model        ?: OutputModelType<T>
    schema       ?: string | SdProFormDefine.SchemaConfig[]
    schemaConfig ?: Record<string, SdProFormDefine.SchemaConfig>
    formConfig   ?: Partial<SdProFormProps> & { style?: StyleValue }
    fieldsConfig ?: SdProFormDefine.FieldsConifg
    rulesConfig  ?: SdProFormDefine.RulesConfig
    submit       ?: (model: OutputModelType<T>, params: { close: () => void; $proForm: SdProFormContext }) => boolean | Promise<boolean>
    formSlots    ?: Record<string, Function>
}

interface ExtraOptions {
    appContext?: any
    appendTo  ?: HTMLElement | (() => HTMLElement)
}

type OutputModelType<T> = T extends Object ? T & { [k: string]: any } : Record<string, any>
type ModalType          = 'dialog' | 'drawer'
type ModalInstance      = ComponentPublicInstance<{ visible: boolean; submitting: boolean }>

type RenderContentType  = string | VNode | null | undefined
type RenderMethodReturn = RenderContentType | RenderContentType[]
interface DialogOptions<T = Record<string, any>> extends Options<T> {
    onOpenAutoFocus  ?: (params: { $proForm: SdProFormContext }) => void
    onCloseAutoFocus ?: (params: { $proForm: SdProFormContext }) => void
    renderHeader     ?: () => RenderMethodReturn
    renderHeaderExtra?: () => RenderMethodReturn
    renderExtra      ?: () => RenderMethodReturn
    renderFooter     ?: () => RenderMethodReturn
}
export function showFormDialog<T>(options: DialogOptions<T>, extra_opts?: ExtraOptions) {
    return _showModal('dialog', options, extra_opts)
}

interface DrawerOptions<T = Record<string, any>> extends Options<T> {
    renderTitle      ?: () => RenderMethodReturn
    renderHeaderExtra?: () => RenderMethodReturn
    renderFooter     ?: () => RenderMethodReturn
}
export function showFormDrawer<T>(options: DrawerOptions<T>, extra_opts?: ExtraOptions) {
    return _showModal('drawer', options, extra_opts)
}

function _showModal(type: ModalType, options: DialogOptions<any> | DrawerOptions<any>, extra_opts?: ExtraOptions) {
    // 取得要插入的目标容器
    const target_container = getTargetContainer()

    // 每次渲染容器都是一个新的实例
    const container = document.createElement('div')

    // 创建表单组件
    const form_props    = getFormProps({ ...options, onConfirm })
    const form_vnode    = createVNode(ProForm, form_props, options.formSlots)
    const getProFormCtx = () => { return form_vnode.component?.exposed as SdProFormContext }

    // 创建模态组件
    const Modal       = type === 'drawer' ? SdDrawer : SdDialog
    const modal_props = getModalProps(type, { ...options, onConfirm, onClosed }, getProFormCtx)
    const modal_slots = { ...getModalSlots(type, options), default: () => form_vnode }
    const modal_vnode = createVNode(Modal, modal_props, modal_slots)

    /**
     * 通过 createVNode 创建的组件 appContext 为空，需要手动关联
     * - 如不关联 appContext, 则无法通过使用 resolveComponent 查找到全局组件
     */
    const appContext = extra_opts?.appContext || globalConfig.app?._context
    if (appContext) {
        form_vnode.appContext  = appContext
        modal_vnode.appContext = appContext
    }

    // 将虚拟节点渲染到实际 DOM 元素中
    render(modal_vnode, container)

    // 支持多次调用
    if (target_container && container.firstChild) {
        target_container.appendChild(container.firstChild)
    }

    // 取得组件代理
    const $modal = modal_vnode.component?.proxy as ModalInstance

    /**
     * 显示弹窗
     * - createVNode 使用 modelValue: true 不会触发 open 事件
     * - 通过取得组件实例，设置响应值解决此类问题
     */
    $modal.visible = true

    // 处理模态窗关闭清理元素
    function onClosed() {
        if (isFunction(options.onClosed)) options.onClosed()
        render(null, container)
    }

    // 监听模态窗确认事件
    async function onConfirm() {
        const $proForm = form_vnode.component?.exposed as SdProFormContext
        if ( !$proForm ) return

        // 设置为提交中状态
        if ($modal.submitting) return
        $modal.submitting = true

        // 检查组件是否提供校验函数
        const valid = await $proForm.validate()
        if ( !valid ) {
            $modal.submitting = false
            return
        }

        // 触发传入的 submit 函数
        if (isFunction(options.submit)) {
            const model    = $proForm.getModel()
            const is_close = await options.submit(model, { close, $proForm })
            $modal.visible    = !is_close
            $modal.submitting = false
            return
        }

        // 关闭弹窗并设置为未提交中状态
        $modal.visible    = false
        $modal.submitting = false
    }

    // 关闭弹窗
    function close() {
        $modal.visible = false
    }

    return { $modal, close, getProFormCtx  }
}

// 取得表单组件配置
function getFormProps(options: Options) {
    const schema = isString(options.schema)
        ? defineProFormSchema(options.schema, options.schemaConfig)
        : options.schema

    const props = {
        ...defaults({
            labelWidth   : options.labelWidth || 'auto',
            labelPosition: options.labelPosition,
            labelSuffix  : options.labelSuffix,
            model        : options.model,
            schema       ,
            fieldsConfig : options.fieldsConfig,
            rulesConfig  : options.rulesConfig,
        }, options.formConfig),
    }

    // 处理表单回车提交事件
    if ('onConfirm' in options && isFunction(options.onConfirm)) {
        (props as any).onSubmit = options.onConfirm
    }

    return props
}

// 默认弹窗公用事件
const EVENT_NAMES = [
    'onOpen',
    'onOpened',
    'onClose',
    'onClosed',
    'onCancel',
    'onConfirm',
    'onScroll',
]
// dialog 扩展事件
const DIALOG_EXTRA_EVENT_NAMES = ['onOpenAutoFocus', 'onCloseAutoFocus']
function getModalProps(type: ModalType, options: Options, getProFormCtx: () => SdProFormContext) {
    // 取出原有传入的监听事件
    const event_names = EVENT_NAMES.concat(type === 'dialog' ? DIALOG_EXTRA_EVENT_NAMES : [])
    const old_events  = pick(options, event_names)

    // 构造新的监听事件，并传入 $proForm 组件上下文
    // onClosed 事件, $proForm 会被销毁，故不处理
    const new_events = {} as Record<string, Function>
    Object.keys(old_events).forEach((k) => {
        const fn = (old_events as any)[k]
        if ( !isFunction(fn) || k === 'onClosed' ) return

        new_events[k] = () => { fn({ $proForm: getProFormCtx() }) }
    })

    const props: any = {
        ...defaults({
            title     : options.title,
            titleStyle: options.titleStyle,
            width     : options.width,
            showFooter: true,
        }, options.modalConfig),
        ...new_events,
    }

    // 补充特有属性
    if (type === 'dialog') {
        if ('height'    in options) props.height    = options.height
        if ('maxHeight' in options) props.maxHeight = options.maxHeight
    }

    return props
}

// 取得模态组件插槽函数
function getModalSlots(type: ModalType, options: DialogOptions | DrawerOptions): Record<string, () => RenderMethodReturn> {
    if (type === 'dialog') {
        const opts = options as DialogOptions
        return defaults({
            'header'      : opts.renderHeader,
            'header-extra': opts.renderHeaderExtra,
            'extra'       : opts.renderExtra,
            'footer'      : opts.renderFooter,
        }, opts.modalSlots)
    } else {
        const opts = options as DrawerOptions
        return defaults({
            'title'       : opts.renderTitle,
            'header-extra': opts.renderHeaderExtra,
            'footer'      : opts.renderFooter,
        }, opts.modalSlots)
    }
}

// 取得插入的容器元素对象
function getTargetContainer(extra_opts?: ExtraOptions): HTMLElement {
    const appendTo = extra_opts?.appendTo
    if ( !appendTo ) return document.body

    return isFunction(appendTo) ? appendTo() : appendTo
}
