<script lang="ts">
import type { CSSProperties } from 'vue'
// import type { ScrollbarInstance } from 'element-plus'

import { defineComponent, computed, reactive, ref, watch } from 'vue'
import { ElScrollbar        } from 'element-plus'
import { sdVirtualListProps } from './virtual-list'
import { isNumber           } from 'lodash-es'

export default defineComponent({
    name      : 'SdVirtualList',
    components: { ElScrollbar },
    props     : sdVirtualListProps,
    setup(props) {
        // 滚动组件引用
        const scroll_ref = ref<any>()

        // 组件数据
        const state = reactive({
            start_idx : 0, // 起始下标
            end_idx   : 0, // 截止下标
            scroll_top: 0, // 滚动高度
        })

        watch(() => [props.items, props.itemHeight, props.bench], () => {
            setTimeout(() => {
                scroll_ref.value && scroll_ref.value.scrollTo(0, 0)
            }, 0)
        })

        initPosition(state.scroll_top)

        // 初始化可视列表位置
        function initPosition(scroll_top: number) {
            state.start_idx  = Math.floor(scroll_top / props.itemHeight!)                     // 取得当前滚动可显示的起始位置
            state.end_idx    = state.start_idx + Math.ceil(props.height! / props.itemHeight!) // 取得当前滚动可显示的截止位置
        }

        // 容器样式
        const wrap_style$ = computed(() => {
            const styles: CSSProperties = {}
            if (isNumber(props.height   )) styles.height    = `${ props.height }px`
            if (isNumber(props.minHeight)) styles.minHeight = `${ props.minHeight }px`
            if (isNumber(props.maxHeight)) styles.maxHeight = `${ props.maxHeight }px`
            if (isNumber(props.width    )) styles.width     = `${ props.width }px`
            if (isNumber(props.minWidth )) styles.minWidth  = `${ props.minWidth }px`
            if (isNumber(props.maxWidth )) styles.maxWidth  = `${ props.maxWidth }px`
            return styles
        })

        // 内容区域高度
        const content_height$ = computed(() => `${ props.items.length * props.itemHeight! }px`)

        // 可视列表
        const visbile_list$ = computed(() => {
            const start_idx = Math.max(0, state.start_idx - props.bench)                // 起始位置
            const end_idx   = Math.min(props.items.length, state.end_idx + props.bench) // 截止位置
            return props.items.slice(start_idx, end_idx).map((item, idx) => {
                return { data: item, style: { top: `${ (idx + state.start_idx) * props.itemHeight! }px` } }
            })
        })

        // 监听滚动
        function onScroll({ scrollTop: scroll_top }: { scrollTop: number }) {
            state.scroll_top = scroll_top
            initPosition(scroll_top)
        }

        return {
            state,
            scroll_ref,
            wrap_style$,
            content_height$,
            visbile_list$,
            onScroll,
        }
    },
})
</script>

<template>
    <div class="sd-virtual-list" :style="wrap_style$">
        <ElScrollbar ref="scroll_ref" height="100%" @scroll="onScroll">
            <slot name="before" />
            <div class="sd-virtual-list__content" :style="{ height: content_height$ }">
                <div v-for="(item, idx) in visbile_list$" :key="idx" :style="item.style" class="sd-virtual-list__item">
                    <slot :item="item.data" />
                </div>
            </div>
            <slot name="after" />
        </ElScrollbar>
    </div>
</template>
