<script lang="ts">
/** 顶部区域按钮配置 */

import type { PropType } from 'vue'
import type { SdProTableDefineTypes } from '../types'

import { defineComponent, computed, inject } from 'vue'
import { ElButton, ElIcon, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { ArrowDown             } from '@element-plus/icons-vue'
import { isFunction, isBoolean } from 'lodash-es'
import { sdProTableKey         } from '../token'

export default defineComponent({
    name      : 'HeaderButtons',
    components: {
        ElButton,
        ElIcon,
        ArrowDown,
        ElDropdown,
        ElDropdownMenu,
        ElDropdownItem,
    },
    props: {
        data: { type: Array as PropType<SdProTableDefineTypes.HeaderButtonItem[]>, default: () => [] },
    },
    setup(props) {
        // 根组件上下文
        const sdProTableCtx = inject(sdProTableKey)!

        // 普通按钮
        const buttons$ = computed(() => {
            return props.data.filter(item => !item.more).filter(item => !isHidden(item))
        })

        // 更多按钮
        const more_buttons$ = computed(() => {
            return props.data.filter(item => item.more).filter(item => !isHidden(item))
        })

        // 是否禁用
        function isDisabled(item: { disabled?: boolean | Function }) {
            if (isFunction(item.disabled)) {
                return item.disabled()
            } else {
                return isBoolean(item.disabled) ? item.disabled : false
            }
        }

        // 是否隐藏
        function isHidden(item: { hidden?: boolean | Function }) {
            if (isFunction(item.hidden)) {
                return item.hidden()
            } else {
                return isBoolean(item.hidden) ? item.hidden : false
            }
        }

        // 处理点击
        function handleClick(item: SdProTableDefineTypes.HeaderButtonItem) {
            const params = { $item: item, $proTable: sdProTableCtx }
            sdProTableCtx.emit('header-button-click', params)

            if (isFunction(item.handle)) item.handle(params)
        }

        return {
            buttons$,
            more_buttons$,
            isDisabled,
            isHidden,
            handleClick,
        }
    },
})
</script>

<template>
    <!-- 常规按钮 -->
    <ElButton
        v-for="(item, _idx) in buttons$"
        :key="item.id || `action_${ _idx }`"
        :disabled="isDisabled(item)"
        v-bind="item.props"
        @click="handleClick(item)"
    >
        {{ item.name }}
    </ElButton>

    <!-- 更多按钮 -->
    <ElDropdown v-if="more_buttons$.length">
        <ElButton style="margin: 0 12px;">
            <span style="margin-right: 5px;">更多操作</span>
            <ElIcon><ArrowDown /></ElIcon>
        </ElButton>
        <template #dropdown>
            <ElDropdownMenu>
                <ElDropdownItem
                    v-for="(item, _idx) in more_buttons$"
                    :key="item.id || `more_action_${ _idx }`"
                    :disabled="isDisabled(item)"
                    v-bind="item.props"
                    style="min-width: 74px;"
                    @click.prevent="handleClick(item)"
                >
                    {{ item.name }}
                </ElDropdownItem>
            </ElDropdownMenu>
        </template>
    </ElDropdown>
</template>
