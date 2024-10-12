<script lang="ts">
import { defineComponent, computed, watch, ref, reactive, toRefs, onMounted, nextTick } from 'vue'
import { ElEmpty, ElScrollbar } from 'element-plus'
import { isNumber, isFunction } from 'lodash-es'
import { SdIcon               } from '../../icon'
import { sdCategoryListProps, sdCategoryListEmits } from './category-list'
import Sortable from 'sortablejs'

export default defineComponent({
    name      : 'SdCategoryList',
    components: { SdIcon, ElEmpty, ElScrollbar },
    props     : sdCategoryListProps,
    emits     : sdCategoryListEmits,
    setup(props, { emit }) {
        const wrap_ref      = ref()
        const scrollbar_ref = ref()  // 当前滚动组件实例
        const state = reactive({
            scroll_top : 0, // 当前滚动高度
            list       : getData(props.data),
            origin_list: [] as any[], // 用于还原排序前的数据
        })

        const actived_item$ = computed({
            get() {
                return props.activedItem
            },
            set(item) {
                emit('update:activedItem', item)
                emit('change', item)
            },
        })

        // 容器样式
        const wrap_style$ = computed(() => {
            const width = isNumber(props.width) ? `${ props.width }px` : props.width
            return { width, minWidth: width }
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
                desc : prop?.desc  || 'desc',
            }
        })

        onMounted(() => {
            props.enableDargSort && createSortable()
        })

        // 监听数据变化，更新当前激活项
        watch(() => props.data, (data) => {
            state.list          = getData(data)
            actived_item$.value = getDefaultActiveItem(data)
        })

        // 监听激活项更改检查可视区域
        watch(actived_item$, scrollIntoView)

        // 取得当前列表数据
        function getData(data: any[]) {
            return isFunction(props.filterMethod) ? props.filterMethod(data) : data
        }

        // 取得默认激活项
        function getDefaultActiveItem(data: any[]) {
            // 无数据
            if (!data.length) return null

            // 无默认值
            if (!actived_item$.value) return props.autoActive ? data[0] : null // 检查是否开启自动激活项

            // 检查数据是否正确
            const key  = prop$.value.value
            const item = data.find(item => item[key] === actived_item$.value![key])
            if ( !item ) return props.autoActive ? data[0] : null // 检查是否开启自动激活项
            return item
        }

        // 创建排序
        function createSortable() {
            const content_wrap_cls = '.sd-category-list__body .el-scrollbar__wrap .el-scrollbar__view'
            const el = wrap_ref.value.querySelector(content_wrap_cls)
            if ( !el ) return

            new Sortable(el as HTMLElement, {
                animation    : 150,
                handle       : '.sd-category-list-item',
                forceFallback: true,
                ...props.dargSortConfig,
                onEnd        : async (event: any) => {
                    const newIndex = event.newIndex as number
                    const oldIndex = event.oldIndex as number

                    // 未移动位置不处理
                    if (newIndex === oldIndex) return

                    state.origin_list = [...state.list]
                    const drag_row = state.list.splice(oldIndex, 1)[0]
                    drag_row && state.list.splice(newIndex, 0, drag_row)

                    const emit_parmas = {
                        newIndex,
                        oldIndex,
                        oldData: state.origin_list,
                        newData: state.list,
                    }
                    emit('sort-end', emit_parmas)
                },
            })
        }

        // 设置列表激活项
        function setActiveItem(active_item: any) {
            actived_item$.value = active_item
        }

        // 滚动激活列表项至可视范
        let timer: ReturnType<typeof setTimeout>
        function scrollIntoView(active_item: any) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                nextTick(() => {
                    if (!active_item) return

                    const $scroll = scrollbar_ref.value
                    if ( !$scroll ) return

                    // 当容器可视高度为0,表示不是当前显示页面
                    const wrap_h = $scroll.wrapRef.clientHeight
                    if ( !wrap_h ) return

                    const item  = $scroll.wrapRef.querySelector('.sd-category-list-item.is-active')
                    if ( !item ) return

                    const visible_top = state.scroll_top
                    const visible_end = state.scroll_top + wrap_h
                    const item_top    = item.offsetTop
                    const item_end    = item.offsetTop + item.clientHeight

                    if (item_top < visible_top) {
                        $scroll.setScrollTop(item_top)
                    } else if (item_end > visible_end) {
                        $scroll.setScrollTop(item_end - wrap_h)
                    }
                })
            }, 5)
        }

        // 监听当前点击项
        function onClick(item: any, index: number) {
            if (props.disabled) return

            actived_item$.value = item
            scrollIntoView(item)
            emit('click-item', { item, index })
        }

        // 监听滚动
        function onScroll(detail: { scrollTop: number }) {
            state.scroll_top = detail.scrollTop
            emit('scroll', detail)
        }

        // ----------------------------------------------------------------------------------

        // 还原上次排序
        function restoreSort() {
            if (state.origin_list.length) {
                state.list = state.origin_list
            }
        }

        return {
            ...toRefs(state),
            scrollbar_ref,
            wrap_ref,
            actived_item$,
            wrap_style$,
            prop$,
            onScroll,
            onClick,
            scrollIntoView,
            setActiveItem,
            restoreSort,
        }
    },
})
</script>

