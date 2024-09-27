<script lang="ts">
import type { InputProps } from 'element-plus'
import { defineComponent, computed, ref, watch } from 'vue'
import { ElInput                               } from 'element-plus'
import { sdInputPriceProps, sdInputPriceEmits, sdInputPriceOmitKeys } from './input-price'
import { isNumber, omit } from 'lodash-es'

export default defineComponent({
    name      : 'SdInputPrice',
    components: { ElInput },
    props     : sdInputPriceProps,
    emits     : sdInputPriceEmits,
    setup(props, { emit }) {
        const internal_value = ref<string>(`${ props.modelValue || '' }`)
        watch(() => props.modelValue, (value) => {
            internal_value.value = `${ value }`
        })

        // 内部绑定值
        const internal_value$ = computed({
            get: () => toPrice(internal_value.value),
            set: (value) => {
                const val = toPrice(value)
                // 不能超过设置最大金额
                if (isNumber(props.max) && Number(val) > props.max) return

                internal_value.value = val || ''
            },
        })

        // el-input 组件属性配置
        const input_props$ = computed(() => omit(props, ...sdInputPriceOmitKeys) as InputProps)

        // 转成金额格式
        function toPrice(val: string | number | null | undefined) {
            if (val === null || val === undefined) return undefined

            const idx = String(val).indexOf('.')

            let newVal = ''
            if (idx === -1) {
                newVal = String(val).replace(/[^0-9]/gi, '')
            } else {
                let start = String(val).slice(0, idx)
                start = String(start).replace(/[^[0-9\.]/gi, '')

                let end = String(val).slice(idx + 1)
                end = String(end).replace(/[^[0-9]/gi, '')
                end = end.slice(0, props.precision)

                newVal = `${ start || 0 }.${ end }`
            }

            return newVal
        }

        function onBlur(event: FocusEvent) {
            emit('blur', event)
            emit('update:modelValue', Number(internal_value.value))
        }

        return {
            internal_value,
            internal_value$,
            input_props$,
            onBlur,
        }
    },
})
</script>

<template>
    <ElInput
        v-bind="input_props$"
        v-model="internal_value$"
        @blur="onBlur"
        @focus="$emit('focus', $event)"
        @clear="$emit('clear')"
    >
        <template v-if="symbol || $slots.prefix" #prefix>
            <slot name="prefix">
                <span style="margin-right: 8px;">{{ symbol }}</span>
            </slot>
        </template>
        <template v-if="$slots.suffix" #suffix>
            <slot name="suffix" />
        </template>
        <template v-if="$slots.prepend" #prepend>
            <slot name="prepend" />
        </template>
        <template v-if="$slots.append" #append>
            <slot name="append" />
        </template>
    </ElInput>
</template>
