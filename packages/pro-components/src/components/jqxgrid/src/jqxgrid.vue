<script lang="ts">
import type { SdJqxgridTypes } from './types'

import { defineComponent, ref, watch, onMounted, nextTick } from 'vue'
import { jqxgridProps, jqxgridEmits } from './jqxgrid'
import { ElLoadingDirective } from 'element-plus'
import { initJqxGrid  } from './tools'
import { globalConfig } from '../../../config'
import { isFunction   } from 'lodash-es'
import {
    ArrowLeft  as IconArrowLeft,
    ArrowRight as IconArrowRight,
    Download   as IconDownload,
} from '@element-plus/icons-vue'

export default defineComponent({
    name      : 'SdJqxgrid',
    directives: { loading: ElLoadingDirective },
    props     : jqxgridProps,
    emits     : jqxgridEmits,
    setup(props, ctx) {
        let $: any

        const grid_ref        = ref()
        const toggle          = ref(false)
        const require_loading = ref(false)
        const origin_col_map  = ref({} as Record<string, SdJqxgridTypes.ColumnOptions & { datafield: string }>)

        // 监听外部数据变化，重新创建
        watch(() => props.cols, updateGrid)

        onMounted(() => { load() })

        async function load() {
            const { require } = globalConfig.plugins?.jqxgrid || {}
            if (isFunction(require)) {
                ctx.emit('require')
                try {
                    require_loading.value = true
                    $ = await require()
                    require_loading.value = false
                    ctx.emit('require-success')

                    init($)

                    ctx.emit('ready', $)
                } catch (error) {
                    require_loading.value = false
                    ctx.emit('require-error', error)
                }
            }
        }

        // 创建 jqx-grid
        async function init($: any) {
            if ($ && grid_ref.value) {
                origin_col_map.value = {}
                $(grid_ref.value).jqxGrid(initJqxGrid($, props, origin_col_map))
                onJqxgridEvents()
                ctx.emit('created')
            }
        }

        /** 监听 jqxGrid 事件 */
        function onJqxgridEvents() {
            const $grid = grid_ref.value
            if (!$ || !$grid) return

            const getParams = (e: any) => {
                const datafield = e?.args?.datafield

                return {
                    event   : e,
                    ...e.args,
                    row     : e.args?.row?.bounddata, // 行数据
                    $jqxgrid: {
                        getRows,
                        getRowData,
                        render,
                        refresh,
                        destroy,
                        scrolloffset,
                    },
                    $,
                    $originColMap: origin_col_map.value,
                    $originCol   : datafield ? origin_col_map.value[`${ datafield }`] : undefined,
                }
            }

            $($grid).on('cellclick'      , (e: any) => { ctx.emit('cellClick'       , getParams(e)) })
            $($grid).on('celldoubleclick', (e: any) => { ctx.emit('cellDoubleClick' , getParams(e)) })
            $($grid).on('cellselect'     , (e: any) => { ctx.emit('cellSelect'      , getParams(e)) })
            $($grid).on('cellunselect'   , (e: any) => { ctx.emit('cellUnselect'    , getParams(e)) })
            $($grid).on('rowclick'       , (e: any) => { ctx.emit('rowClick'        , getParams(e)) })
            $($grid).on('rowdoubleclick' , (e: any) => { ctx.emit('rowDoubleClick'  , getParams(e)) })
            $($grid).on('rowselect'      , (e: any) => { ctx.emit('rowSelect'       , getParams(e)) })
            $($grid).on('rowunselect'    , (e: any) => { ctx.emit('rowUnselect'     , getParams(e)) })
        }

        function updateGrid() {
            toggle.value = !toggle.value
            nextTick(() => {
                if ($ && grid_ref.value) {
                    $(grid_ref.value).jqxGrid(initJqxGrid($, props, origin_col_map))
                    onJqxgridEvents()
                }
            })
        }

        let timer: ReturnType<typeof setTimeout>
        function refresh() {
            clearTimeout(timer)
            timer = setTimeout(() => {
                _jqxGrid('refresh')
            }, 0)
        }

        function render() {
            _jqxGrid('render')
        }

        /** 获取数据 */
        function getRows() {
            return _jqxGrid('getrows') || []
        }

        /** 获取数据 */
        function getRowData(row_index: number) {
            return _jqxGrid('getrowdata', row_index) || null
        }

        /** 获取数据 */
        function scrolloffset(top: number, left: number) {
            _jqxGrid('scrolloffset', top, left)
        }

        /** 销毁 grid */
        function destroy() {
            _jqxGrid('destroy')
        }

        function _jqxGrid(name: string, ...rest: any) {
            if ($ && grid_ref.value) {
                return $(grid_ref.value).jqxGrid(name, ...rest)
            } else {
                return undefined
            }
        }

        return {
            IconArrowLeft,
            IconArrowRight,
            IconDownload,
            grid_ref,
            require_loading,
            getRows,
            refresh,
            render,
            destroy,
            scrolloffset,
            toggle,
        }
    },
})
</script>

<template>
    <div v-loading="require_loading" class="sd-jqxgrid" :style="{ width, height }">
        <slot name="header" />
        <div v-if="toggle" ref="grid_ref" class="sd-jqxgrid__content" />
        <div v-else ref="grid_ref" class="sd-jqxgrid__content" />
        <slot name="footer" />
    </div>
</template>
