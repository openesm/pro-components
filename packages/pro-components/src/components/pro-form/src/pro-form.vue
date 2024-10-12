<script lang="ts">
import type { SdProFormDefine, SdProFormState } from './types'
import type { VNode } from 'vue'
import type { FormItemProp } from 'element-plus'

import { defineComponent, h, ref, reactive, provide, computed, withModifiers } from 'vue'
import { get, set, omit, isUndefined, cloneDeep, isObject, uniqueId, isArray } from 'lodash-es'
import { ElRow, ElForm, ElMessage       } from 'element-plus'
import { sdProFormKey                   } from './token'
import { sdProFormProps, sdProFormEmits } from './pro-form'

import ProFormField from './pro-form-field.vue'

const sdProFormOmitKeys = ['model', 'schema', 'layout', 'rowProps']
export default defineComponent({
    name : 'SdProForm',
    props: sdProFormProps,
    emits: sdProFormEmits,
    setup(props, ctx) {
        const form_ref = ref()
        const fieldMap = {} as Record<string, { config: SdProFormDefine.SchemaConfig }>
        const state = reactive<SdProFormState>({
            model : props.model  || {},
            schema: props.schema || [],
        })

        // el-form 组件属性配置
        const form_props$ = computed(() => {
            return {
                ...omit(props, ...sdProFormOmitKeys),
                model: state.model,
                class: 'sd-pro-form',
            }
        })

        const $proForm = {
            state,
            props,
            emit : ctx.emit,
            slots: ctx.slots,
            attrs: ctx.attrs,
            // -------------
            bindField,
            unbindField,
            getFieldsMap,
            // -------------
            getConfig ,
            setConfig,
            replaceConfig,
            // -------------
            getModel,
            setModel,
            getValue,
            setValue,
            // -------------
            getLabel,
            setLabel,
            // -------------
            getOptions,
            setOptions,
            // -------------
            show,
            hidden,
            enable,
            disable,
            // -------------
            validate,
            validateField,
            resetFields,
            scrollToField,
            clearValidate,
        }

        // 绑定控件
        function bindField(key: string, val: { config: SdProFormDefine.SchemaConfig }) {
            fieldMap[key] = val
        }

        // 解除控件
        function unbindField(key: string) {
            delete fieldMap[key]
        }

        // 取得所有映射关系
        function getFieldsMap() {
            return fieldMap
        }

        // 取得指定属性配置
        function getConfig(key: string) {
            return get(fieldMap, key)?.config
        }

        // 设置指定属性配置
        function setConfig(key: string, config: SdProFormDefine.SchemaConfig) {
            const conf = getConfig(key)
            if (isUndefined(conf)) return

            Object.keys(config).forEach((k) => {
                if (['key', 'id'].includes(k)) return // key、id 不允许变更
                (conf as any)[k] = (config as any)[k]
            })
        }

        // 替换指定属性完整配置除、key 和 id 之外
        function replaceConfig(key: string, config: SdProFormDefine.SchemaConfig) {
            const state = get(fieldMap, key)
            if (isUndefined(state)) return

            if (state.config.key) config.key = state.config.key
            if (state.config.id ) config.id  = state.config.id

            state.config = config
        }

        // 设置整个表单值
        function setModel(model: Record<string, any>) {
            state.model = model
            ctx.emit('update:model', state.model)
        }

        // 取得整个表单值
        function getModel() { return cloneDeep(state.model) }

        // 取得指定属性值
        function getValue(key: string) {
            const val = get(state.model, key)
            return isObject(val) ? cloneDeep(val) : val
        }

        // 设置指定属性值
        function setValue(key: string, value: any) {
            set(state.model, key, value)
        }

        function getLabel(key: string) {
            return getConfig(key)?.label || ''
        }

        function setLabel(key: string, label: string) {
            const conf = getConfig(key)
            if ( !conf ) return
            conf.label = label
        }

        // 显示指定控件
        function show(key: string) {
            const conf = getConfig(key)
            if ( !conf ) return
            conf.hidden = false
        }

        // 隐藏指定控件
        function hidden(key: string) {
            const conf = getConfig(key)
            if ( !conf ) return
            conf.hidden = true
        }

        // 启用指定控件
        function enable(key: string) {
            const conf = getConfig(key)
            if ( !conf ) return
            conf.disabled = false
        }

        // 禁用指定控件
        function disable(key: string) {
            const conf = getConfig(key)
            if ( !conf ) return
            conf.disabled = true
        }

        // 取得指定属性 options 值
        function getOptions(key: string) {
            const conf = getConfig(key)
            if ( !conf ) return []
            return conf.options
        }

        // 设置指定属性 options 值
        function setOptions(key: string, val: any[]) {
            const conf = getConfig(key)
            if ( !conf ) return []
            conf.options = val
        }

        // 对整个表单作验证。 参数为一个回调函数。
        function validate(alertMessage = false): Promise<boolean> {
            return new Promise((resolve) => {
                const $form = form_ref.value
                if ( !$form ) return resolve(false)

                $form.validate((isValid: boolean, invalidFields: any) => {
                    alertMessage && _showValidError(invalidFields)
                    resolve(isValid)
                })
            })
        }

        // 对部分表单字段进行校验的方法
        function validateField(props?: string | string[], alertMessage = false): Promise<boolean> {
            return new Promise((resolve) => {
                const $form = form_ref.value
                if ( !$form ) return resolve(false)

                $form.validateField(props, (isValid: boolean, invalidFields: any) => {
                    alertMessage && _showValidError(invalidFields)
                    resolve(isValid)
                })
            })
        }

        // 显示表单异常提示
        function _showValidError(invalidFields: any): void {
            if (!invalidFields) return
            let err = ''
            Object.keys(invalidFields).forEach((k) => {
                invalidFields[k].forEach((f: any) => {
                    err += `<p style="margin-top: ${ err ? '5px' : '' }">${ f.message };</p>`
                })
            })
            if (!err) return
            ElMessage.error({ dangerouslyUseHTMLString: true, message: err })
        }

        // 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
        function resetFields() {
            const $form = form_ref.value
            if ( !$form ) return

            $form.resetFields()
        }

        // 滚动到指定表单字段 Function(prop: string)
        function scrollToField(prop: string) {
            const $form = form_ref.value
            if ( !$form ) return

            $form.scrollToField(prop)
        }

        // 清理指定字段的表单验证信息。 参数是一个或多个需要清除验证信息的表
        function clearValidate(props?: string | string[]) {
            const $form = form_ref.value
            if ( !$form ) return

            $form.clearValidate(props)
        }

        // -- Emtis ---------------------------------------------------------------------
        // 监听表单项校验事件
        function onValidate(prop: FormItemProp, isValid: boolean, message: string) {
            ctx.emit('validate', prop, isValid, message)
        }

        // 监听表单提交事件
        function onSubmit() {
            ctx.emit('submit', cloneDeep(state.model))
        }

        // 注入表单组件上下文
        provide(sdProFormKey, $proForm as any)

        // 公开表单组件上下文
        ctx.expose($proForm)

        // 渲染控件列表
        const renderFormFields = () => {
            const fields = isArray(state.schema) ? state.schema : []
            return fields.map(config => h(ProFormField, { config, key: uniqueId('field') }))
        }

        // 渲染布局
        const renderLayout = (content: VNode | VNode[]) => {
            const slot_default = ctx.slots['default']
            if (slot_default) return slot_default()

            if (props.layout) {
                return h(ElRow, { gutter: 15, ...props.rowProps }, () => content)
            } else {
                return content
            }
        }

        // 渲染底部按钮
        const renderFooterButton = () => {
            const slot_button = ctx.slots['button']
            return slot_button ? slot_button() : null
        }

        return () => {
            const slot_before = ctx.slots['before']
            const slot_after  = ctx.slots['after']
            return h(ElForm, {
                ...form_props$.value,
                ref     : form_ref,
                onValidate,
                onSubmit: withModifiers(onSubmit, ['prevent']),
            }, () => [
                slot_before ? slot_before() : null,
                renderLayout(renderFormFields()),
                slot_after ? slot_after() : null,
                renderFooterButton(),
            ])
        }
    },
})
</script>
