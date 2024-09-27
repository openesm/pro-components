<script lang="ts">
import { defineComponent, reactive, computed, ref, watch, nextTick } from 'vue'
import { ElScrollbar, ElTree, ElEmpty } from 'element-plus'
import { SdIcon                       } from '../../icon'
import { sdTypeTreeProps              } from './type-tree'

function hasKey(list: any[], nodeKey: string, nodeVal: string | number | boolean) {
    if (!list || !nodeKey || !nodeVal) return false

    for (const item of list || []) {
        if (item[nodeKey] === nodeVal              ) return true
        if (hasKey(item.children, nodeKey, nodeVal)) return  true
    }

    return false
}

export default defineComponent({
    name      : 'SdTypeTree',
    components: { ElScrollbar, ElTree, ElEmpty },
    props     : sdTypeTreeProps,
    emits     : ['node-click', 'node-expand', 'node-collapse'],
    setup(props, { emit }) {
        const state = reactive({
            expand_key : '', // 当前展开行的key
            current_key: '', // 当前选中的 key
        })

        const wrapstyle$ = computed(() => {
            const width =  typeof props.width === 'number' ? `${ props.width }px` : props.width
            return { width, minWidth: width }
        })

        const prop$ = computed(() => {
            return {
                id      : props.prop?.id        || 'id',
                name    : props.prop?.name      || 'name',
                icon    : props.prop?.icon      || 'icon',
                children: props.prop?.children  || 'children',
            }
        })

        const treeRef = ref<any>(null)

        watch(() => props.list, async (newList: any[]) => {
            // 无列表数据
            if (!newList.length) {
                emit('node-click', null, null)
                return
            }

            await nextTick()
            const $tree = treeRef.value
            if ( !$tree ) return

            const isHas = hasKey(newList, props.nodeKey, state.current_key)
            if ( !isHas ) {
                state.current_key = newList[0] ? newList[0][props.nodeKey] : ''
                await nextTick()
            }

            // 如第一次无列表数据，tree组件未生成映射，数据变化时，nextTick获取更新后的数据
            const node = $tree.getNode(state.current_key)
            emit('node-click', node?.data, node)

            await nextTick()
            $tree.setCurrentKey(state.current_key)
        })

        // 内容渲染
        function handleRenderContent(h: Function, { data }: any) {
            const prop = prop$.value
            return (
                h('div', {
                    class: 'sd-ellipsis sd-ptb-10',
                }, [
                    data[prop.icon] ? h(SdIcon, { name: data[prop.icon], class: 'sd-mr-5'  }) : null,
                    data[prop.name],
                ])
            )
        }

        // 设置当前激活项 key
        function setCurrentKey(key: string) {
            const $tree = treeRef.value
            if ( !$tree ) return

            $tree.setCurrentKey(key)
        }

        // 设置当前激活项
        function setCurrent(key: string) {
            const $tree = treeRef.value
            if ( !$tree ) return

            state.current_key = key
            nextTick(() => {
                $tree.setCurrentKey(state.current_key)

                // 如第一次无列表数据，tree组件未生成映射，数据变化时，nextTick 获取更新后的数据
                const node = $tree.getNode(state.current_key)

                emit('node-click', node?.data, node)
            })
        }

        // 监听节点点击
        function onNodeClick(data: any, node: any, $vm: any) {
            emit('node-click', data, node, $vm)

            state.current_key = data[props.nodeKey]
        }

        // 监听节点展开
        function onNodeExpand(data: any, node: any, $vm: any) {
            emit('node-expand', data, node, $vm)

            state.expand_key = data[props.nodeKey]
        }

        // 监听节点收起
        function onNodeCollapse(data: any, node: any, $vm: any) {
            emit('node-collapse', data, node, $vm)

            const parent    = node.parent
            state.expand_key = parent ? parent.data[props.nodeKey] : ''
        }

        return {
            state,
            wrapstyle$,
            prop$,
            treeRef,
            handleRenderContent,
            onNodeClick,
            onNodeExpand,
            onNodeCollapse,

            setCurrentKey,
            setCurrent,
        }
    },
})
</script>

<template>
    <div class="sd-type-tree" :style="[wrapstyle$]">
        <div v-if="showHead" class="sd-type-tree__head sd-clear-fix" :class="[headClass]" :style="headStyle">
            <slot v-if="$slots.head" name="head" />
            <div v-else-if="title">
                {{ title }}
            </div>
        </div>
        <ElScrollbar v-if="list.length" class="sd-type-tree__body">
            <div class="sd-type-tree__main" :class="[mainClass]" :style="mainStyle">
                <ElTree
                    ref="treeRef"
                    :data="list"
                    :props="{ label: prop$.name, children: prop$.children, disabled: 'disabled' }"
                    :render-content="renderContent || handleRenderContent"
                    :node-key="nodeKey"
                    :accordion="accordion"
                    :default-expanded-keys="state.expand_key ? [state.expand_key] : []"
                    v-bind="$attrs"
                    @node-click="onNodeClick"
                    @node-expand="onNodeExpand"
                    @node-collapse="onNodeCollapse"
                />
            </div>
        </ElScrollbar>
        <div v-else class="sd-type-tree__empty">
            <ElEmpty :description="emptyText">
                <slot name="empty" />
            </ElEmpty>
        </div>
        <div v-if="showFoot" class="sd-type-tree__foot sd-clear-fix" :class="[footClass]" :style="footStyle">
            <slot name="foot" />
        </div>
    </div>
</template>
