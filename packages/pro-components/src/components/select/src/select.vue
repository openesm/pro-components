<script lang="ts">
import { defineComponent, computed         } from 'vue'
import { ElSelect, ElOption, ElOptionGroup } from 'element-plus'
import { sdSelectProps, sdSelectEmits, sdSelectOmitKeys } from './select'
import { omit } from 'lodash-es'

export default defineComponent({
    name      : 'SdSelect',
    components: { ElSelect, ElOption, ElOptionGroup },
    props     : sdSelectProps,
    emits     : [...sdSelectEmits, 'change-item'],
    setup(props, { emit }) {
        // 内部绑定值
        const internal_value$ = computed({
            get: () => props.modelValue,
            set: (val) => { emit('update:modelValue', val as string) },
        })

        // el-select 组件属性配置
        const select_props$ = computed(() => omit(props, ...sdSelectOmitKeys) as any)

        // 确保 label, value 含有默认值
        const prop$ = computed(() => {
            const _prop = props?.prop || {}
            return {
                label   : _prop?.label    || 'label',
                value   : _prop?.value    || 'value',
                disabled: _prop?.disabled || 'disabled',
            } as { label: string; value: string; disabled: string }
        })

        function onChange(val: string | number) {
            emit('change', val)

            const val_key = prop$.value.value
            if (props.group) {
                for (let i = 0; i < props.options.length; i++) {
                    const group = props.options[i]!
                    for (let j = 0; j < group.options.length; j++) {
                        const item = group.options[j]!
                        if (item[val_key] === val) {
                            emit('change-item', item)
                            return
                        }
                    }
                }
            } else {
                const item = props.options.find(item => item[val_key] === val )
                if (  item ) emit('change-item', item)
            }
        }

        return {
            internal_value$,
            select_props$,
            prop$,
            onChange,
        }
    },
})
</script>

<template>
    <ElSelect
        v-bind="select_props$"
        v-model="internal_value$"
        @change="onChange"
        @visible-change="$emit('visible-change', $event)"
        @remove-tag="$emit('remove-tag', $event)"
        @clear="$emit('clear')"
        @blur="$emit('blur', $event)"
        @focus="$emit('focus', $event)"
    >
        <slot v-if="$slots.prefix" name="prefix" />
        <slot v-if="$slots.empty" name="empty" />

        <!-- 扩展插槽 -->
        <slot v-if="$slots.prepend" name="prepend" />

        <template v-if="group">
            <ElOptionGroup
                v-for="group in options"
                :key="group.label"
                :label="group.label"
            >
                <ElOption
                    v-for="item in group.options"
                    :key="item[prop$.value]"
                    :label="item[prop$.label]"
                    :value="item[prop$.value]"
                    :disabled="!!item[prop$.disabled]"
                />
            </ElOptionGroup>
        </template>
        <template v-else>
            <ElOption
                v-for="item in options"
                :key="item[prop$.value]"
                :label="item[prop$.label]"
                :value="item[prop$.value]"
                :disabled="!!item[prop$.disabled]"
            />
        </template>

        <slot v-if="$slots.append" name="append" />
    </ElSelect>
</template>
