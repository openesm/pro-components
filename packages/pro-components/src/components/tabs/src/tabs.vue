<script lang="ts">
import type { TabPaneName, TabsPaneContext, TabsProps } from 'element-plus'

import { defineComponent, computed                } from 'vue'
import { ElTabs, ElTabPane                        } from 'element-plus'
import { sdTabsProps, sdTabsEmits, sdTabsOmitKeys } from './tabs'
import { omit } from 'lodash-es'

export default defineComponent({
    name      : 'SdTabs',
    components: { ElTabs, ElTabPane },
    props     : sdTabsProps,
    emits     : sdTabsEmits,
    setup(props, { emit }) {
        // 内部绑定值
        const internal_value$ = computed({
            get: () => props.modelValue,
            set: (val) => { emit('update:modelValue', val as TabPaneName) },
        })

        // el-tabs 组件属性配置
        const tabs_props$ = computed(() => omit(props, ...sdTabsOmitKeys) as TabsProps)

        // 异构 tabPane 配置列表
        const options$ = computed(() => {
            const prop      = props.prop || {}
            const label_key = prop?.label || 'label'
            const value_key = prop?.value || 'value'
            const count_key = prop?.count || 'count'

            return props.options.map((item) => {
                const value = item[value_key]
                const count = item[count_key]

                let label = item[label_key]
                if (count) {
                    label += ` (${ count })`
                }

                return { ...item, label, value, count } as any
            })
        })

        const onTabClick = (pane: TabsPaneContext, ev: Event) => {
            emit('tabClick', pane, ev)
        }

        const onTabEdit = (paneName: TabPaneName | undefined, action: 'remove' | 'add') => {
            emit('edit', paneName, action)
        }

        return {
            internal_value$,
            tabs_props$,
            options$,
            onTabClick,
            onTabEdit,
        }
    },
})
</script>

<template>
    <ElTabs
        v-bind="tabs_props$"
        v-model="internal_value$"
        @tab-click="onTabClick"
        @tab-remove="$emit('tabRemove', $event)"
        @tab-add="$emit('tabAdd')"
        @tab-change="$emit('tabChange', $event)"
        @edit="onTabEdit"
    >
        <ElTabPane
            v-for="item in options$"
            v-bind="item"
            :key="item.value"
            :name="item.value || item.name"
        >
            <slot :name="item.slot || item.value" />
        </ElTabPane>
    </ElTabs>
</template>
