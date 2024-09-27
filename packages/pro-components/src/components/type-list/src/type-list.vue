<script lang="ts">
import { defineComponent, computed, watch, ref, nextTick } from 'vue'
import { ElEmpty, ElScrollbar } from 'element-plus'
import { SdIcon               } from '../../icon'
import { sdTypeListProps      } from './type-list'
import { isNumber, isFunction } from 'lodash-es'

export default defineComponent({
    name      : 'SdTypeList',
    components: { SdIcon, ElEmpty, ElScrollbar },
    props     : sdTypeListProps,
    emits     : [
        'update:modelValue',
        'sort-start',
        'sort-end',
    ],
    setup(props, { emit }) {
        // 内部绑定值
        const internalValue$ = computed({
            get: () => props.modelValue,
            set: (val) => { emit('update:modelValue', val) },
        })

        // 容器样式
        const wrapStyle$ = computed(() => {
            const width = isNumber(props.width) ? `${ props.width }px` : props.width
            return { width, minWidth: width }
        })

        // 支持列表过滤
        const list$ = computed(() => {
            return isFunction(props.filter) ? props.filter(props.list) :  props.list
        })

        // 确保 label, value 含有默认值
        const prop$ = computed(() => {
            const prop = props?.prop
            return {
                ...prop,
                label: prop?.label || 'label',
                value: prop?.value || 'value',
                icon : prop?.icon  || 'icon',
                count: prop?.count || 'count',
            }
        })

        watch(() => props.list, (new_list) => {
            // 无数据
            if (!new_list.length) {
                emit('update:modelValue', null)
                return
            }

            // 无默认激活项
            const _item_ = internalValue$.value
            if ( !_item_ ) {
                emit('update:modelValue', new_list[0])
                scrollIntoView(new_list[0])
                return
            }

            const item = new_list.find((item: any) => item[prop$.value.value] === _item_[prop$.value.value])
            emit('update:modelValue', item || new_list[0])
            scrollIntoView(item || new_list[0])
        }, { immediate: true })

        const scrollTop   = ref(0)
        function onScroll(detail: { scrollTop: number }) {
            scrollTop.value = detail.scrollTop
        }

        // 滚动激活列表项至可视范
        const scrollbarRef = ref()
        function scrollIntoView(activeItem: any) {
            if (!activeItem) return

            const $scroll = scrollbarRef.value
            if ( !$scroll ) return

            // 当容器可视高度为0,表示不是当前显示页面
            const wrapH = $scroll.wrap$.clientHeight
            if ( !wrapH ) return

            const item  = document.querySelector('.sd-type-list__item-wrap')
            if ( !item ) return
            const itemH = item.clientHeight

            // 未超出滚动条
            const curr_top = scrollTop.value

            const key = prop$.value.value
            const idx = list$.value.findIndex((item: any) => item[key] === activeItem[key])
            if ( idx === -1 ) return

            const item_top    = idx * itemH
            const item_bottom = (idx + 1) * itemH

            if (item_top >= curr_top && item_bottom <= (curr_top + wrapH)) return

            // 需要等到页面响应更新完毕在滚动，否则会导致滚动不到指定位置
            nextTick(() => {
                if (item_bottom > (curr_top + wrapH)) {
                    $scroll.setScrollTop(item_bottom - (curr_top + wrapH) + curr_top)
                } else {
                    $scroll.setScrollTop(item_top)
                }
            })
        }

        function onClick(element: any) {
            internalValue$.value = element
            scrollIntoView(element)
        }

        return {
            internalValue$,
            wrapStyle$,
            list$,
            prop$,
            scrollbarRef,
            onScroll,
            onClick,
        }
    },
})
</script>

<template>
    <div class="sd-type-list" :style="[wrapStyle$]">
        <div v-if="showHeader" class="sd-type-list__header" :class="[headerClass]"  :style="headerStyle">
            <slot name="header">
                {{ title }}
            </slot>
        </div>
        <ElScrollbar
            v-if="list$.length"
            ref="scrollbarRef"
            class="sd-type-list__scroll-wrap"
            @scroll="onScroll"
        >
            <div
                v-for="(element, element_idx) in list$"
                :key="element_idx"
                class="sd-type-list__item-wrap"
            >
                <slot name="item" :item="{ element, index: element_idx }">
                    <div
                        class="sd-type-list-item"
                        :class="[{ 'is-active': internalValue$ && element[prop$.value] === internalValue$[prop$.value] }]"
                        @click="onClick(element)"
                    >
                        <SdIcon
                            v-if="element[prop$.icon]"
                            :name="element[prop$.icon]"
                            class="sd-type-list-item__icon"
                        />
                        <div class="sd-type-list-item__content">
                            {{ element[prop$.label] }}
                            <span v-if="showCount && element[prop$.count]">
                                ({{ element[prop$.count] }})
                            </span>
                        </div>
                    </div>
                </slot>
            </div>
        </ElScrollbar>
        <div v-else class="sd-type-list__empty">
            <ElEmpty :description="emptyText">
                <slot name="empty" />
            </ElEmpty>
        </div>
        <div v-if="showFooter" class="sd-type-list__footer" :class="[footerClass]"  :style="footerStyle">
            <slot name="footer" />
        </div>
    </div>
</template>
