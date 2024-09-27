<script lang="ts">
import { defineComponent, computed } from 'vue'
import { ElButton, ElButtonGroup } from 'element-plus'
import { sdDateButtonGroupEmits, sdDateButtonGroupProps } from './date-button-group'

export default defineComponent({
    name      : 'SdDateButtonGroup',
    components: { ElButton, ElButtonGroup },
    props     : sdDateButtonGroupProps,
    emits     : sdDateButtonGroupEmits,
    setup(props, { emit }) {
        const DATE_TYPE = {
            year: [
                { prop: 'prev_year', label: '去年' },
                { prop: 'curr_year', label: '今年' },
                { prop: 'next_year', label: '明年' },
            ],
            month: [
                { prop: 'prev_month', label: '上月' },
                { prop: 'curr_month', label: '本月' },
                { prop: 'next_month', label: '下月' },
            ],
            week: [
                { prop: 'prev_week', label: '上周' },
                { prop: 'curr_week', label: '本周' },
                { prop: 'next_week', label: '下周' },
            ],
            day: [
                { prop: 'prev_day', label: '上日' },
                { prop: 'curr_day', label: '今日' },
                { prop: 'next_day', label: '下日' },
            ],
        }

        const options$ = computed(() => {
            switch (props.type) {
                case 'year' : return DATE_TYPE.year
                case 'month': return DATE_TYPE.month
                case 'week' : return DATE_TYPE.week
                default     : return DATE_TYPE.day
            }
        })

        function handleClick(item: { prop: string; label: string }) {
            emit('click'  , item)
            emit(item.prop, item)
        }

        return { options$,  handleClick }
    },
})
</script>

<template>
    <ElButtonGroup>
        <slot name="prepend" />
        <ElButton
            v-for="(item, idx) in options$"
            :key="idx"
            v-bind="item"
            :disabled="disabled"
            @click.stop="handleClick(item)"
        >
            {{ item.label }}
        </ElButton>
        <slot name="append" />
    </ElButtonGroup>
</template>
