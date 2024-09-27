<script lang="ts">
import type { RadioGroupProps } from 'element-plus'
import { defineComponent, computed } from 'vue'
import { ElRadioGroup, ElRadio, ElRadioButton, ElBadge } from 'element-plus'
import { sdRadioGroupProps, sdRadioGroupEmits, sdRadioGroupOmitKeys } from './radio-group'
import { omit } from 'lodash-es'

export default defineComponent({
    name      : 'SdRadioGroup',
    components: { ElRadioGroup, ElRadio, ElRadioButton, ElBadge },
    props     : sdRadioGroupProps,
    emits     : sdRadioGroupEmits,
    setup(props, { emit }) {
        // 内部绑定值
        const internal_value$ = computed({
            get: () => props.modelValue,
            set: (val) => { emit('update:modelValue', val as string) },
        })

        // 确保 label, value 含有默认值
        const prop$ = computed(() => {
            const _prop = props?.prop || {}
            return {
                label: _prop?.label || 'label',
                value: _prop?.value || 'value',
                count: _prop?.count || 'count',
            } as { label: string; value: string; count: string }
        })

        // el-radio-group 组件属性配置
        const radio_group_props$ = computed(() => {
            return omit(props, ...sdRadioGroupOmitKeys) as RadioGroupProps
        })

        return {
            internal_value$,
            prop$,
            radio_group_props$,
        }
    },
})
</script>

<template>
    <ElRadioGroup
        v-bind="radio_group_props$"
        v-model="internal_value$"
        @change="$emit('change', $event)"
    >
        <template v-if="button">
            <ElRadioButton
                v-for="item in options"
                :key="item[prop$.value]"
                :label="item[prop$.value] ?? item[prop$.label]"
                :disabled="item.disabled"
                :border="item.border"
                :size="item.size"
                :name="item.name"
            >
                {{ item[prop$.label] }}

                <ElBadge
                    v-if="showCount && (showCountZero ? (item[prop$.count] !== undefined) : item[prop$.count])"
                    :value="item[prop$.count]"
                    :style="badgeStyle"
                    :max="badgeMax"
                    style="position: absolute; right: -1px; transform: translateY(-65%);"
                />
            </ElRadioButton>
        </template>
        <template v-else>
            <ElRadio
                v-for="item in options"
                :key="item[prop$.value]"
                :label="item[prop$.value] ?? item[prop$.label]"
                :disabled="item.disabled"
                :border="item.border"
                :size="item.size"
                :name="item.name"
            >
                {{ item[prop$.label] }}

                <ElBadge
                    v-if="showCount && (showCountZero ? (item[prop$.count] !== undefined) : item[prop$.count])"
                    :value="item[prop$.count]"
                    :style="badgeStyle"
                    :max="badgeMax"
                />
            </ElRadio>
        </template>
    </ElRadioGroup>
</template>
