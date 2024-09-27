<script setup lang="ts">
import type { SdWaterflowTypes } from './types'

import { ref, watch, nextTick                     } from 'vue'
import { sdWaterflowProps, sdWaterflowEmits       } from './waterflow'
import { ElScrollbar, ElButton, ElIcon, ElBacktop } from 'element-plus'
import { Loading as IconLoading                   } from '@element-plus/icons-vue'
import { isFunction, debounce                     } from 'lodash-es'
import { SdImage                                  } from '../../image'

defineOptions({
    name      : 'SdWaterflow',
    components: {
        ElScrollbar,
        ElButton,
        ElIcon,
        SdImage,
        ElBacktop,
        IconLoading,
    },
})
const props = defineProps(sdWaterflowProps)
// eslint-disable-next-line unused-imports/no-unused-vars
const emit  = defineEmits(sdWaterflowEmits)

const columns       = ref<SdWaterflowTypes.ColumnItem[]>([]) // 瀑布流的列数
const loading       = ref(false)                             // 是否正在加载更多中
const scrollbar_ref = ref()

watch(() => props.list, () => {
    scrollbar_ref.value && scrollbar_ref.value.setScrollTop(0)
    nextTick(() => {
        columns.value = Array.from(new Array(props.column)).map(() => ({ height: 0, items: [] as SdWaterflowTypes.WaterflowItem[] }))
        addImages(props.list)
    })
}, { immediate: true })

function addImages(list: any[]) {
    list.forEach((item) => {
        // 每次循环找出最小高度容器
        let min_idx    = 0
        let min_height = null as null | number
        for (let i = 0; i < columns.value.length; i++) {
            if (min_height === null || min_height > columns.value[i]!.height) {
                min_height = columns.value[i]!.height
                min_idx    = i
            }
        }

        columns.value[min_idx]!.height += item.height
        columns.value[min_idx]!.items.push(item)
    })
}

// 监听加载更多
async function onLoadMore() {
    // 加载中和没有更多了，则不处理
    if (loading.value || props.nomore) return

    if (isFunction(props.loadmore)) {
        loading.value = true
        const res = await props.loadmore()
        loading.value = false
        if (res.ok) addImages(res.data)
    }
}

const delay_scroll_cb = debounce(({ scrollTop }: { scrollTop: number; scrollLeft: number }) => {
    const { scrollHeight, offsetHeight } = scrollbar_ref.value.wrap$
    if (scrollHeight - scrollTop - offsetHeight < props.distance) {
        onLoadMore()
    }
}, 200)
function onScroll(options: { scrollTop: number; scrollLeft: number }) {
    delay_scroll_cb(options)
}
</script>

<template>
    <div class="sd-waterflow">
        <ElScrollbar
            ref="scrollbar_ref"
            style="width: 100%; height: 100%;"
            v-bind="scrollbarConfig"
            @scroll="onScroll"
        >
            <div style="display: flex;">
                <div
                    v-for="col_idx in column"
                    :key="col_idx"
                    class="sd-waterflow__col-wrap"
                >
                    <template v-for="item in (columns[col_idx - 1]?.items || [])" :key="item.url">
                        <div class="sd-waterflow__img-wrap">
                            <div v-if="item.title" class="sd-waterflow__img-wrap-title">
                                {{ item.title }}
                            </div>

                            <SdImage
                                disabled-preview
                                :src="item.url"
                                width="100%"
                                :height="item.height"
                            />

                            <div v-if="confirmButtonText" class="sd-waterflow__img-wrap-action">
                                <ElButton type="primary" round @click="$emit('confirm', item)">
                                    {{ confirmButtonText }}
                                </ElButton>
                            </div>

                            <slot name="extra" :item="item" />
                        </div>
                    </template>
                </div>
            </div>

            <div v-if="loading" class="sd-waterflow__loading">
                <ElIcon class="is-loading">
                    <IconLoading />
                </ElIcon>
                {{ loadingText }}
            </div>
            <div v-if="nomore" class="sd-waterflow__nomore">
                {{ nomoreText }}
            </div>
        </ElScrollbar>
    </div>
</template>
