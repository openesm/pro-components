<script lang="ts">
import type { CSSProperties   } from 'vue'
import type { DatePickerProps } from 'element-plus'

import { defineComponent, computed             } from 'vue'
import { ElDatePicker                          } from 'element-plus'
import { isUndefined, isNumber, omit, defaults } from 'lodash-es'
import { sdDatePickerProps, sdDatePickerEmits, sdDatePickerOmitKeys } from './date-picker'
import { globalConfig } from '../../../config'

export default defineComponent({
    name      : 'SdDatePicker',
    components: { ElDatePicker },
    props     : sdDatePickerProps,
    emits     : sdDatePickerEmits,
    setup(props, ctx) {
        // 内部绑定值
        const internal_value$ = computed({
            get: () => props.modelValue,
            set: (val) => {
                ctx.emit('update:modelValue', val as string)
            },
        })

        // el-date-picker 属性配置
        const date_picker_props$ = computed(() => {
            return defaults(
                omit(props, ...sdDatePickerOmitKeys),
                globalConfig.components.datePicker[props.type || 'date'] || {},
            ) as Omit<DatePickerProps, 'modelValue'>
        })

        // el-date-picker 样式
        const date_pikcer_style$ = computed(() => {
            const styles = {} as CSSProperties
            const width  = props.width
            if (isUndefined(width)) return styles

            styles.width    = isNumber(props.width) ? `${ props.width }px` : props.width
            styles.flexGrow = 0
            return styles
        })

        return {
            internal_value$,
            date_picker_props$,
            date_pikcer_style$,
        }
    },
})
</script>

<template>
    <ElDatePicker
        v-model="internal_value$"
        v-bind="date_picker_props$"
        :style="[$attrs.style, date_pikcer_style$]"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
        @change="$emit('change', $event)"
        @calendar-change="$emit('calendar-change', $event)"
        @panel-change="$emit('panel-change', $event)"
        @visible-change="$emit('visible-change', $event)"
    />
</template>
