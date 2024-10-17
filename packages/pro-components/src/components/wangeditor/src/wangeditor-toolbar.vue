<script lang="ts">
import type { SdWangeditorTypes, SdWangeditorToolbarTypes } from './types'

import { defineComponent, ref, watchEffect } from 'vue'
import { wangeditorToolbarProps } from './wangeditor-toolbar'
import { globalConfig } from '../../../config'
import { isFunction } from 'lodash-es'

export default defineComponent({
    name : 'SdWangeditorToolbar',
    props: wangeditorToolbarProps,
    setup(props) {
        let $toolbar: SdWangeditorToolbarTypes.ToolbarInstance
        const toolbar_ref = ref(null)

        watchEffect(() => {
            const { editor } = props
            if (editor === null) return

            create(editor)
        })

        async function create(editor: SdWangeditorTypes.EditorInstance) {
            const selector = toolbar_ref.value
            if ( !selector || !editor ) return

            // 依赖 wangeditor 组件加载完毕，故不处理异步加载等事件
            const { require } = globalConfig.plugins?.wangeditor || {}
            if (isFunction(require)) {
                try {
                    const result = await require()
                    if ( !result || !('createToolbar' in result)) return

                    const options: SdWangeditorToolbarTypes.CreateOption = {
                        selector,
                        editor  ,
                        mode  : props.mode,
                        config: {
                            ...props.config,
                            excludeKeys: props.config?.excludeKeys || [
                                'fullScreen',
                                'group-video',
                                'codeBlock',
                            ],
                        },
                    }

                    $toolbar = result.createToolbar(options)
                } catch (error) {}
            }
        }

        function getMenus() {
            return $toolbar && $toolbar.getMenus()
        }

        function getConfig() {
            return $toolbar && $toolbar.getConfig()
        }

        function destroy() {
            $toolbar && $toolbar.destroy()
        }

        return {
            toolbar_ref,
            getMenus,
            getConfig,
            destroy,
        }
    },
})
</script>

<template>
    <div ref="toolbar_ref" />
</template>
