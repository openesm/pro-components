<script lang="ts">
import type { SdWangeditorTypes } from './types'
import type { IDomEditor } from '@wangeditor/editor'

import { defineComponent, ref, watch, onMounted, onUnmounted } from 'vue'
import { wangeditorProps, wangeditorEmits } from './wangeditor'
import { isFunction } from 'lodash-es'
import { globalConfig } from '../../../config'

export default defineComponent({
    name : 'SdWangeditor',
    props: wangeditorProps,
    emits: wangeditorEmits,
    setup(props, ctx) {
        let $editor: SdWangeditorTypes.EditorInstance | null = null
        const edit_ref   = ref()
        const curr_value = ref('') // 记录当前 html 内容

        watch(() => props.modelValue, (value) => {
            const new_value = value || ''
            if (new_value === curr_value.value) return
            setHtml(new_value)
        })

        onMounted(initEditor)
        onUnmounted(destroy)

        async function initEditor() {
            const { require } = globalConfig.plugins?.wangeditor || {}
            if (isFunction(require)) {
                try {
                    ctx.emit('require')
                    const result = await require()
                    if ( !result || !('createEditor' in result)) return

                    ctx.emit('require-success', result)
                    $editor = result.createEditor({
                        selector: edit_ref.value,
                        mode    : props.mode,
                        html    : props.defaultHtml || props.modelValue || '',
                        content : props.defaultContent,
                        config  : {
                            ...props.config,
                            onCreated(editor: IDomEditor) {
                                ctx.emit('created', editor)
                            },
                            onChange(editor: IDomEditor) {
                                const value = editor.getHtml()
                                curr_value.value = value

                                ctx.emit('update:modelValue', value)
                                ctx.emit('change', editor)
                            },
                            onDestroyed(editor: IDomEditor) {
                                ctx.emit('destroyed', editor)
                            },
                            onMaxLength(editor: IDomEditor) {
                                ctx.emit('over-maxlength', editor)
                            },
                            onFocus(editor: IDomEditor) {
                                ctx.emit('focus', editor)
                            },
                            onBlur(editor: IDomEditor) {
                                ctx.emit('blur', editor)
                            },
                        },
                    })
                    ctx.emit('ready', $editor)
                } catch (error) {
                    ctx.emit('require-error', error)
                }
            }
        }

        // 清空正文内容
        function clear() {
            $editor && $editor.clear()
        }

        // 获取正文内容
        function getHtml() {
            return $editor ? $editor.getHtml() : ''
        }

        // 设置正文内容
        function setHtml(newHtml: string) {
            $editor && $editor.setHtml(newHtml)
        }

        // 销毁编辑器
        function destroy() {
            $editor && $editor.destroy()
        }

        // 取得编辑实例
        function getEditorInstance() {
            return $editor
        }

        return {
            edit_ref,
            getHtml,
            clear,
            destroy,
            getEditorInstance,
        }
    },
})
</script>

<template>
    <div ref="edit_ref" style="height: 100%;" />
</template>
