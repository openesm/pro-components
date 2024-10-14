<script lang="ts">
import type { EChartsType } from 'echarts/types/dist/shared'

import { defineComponent, ref, watch, onMounted, onUnmounted } from 'vue'
import { sdEchartProps, sdEchartEmits } from './echart'
import { ElLoadingDirective } from 'element-plus'
import { isFunction   } from 'lodash-es'
import { globalConfig } from '../../../config'

const COLORS = [
    '#89c3eb',
    '#bce2e8',
    '#7CE0C3',
    '#ED8D3E',
    '#ADDD71',
    '#5DC9F1',
    '#DF5578',
    '#4580F7',
]

export default defineComponent({
    name      : 'SdEchart',
    directives: { loading: ElLoadingDirective },
    props     : sdEchartProps,
    emits     : sdEchartEmits,
    setup(props, ctx) {
        let $echart: EChartsType | null = null
        let $resizeObserver: ResizeObserver | null = null
        let first_resize      = true
        const container_ref   = ref()
        const require_loading = ref(false)

        // 更新图表
        watch(() => props.options, (options) => {
            options && $echart?.setOption(mergeEchartOptions(options), true)
        })

        onMounted(() => { init() })
        onUnmounted(() => { $echart?.dispose() })

        async function init() {
            const { require } = globalConfig.plugins?.echarts || {}
            if (isFunction(require)) {
                ctx.emit('require')
                try {
                    require_loading.value = true
                    const Echarts = await require()
                    require_loading.value = false
                    ctx.emit('require-success')

                    initEchart(Echarts)
                    initContainerResizeObserver()

                    ctx.emit('ready', $echart)
                } catch (error) {
                    require_loading.value = false
                    ctx.emit('require-error', error)
                }
            }
        }

        // 创建图表
        function initEchart(Echarts: any) {
            const $el = container_ref.value
            if ( !$el ) return

            $echart = Echarts.init($el, props.theme, props.initOptions) as EChartsType
            $echart.clear()
            $echart.setOption(mergeEchartOptions(props.options))
        }

        // 初始化图表选项
        function mergeEchartOptions(options?: any) {
            return {
                color: props.colors || COLORS,
                ...options,
            }
        }

        // ----------------------------------------------------------------------------------
        // 处理是否监听容器变化开关
        watch(() => props.resize, (resize) => {
            if (resize) {
                initContainerResizeObserver()
            } else {
                $resizeObserver?.disconnect()
            }
        }, { immediate: true })

        function initContainerResizeObserver() {
            if (!props.resize) return

            const $container = container_ref.value
            if ( !$container || $resizeObserver ) return

            $resizeObserver = new ResizeObserver(() => {
                if (first_resize) {
                    first_resize = false
                    return
                }
                $echart?.resize()
            })
            $resizeObserver.observe($container)
        }

        // ----------------------------------------------------------------------------------

        // 获取实例
        function getInstance() { return $echart }

        const methods = {} as Record<string, any>
        const CLONE_METHODS = [
            'setOption',
            'appendData',
            'clear',
            'dispose',
            'resize',
            'on',
            'off',
            'showLoading',
            'hideLoading',
        ]
        CLONE_METHODS.forEach((name) => {
            methods[name] = (...rest: any[]) => {

                if (!$echart || !isFunction(($echart as any)[name])) return
                ($echart as any)[name](...rest)
            }
        })

        ctx.expose({ getInstance, ...methods })

        return { container_ref, require_loading }
    },
})
</script>

<template>
    <div
        ref="container_ref"
        v-loading="loading && require_loading"
        :element-loading-text="loadingText"
        class="sd-echart"
    />
</template>
