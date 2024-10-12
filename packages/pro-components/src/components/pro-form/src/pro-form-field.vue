<script lang="ts">
import type { PropType, VNode } from 'vue'
import type { SdProFormDefine } from './types'

import {
    defineComponent, inject, h, resolveComponent, ref, reactive,
    onBeforeMount, onUnmounted, mergeProps, computed, isVNode,
} from 'vue'
import { ElCol, ElFormItem, ElTooltip, ElIcon } from 'element-plus'
import { Warning } from '@element-plus/icons-vue'
import { isNumber, isBoolean, isArray, isObject, get, set, isFunction, isUndefined, isString, uniqueId } from 'lodash-es'
import { wrapSlots, wrapEventMethod, isHTMLTag, getRules } from './utils'
import { sdProFormKey } from './token'
import { globalConfig } from './config'

type RenterContent = SdProFormDefine.RenderContentType | (SdProFormDefine.RenderContentType)[]
const ProFormField = defineComponent({
    name : 'SdProFormField',
    props: {
        config: { type: Object as PropType<SdProFormDefine.SchemaConfig>, required: true },
        isNest: { type: Boolean, default: false },
    },
    setup(props, ctx) {
        const $proForm    = inject(sdProFormKey)!
        const state       = reactive({ config: props.config })
        const colRef      = ref()
        const formItemRef = ref()
        const fieldRef    = ref()

        // 是否隐藏
        const is_hidden$ = computed(() => {
            const hidden = state.config.hidden
            if (isFunction(hidden)) {
                return hidden(getMethodParams())
            } else {
                return !!hidden
            }
        })

        // 是否禁用
        const is_disabled$ = computed(() => {
            const disabled = state.config.disabled
            if (isFunction(disabled)) {
                return disabled(getMethodParams())
            } else {
                return disabled
            }
        })

        // 下拉选项
        const options$ = computed(() => {
            const options = state.config.options
            if (isFunction(options)) {
                return options(getMethodParams())
            } else {
                return options
            }
        })

        // 表单项标题
        const label$ = computed(() => {
            const label = state.config.label
            if (isFunction(label)) {
                return label(getMethodParams()) || ''
            } else {
                return label || ''
            }
        })

        // 受控组件占位符文本
        const placeholder$ = computed(() => {
            const { tag, key, placeholder } = state.config
            if (!key) return ''
            if (isFunction(placeholder)) return placeholder(getMethodParams())
            if (isString(placeholder)  ) return placeholder

            let prefix = '请输入'
            if (isString(tag))  {
                const type = globalConfig.component[tag]?.type
                if (type) {
                    const { inputPlaceholderPrefix, selectPlaceholderPrefix } = globalConfig
                    prefix = type === 'select' ? selectPlaceholderPrefix : inputPlaceholderPrefix
                }
            }
            return `${ prefix }${ label$.value }`
        })

        const required$ = computed(() => {
            const { required } = state.config
            if (isFunction(required)) {
                return required(getMethodParams())
            } else if (isBoolean(required)) {
                return required
            } else {
                return false
            }
        })

        // 组件校验规则
        const rules$ = computed(() => {
            const cb_params    = getMethodParams()
            const field_config = { ...state.config, required: required$.value, label: label$.value }
            const rules_config = $proForm.props.rulesConfig // 当前表单组件自定义校验规则自定义
            return getRules(field_config, cb_params, rules_config)
        })

        // 组件自定义样式
        const style$ = computed(() => {
            const { style, width } = state.config
            if ( !style && !width) return

            const css = mergeProps(!isUndefined(width) ? { width } : {}, style || {})
            return css
        })

        // 渲染空组件提示
        const renderEmptyField = () => {
            return h('div', `${ label$.value || '' }组件不存在`)
        }

        // 渲染文本展示组件
        const renderTextFeild = ({ $props }: SdProFormDefine.TagMethodParams) => {
            const style = { color: !$props.modelValue ? 'var(--el-text-color-placeholder)' : undefined }
            return h('div', { style }, $props.modelValue || $props.placeholder || '')
        }

        // 渲染子控件
        const renderContentChildren = (): null | VNode | (null | VNode)[] => {
            const { children, items } = state.config

            // 数据项渲染函数
            const renderItemFn = (item: SdProFormDefine.DataItem, child_vnode?: (VNode | null)[]) => {
                const vnode = resolveTagName(item.tag)
                if ( !isVNode(vnode) ) return null

                const slots = {} as Record<string, any>
                if (child_vnode && child_vnode.length) {
                    slots.default = () => child_vnode
                } else if (item.text) {
                    slots.default = () => item.text
                }

                return vnode ? h(vnode, { ...item.props, key: uniqueId('item') }, slots) : null
            }

            // 渲染数据控件子项, 深度为 2（非递归）
            if (items && (isFunction(items) || items.length)) {
                const render_items = isFunction(items) ? items(getMethodParams()) : items
                return render_items.filter(item => !!item.tag).map((item) => {
                    return renderItemFn(item, (item.children || []).map(cItem => renderItemFn(cItem)))
                })
            }

            // 递归组件
            if (children && children.length) {
                return children.map((o) => {
                    return h(ProFormField as any, {
                        config: o,
                        isNest: isNestFormItem(),
                        key   : uniqueId('child-field'),
                    })
                })
            }

            return null
        }

        // 渲染控件：插槽函数 =》渲染函数 =》无效组件
        const renderContent = (): RenterContent => {
            const { tag, id, key, props, slots, on, text } = state.config
            const params         = getMethodParams()
            const comp           = resolveTagName(tag)
            const children_vnode = renderContentChildren()
            const slot_default   = ctx.slots['default'] || $proForm.slots[key || id || '']

            // 未识别到组件、未提供默认渲染函数、无子组件则渲染空状态组件
            if (!comp && !slot_default && !children_vnode) return renderEmptyField()

            // 构造组件属性配置
            let comp_props: Record<string, any> = { ...(isObject(props) ? props : {}) }
            if (isFunction(props)            ) comp_props = props(params)
            if (isString(placeholder$.value) ) comp_props.placeholder = placeholder$.value // 占位符文本
            if (isBoolean(is_disabled$.value)) comp_props.disabled    = is_disabled$.value // 禁用状态
            if (isArray(options$.value)      ) comp_props.options     = options$.value     // 数据选项
            if (style$.value                 ) comp_props.style       = style$.value       // 控件样式

            if (key) { // 补充 v-model
                Object.assign(comp_props, bindModelValue())
            }

            if (Object.keys(on || {}).length) { // 处理事件监听
                Object.assign(comp_props, wrapEventMethod(on, params))
            }

            // 默认插槽
            if (isFunction(comp)       ) return comp({ $props: comp_props, ...params })         // 自定义渲染函数优先
            if (slot_default           ) return slot_default({ $props: comp_props, ...params }) // 默认插槽函数
            if (!comp && children_vnode) return children_vnode                                  // form-item 中渲染子项
            if (!comp                  ) return renderEmptyField()

            // 处理组件插槽
            const comp_slots = wrapSlots(slots, params)

            /**
             * 如组件未处理默认插槽，则显示配置的子项或文本节点
             *
             * v24.04.08
             * 有些组件（cascader）依赖 default 插槽，如不是重写，则不能提供 default 插槽函数
             * 否则显示异常
             */
            if ((children_vnode || text) && (!slots || !('default' in slots))) {
                comp_slots.default = () => children_vnode || text
            }

            return h(comp, comp_props, comp_slots)
        }

        // 渲染控件的区域
        const renderContentAround = (content: RenterContent) => {
            const params = getMethodParams()
            const conf   = state.config

            const initAroundRender = () => {
                const position: Record<'left' | 'right' | 'tip', any> = {
                    left : null,
                    right: null,
                    tip  : null,
                }
                if ( !conf ) return position

                Object.keys(position).forEach((key) => {
                    const k = key as 'left' | 'right' | 'tip'

                    // 渲染函数
                    if (k === 'tip' && typeof conf[k] === 'string') {
                        position[k] = h('div', { class: 'sd-pro-form-field__tip', style: conf.tipStyle }, conf[k] as string)
                        return
                    }

                    // 渲染函数
                    const render = conf[k]
                    if (isFunction(render)) {
                        position[k] = render(params)
                        return
                    }

                    // 字符串
                    if (isString(conf[k])) {
                        position[k] = conf[k]
                        return
                    }

                    // 自身组件插槽函数
                    if (ctx.slots[k]) {
                        position[k] = ctx.slots[k]!(params)
                        return
                    }

                    // 插槽函数
                    const extend_slot_name = conf.key ? `${ conf.key }__${ k }` : null
                    if (extend_slot_name && $proForm.slots[extend_slot_name]) {
                        position[k] = $proForm.slots[extend_slot_name]!(params)
                    }
                })

                return position
            }

            const { left, right, tip } = initAroundRender()
            if (!left && !right && !tip) return content

            return [
                h('div', {
                    class: 'sd-pro-form-field__content',
                    style: state.config.contentStyle,
                }, [left, content, right]),
                tip,
            ]
        }

        // 渲染表单项 - label、subLabel、labelHelp
        const renderFormItemLabelSlot = () => {
            const { subLabel, labelHelp } = state.config
            const labelSuffix = $proForm.props.labelSuffix
            if (!label$.value && !subLabel && !labelHelp) {
                return labelSuffix ? h('span') : null // 无 label 时不渲染后缀，返回 null 会默认后缀
            }

            const vnode = [] as (VNode | string)[]
            if (label$.value) vnode.push(h('span', label$.value))
            if (subLabel    ) vnode.push(h('span', { class: 'sd-pro-form-field__sublabel' }, subLabel))
            if (labelHelp   ) {
                const icon_vnode = h(ElIcon, { class: 'sd-pro-form-field__label-icon' }, () => h(Warning))
                vnode.push(h(ElTooltip, { content: labelHelp, placement: 'top' }, () => icon_vnode))
            }

            return h('div', { class: 'sd-pro-form-field__label' }, [vnode, labelSuffix])
        }

        // 渲染表单项
        const renderFormItem = (content: RenterContent) => {
            const { key, formItem } = state.config

            // 不显示 form-item
            if (formItem === false) return renderContentAround(content)

            // 未声明key，且未声明使用 formItem 则不处理
            if (!key && (formItem !== true && !isObject(formItem))) return content

            const formItemProps = { ...(isObject(formItem) ? (formItem as any) : {}) } as any
            if (key                ) formItemProps.prop  = key
            if (label$.value       ) formItemProps.label = label$.value
            if (rules$.value.length) formItemProps.rules = rules$.value
            if (props.isNest) {
                formItemProps.class = mergeProps(formItemProps.class || {},  {
                    'is-nest': isNestFormItem(),
                    'has-tip': hasRenderTip(),
                })
            }

            return h(ElFormItem, { ...formItemProps, ref: formItemRef }, {
                default: () => renderContentAround(content),
                label  : renderFormItemLabelSlot,
            })
        }

        /**
         * 是否嵌套渲染 form-item
         * - 手动声明使用 form-item
         * - 未手动声明，含 key 默认表示是一个受控组件，如 form-item !== false, 默认渲染
         */
        function isNestFormItem() {
            const { formItem, key } = state.config
            if (props.isNest) return true
            return (formItem === true || (!!key && formItem !== false))
        }

        // 是否有 tip 渲染
        function hasRenderTip() {
            const { key, tip } = state.config
            if (tip) return true

            const slot_tip        = ctx.slots['tip']
            const extend_slot_tip = key ? $proForm.slots[`${ key }__tip`] : null
            return slot_tip || extend_slot_tip
        }

        // 渲染栅格列
        const renderCol = (content: RenterContent) => {
            const { col } = state.config
            if (isNumber(col)) {
                return h(ElCol, { ref: colRef, span: col }, () => content)
            } else if (isObject(col)) {
                return h(ElCol, { ...col, ref: colRef }, () => content)
            } else {
                return content
            }
        }

        // 双向绑定
        function bindModelValue() {
            const { key } = state.config
            if ( !key ) return

            return {
                'modelValue'         : get($proForm.state.model, key),
                'onUpdate:modelValue': (val: any) => {
                    set($proForm.state.model, key, val)
                },
            }
        }

        // 解析标签名称 -> 组件
        type ResolveTagNameReturn = VNode | string | null | (((params: SdProFormDefine.TagMethodParams) => SdProFormDefine.MethodReturnRenderContent))
        function resolveTagName(tag?: SdProFormDefine.SchemaConfig['tag']): ResolveTagNameReturn {
            if (!tag) return null

            // 传入渲染函数
            if (isFunction(tag)) return tag

            // 传入组件
            if (isVNode(tag)) return tag

            // 传入字符串：需要解析
            if (isString(tag)) {
                // 查找当前 pro-form 配置的组件
                const fieldsConfig = $proForm.props.fieldsConfig
                if (fieldsConfig) {
                    const render_tag = fieldsConfig[tag]
                    if (isVNode(render_tag)   ) return render_tag
                    if (isFunction(render_tag)) return render_tag
                }

                // 查找全局配置组件
                const conf = globalConfig.component[tag]
                if (conf) {
                    return h(resolveComponent(conf.tag), conf.props) // 全局配置
                } else if (tag === 'text') {
                    return renderTextFeild
                } else {
                    return isHTMLTag(tag) ? tag : h(resolveComponent(tag)) // 无全局配置转换规则
                }
            }

            return null
        }

        // 取得回调函数默认参数
        function getMethodParams() {
            return {
                $key  : state.config.key,
                $model: $proForm.state.model,
                colRef,
                formItemRef,
                fieldRef,
                $proForm,
            }
        }

        onBeforeMount(() => {
            // 补充默认值
            const { key, value, id } = state.config

            // 设置默认值
            if (key && isUndefined(get($proForm.state.model, key)) && !isUndefined(value)) {
                set($proForm.state.model, key, value)
            }

            // 通知 $proForm 收集控件信息
            if (key) $proForm.bindField(key, state)
            if (id ) $proForm.bindField(id , state)
        })

        onUnmounted(() => {
            const { key, id } = state.config
            if (key) $proForm.unbindField(key)
            if (id ) $proForm.unbindField(id)
        })

        return () => {
            if (is_hidden$.value) {
                return null
            } else {
                return renderCol(renderFormItem(renderContent()))
            }
        }
    },
})

export default ProFormField
</script>

<style>
.el-form-item.is-nest .el-form-item__label {
    display: none;
}

.el-form-item.has-tip .el-form-item__content {
    flex-direction: column;
    align-items: normal;
}

.sd-pro-form-field__label {
    display: inline-flex;
    align-items: center;
}

.el-form-item__label-icon {
    margin: 0 3px;
    cursor: help;
}

.sd-pro-form-field__sublabel {
    color: var(--el-text-color-secondary);
}

.sd-pro-form-field__content {
    display: flex;
    align-items: center;
}

.sd-pro-form-field__tip {
    width: 100%;
    font-size: 12px;
    color: var(--el-text-color-placeholder);
}
</style>
