<script lang="ts">
import type { CheckboxGroupProps } from 'element-plus'
import { defineComponent, computed } from 'vue'
import { ElCheckboxButton, ElCheckbox, ElCheckboxGroup } from 'element-plus'
import { sdCheckboxGroupProps, sdCheckboxGroupEmits, sdCheckboxGroupOmitKeys } from './checkbox-group'
import { omit } from 'lodash-es'

export default defineComponent({
    name      : 'SdCheckboxGroup',
    components: { ElCheckboxGroup, ElCheckboxButton, ElCheckbox },
    props     : sdCheckboxGroupProps,
    emits     : sdCheckboxGroupEmits,
    setup(props, { emit }) {
        // 内部绑定值
        const internal_value$ = computed({
            get: () => props.modelValue,
            set: (val) => {
                emit('update:modelValue', val)
            },
        })

        // 确保 label, value 含有默认值
        const prop$ = computed(() => {
            const _prop = props?.prop || {}
            return {
                label: _prop?.label || 'label',
                value: _prop?.value || 'value',
            } as { label: string; value: string }
        })

        // el-checkbox-group 属性配置
        const checkbox_group_props$ = computed(() => {
            return omit(props, ...sdCheckboxGroupOmitKeys) as CheckboxGroupProps
        })

        return {
            internal_value$,
            prop$,
            checkbox_group_props$,
        }
    },
})
</script>

<template>
    <ElCheckboxGroup
        v-bind="checkbox_group_props$"
        v-model="internal_value$"
        @change="$emit('change', $event)"
    >
        <component
            :is="button ? 'ElCheckboxButton' : 'ElCheckbox'"
            v-for="item in options"
            :key="item[prop$.value]"
            :label="item[prop$.value] ?? item[prop$.label]"
            :disabled="item.disabled ?? false"
        >
            {{ item[prop$.label] }}
        </component>
    </ElCheckboxGroup>
</template>
