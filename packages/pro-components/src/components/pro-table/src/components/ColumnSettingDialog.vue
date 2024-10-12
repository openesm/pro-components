<script lang="ts">
/**
 * 显示列设置弹窗
 */
import type { VxeTableDefines } from 'vxe-table'

import { defineComponent, computed, inject, ref } from 'vue'
import { ElScrollbar, ElTree, ElButton, ElAlert } from 'element-plus'
import { SdDialog          } from '../../../dialog'
import { showAlert         } from '../../../../services'
import { sdProTableKey     } from '../token'
import { saveColumnToCache } from '../tools'

export default defineComponent({
    name      : 'ColumnSettingDialog',
    components: {
        SdDialog,
        ElScrollbar,
        ElTree,
        ElButton,
        ElAlert,
    },
    props: { modelValue: { type: Boolean, default: false } },
    emits: ['update:modelValue', 'confirm'],
    setup(props, { emit }) {
        // 内部弹窗开关
        const internal_visible$ = computed({
            get: () => props.modelValue,
            set: (val) => {
                emit('update:modelValue', val)
            },
        })

        // 表格上下文
        const sdProTableCtx = inject(sdProTableKey)!

        // 组件数据
        const is_closed        = ref(!props.modelValue)
        const tree_ref         = ref()
        const tree_data        = ref([] as any[])
        const def_checked_keys = ref([] as string[])

        // 监听弹窗打开：初始化数据
        function onOpen() {
            is_closed.value        = false
            def_checked_keys.value = sdProTableCtx.getColumns().map(c => c.field)
            tree_data.value = [{
                id      : '__ALL__',
                name    : '所有列',
                children: getTreeColumns(),
            }]
        }

        function getTreeColumns() {
            const arr     = [] as { id: string; name: string; children: { id: string; name: string }[] }[]
            const columns         = sdProTableCtx.state.columns
            const data_column_ids = sdProTableCtx.state.all_data_column_ids

            const load = (cols: VxeTableDefines.ColumnOptions[], list: any[]) => {
                cols.forEach((c) => {
                    if ((!c.children || !c.children.length) && (!c.field || !data_column_ids.includes(c.field))) return

                    const name = c.field === '$seq' ? '#（序号）' : c.title!
                    const item = { id: c.field!, name, children: [] }
                    list.push(item)

                    if (c.children) load(c.children, item.children)
                })
            }
            load(columns, arr)
            return arr
        }

        // 重置
        function handleReset() {
            saveColumnToCache([], sdProTableCtx.props.cacheConfig)
            const { all_data_column_ids, def_visible_column_ids } = sdProTableCtx.state
            all_data_column_ids.forEach((id) => {
                if (def_visible_column_ids.includes(id)) {
                    sdProTableCtx.showColumn(id)
                } else {
                    sdProTableCtx.hideColumn(id)
                }
            })

            sdProTableCtx.loadSearchColumnIds(def_visible_column_ids)
            emit('update:modelValue', false)
        }

        // 确认
        async function handleConfirm() {
            const $tree = tree_ref.value
            if ( !$tree ) return
            const checked_keys = $tree.getCheckedKeys().filter((key: string) => key !== '__ALL__')
            if ( !checked_keys.length ) {
                showAlert('请至少选择一个列显示')
                return
            }

            sdProTableCtx.state.all_data_column_ids.forEach((id) => {
                if (checked_keys.includes(id)) {
                    sdProTableCtx.showColumn(id)
                } else {
                    sdProTableCtx.hideColumn(id)
                }
            })

            sdProTableCtx.loadSearchColumnIds(checked_keys)
            saveColumnToCache(checked_keys, sdProTableCtx.props.cacheConfig)
            emit('update:modelValue', false)
        }

        function onClosed() {
            is_closed.value = true
        }

        return {
            is_closed,
            tree_ref,
            tree_data,
            def_checked_keys,
            internal_visible$,
            onOpen,
            onClosed,
            handleReset,
            handleConfirm,
        }
    },
})
</script>

<template>
    <SdDialog
        v-model="internal_visible$"
        :append-to-body="false"
        :destroy-on-close="true"
        title="列设置"
        width="500px"
        @open="onOpen"
        @closed="onClosed"
    >
        <ElAlert type="warning" :closable="false" style="margin-bottom: 12px;">
            勾选您想要显示的列，未勾选的列将会隐藏
        </ElAlert>

        <ElScrollbar style="height: 300px; max-height: 300px; overflow: hidden;">
            <ElTree
                v-if="!is_closed"
                ref="tree_ref"
                :data="tree_data"
                :default-checked-keys="def_checked_keys"
                show-checkbox
                default-expand-all
                highlight-current
                check-on-click-node
                :expand-on-click-node="false"
                :props="{ label: 'name' }"
                node-key="id"
                empty-text="暂无可设置的列"
            />
        </ElScrollbar>

        <template #footer>
            <ElButton @click="handleReset">
                还原默认列设置
            </ElButton>
            <ElButton type="primary" @click="handleConfirm">
                保存当前列设置
            </ElButton>
        </template>
    </SdDialog>
</template>