<template>
    <div ref="wrap_ref" class="sd-category-list" :class="{ 'is-empty': !list.length }" :style="[wrap_style$]">
        <!-- 顶部区域 -->
        <div
            v-if="showHeader"
            class="sd-category-list__header"
            :class="[headerClass, { 'sd-category-list__header--border': headerBorderd }]"
            :style="headerStyle"
        >
            <slot name="header">
                {{ title }}
            </slot>
        </div>

        <!-- 内容区域 -->
        <ElScrollbar
            ref="scrollbar_ref"
            class="sd-category-list__body"
            v-bind="scrollbarConfig"
            @scroll="onScroll"
        >
            <div v-if="!list.length" class="sd-category-list__empty" :style="emptyStyle">
                <ElEmpty :description="emptyText" v-bind="emptyConfig">
                    <slot name="empty" />
                </ElEmpty>
            </div>
            <template v-else>
                <div
                    v-for="(item, index) in list" :key="item[prop$.value]" :data-id="item[prop$.value]"
                    class="sd-category-list-item"
                    :class="{
                        'is-active'                     : actived_item$ && item[prop$.value] === actived_item$[prop$.value],
                        'sd-category-list-item--default': !$slots.item,
                    }"
                    :style="itemStyle"
                    @click="onClick(item, index)"
                >
                    <slot
                        name="item"
                        :item="item"
                        :index="index"
                        :actived="actived_item$ && item[prop$.value] === actived_item$[prop$.value]"
                    >
                        <slot name="item-prefix"  :item="item" :index="index">
                            <SdIcon
                                v-if="item[prop$.icon]"
                                :name="item[prop$.icon]"
                                class="sd-category-list-item__icon"
                            />
                        </slot>

                        <div class="sd-category-list-item__content">
                            <div>
                                <span>{{ item[prop$.label] }}</span>
                                <span v-if="showCount && item[prop$.count]">
                                    ({{ item[prop$.count] }})
                                </span>
                            </div>
                            <div v-if="showDesc && item[prop$.desc]" class="sd-category-list-item__desc">
                                {{ item[prop$.desc] }}
                            </div>
                        </div>

                        <slot name="item-suffix" :item="item" :index="index" />
                    </slot>
                </div>
            </template>
        </ElScrollbar>

        <!-- 列表底部区域 -->
        <div
            v-if="showFooter"
            class="sd-category-list__footer"
            :class="[footerClass, { 'sd-category-list__footer--border': footerBorderd }]"
            :style="footerStyle"
        >
            <slot name="footer" />
        </div>
    </div>
</template>
