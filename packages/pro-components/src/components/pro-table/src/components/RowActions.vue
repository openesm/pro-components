<script lang="ts">
/** 行操作列 */

import type { PropType              } from 'vue'
import type { VxeColumnSlotTypes    } from 'vxe-table'
import type { SdProTableDefineTypes } from '../types'

import { defineComponent, computed, inject, ref } from 'vue'
import { ElIcon, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { More                   } from '@element-plus/icons-vue'
import { isFunction, isBoolean  } from 'lodash-es'
import { sdProTableKey          } from '../token'

export default defineComponent({
    name      : 'RowActions',
    components: {
        ElIcon,
        ElDropdown,
        ElDropdownMenu,
        ElDropdownItem,
        More,
    },
    props: {
        data  : { type: Array as PropType<SdProTableDefineTypes.OperationItem[]> , default: () => [] },
        params: { type: Object as PropType<VxeColumnSlotTypes.DefaultSlotParams> , required: true    },
    },
    setup(props) {
        // 根组件上下文
        const sdProTableCtx = inject(sdProTableKey)!
        const show_dropdown_menus = ref(false) // 懒加载显示渲染下拉菜单

        // 文字按钮
        const buttons$ = computed(() => {
            return props.data
                .filter(item => !item.more)
                .filter(item => !isHidden(item))
                .map(item => ({ ...item, disabled: isDisabled(item) }))
        })

        // 更多操作按钮
        const more_buttons$ = computed(() => {
            return props.data
                .filter(item => item.more)
                .filter(item => !isHidden(item))
                .map(item => ({ ...item, disabled: isDisabled(item) }))
        })

        // 是否禁用
        function isDisabled(item: SdProTableDefineTypes.OperationItem) {
            if (isFunction(item.disabled)) {
                return item.disabled(getCallbackParams(item))
            } else {
                return isBoolean(item.disabled) ? item.disabled : false
            }
        }

        // 是否隐藏
        function isHidden(item: SdProTableDefineTypes.OperationItem) {
            if (isFunction(item.hidden)) {
                return item.hidden(getCallbackParams(item))
            } else {
                return isBoolean(item.hidden) ? item.hidden : false
            }
        }

        // 取得回调参数
        function getCallbackParams(item: SdProTableDefineTypes.OperationItem) {
            return {
                $proTable   : sdProTableCtx,
                $item       : item,
                row         : props.params.row,
                column      : props.params.column,
                $columnIndex: props.params.$columnIndex,
                $rowIndex   : props.params.$rowIndex,
            }
        }

        // 监听按钮点击
        function handleClick(item: SdProTableDefineTypes.OperationItem) {
            // 按钮禁用不处理
            if (item.disabled) return

            // 处理
            const params = getCallbackParams(item)
            isFunction(item.handle) && item.handle(params)
            sdProTableCtx.emit('operation-click', params)
        }

        return {
            show_dropdown_menus,
            buttons$,
            more_buttons$,
            handleClick,
            isDisabled,
        }
    },
})
</script>

<template>
    <div class="sd-pro-table-row-options">
        <span
            v-for="(item, _idx) in buttons$"
            :key="item.id || `action_${ _idx }`"
            class="sd-pro-table-row-options__item"
            :class="{ 'is-disabled': item.disabled }"
            @click="handleClick(item)"
        >
            {{ item.name }}
        </span>

        <ElDropdown
            v-if="more_buttons$.length"
            trigger="hover"
            @visible-change="(val) => { show_dropdown_menus = val }"
        >
            <ElIcon><More /></ElIcon>
            <template #dropdown>
                <ElDropdownMenu v-if="show_dropdown_menus">
                    <ElDropdownItem
                        v-for="(item, _idx) in more_buttons$"
                        :key="item.id || `more_action_${ _idx }`"
                        :command="item.id"
                        :disabled="item.disabled"
                        @click.prevent="handleClick(item)"
                    >
                        {{ item.name }}
                    </ElDropdownItem>
                </ElDropdownMenu>
            </template>
        </ElDropdown>
    </div>
</template>
