<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent, computed } from 'vue'
import { ElSpace, ElButtonGroup, ElButton, ElDropdown, ElDropdownItem, ElDropdownMenu, ElIcon } from 'element-plus'
import { ArrowDown as IconArrowDown } from '@element-plus/icons-vue'
import utils from '../../../../../utils'

export default defineComponent({
    name      : 'ReportDate',
    components: {
        ElSpace,
        ElButtonGroup,
        ElButton,
        ElDropdown,
        ElDropdownMenu,
        ElDropdownItem,
        ElIcon,
        IconArrowDown,
    },
    props: {
        modelValue: { type: [String, Array] as PropType<string | string[]>, default: '' },
        disabled  : { type: Boolean, default: false },
        more      : { type: Boolean, default: true },
    },
    emits: ['update:modelValue', 'refresh'],
    setup(props, { emit }) {
        // 今天
        const today$ = computed(() => {
            return utils.dt.format(new Date(), 'M月D日')
        })

        // 昨天
        const yesterday$ = computed(() => {
            return utils.dt.format(utils.dt.prevDate(new Date(), 1), 'M月D日')
        })

        // 上周同日
        const same_week_day$ = computed(() => {
            return utils.dt.format(utils.dt.prevDate(new Date(), 7), 'M月D日')
        })

        // 上月同日
        const same_month_day$ = computed(() => {
            return utils.dt.format(utils.dt.prevMonthSameDate(new Date()), 'M月D日')
        })

        // 查询日
        const curr_day$ = computed(() => {
            const curr_date = Array.isArray(props.modelValue) ? props.modelValue[0]! : props.modelValue
            return utils.dt.format(curr_date, 'M月D日')
        })

        // 查询月
        const curr_month$ = computed(() => {
            const curr_date = Array.isArray(props.modelValue) ? props.modelValue[0]! : props.modelValue
            return utils.dt.format(curr_date, 'M月')
        })

        // 切换日期
        function handleDateBtnClick(item: { prop: string }) {
            let curr_date = ''
            if (Array.isArray(props.modelValue)) {
                curr_date = props.modelValue[0]!
            } else {
                curr_date = props.modelValue
            }
            if (!curr_date) return

            const today = utils.dt.format(new Date())
            switch (item.prop) {
                case 'today'          : setDate(today);                            break
                case 'yesterday'      : setDate(utils.dt.prevDate(today, 1));            break
                case 'same_week_day'  : setDate(utils.dt.prevDate(today, 7));            break
                case 'same_month_day' : setDate(utils.dt.prevMonthSameDate(today));      break
                case 'last_seven_days': setDate([utils.dt.prevDate(today, 6), today]);   break
                case 'prev_day'       : setDate(utils.dt.prevDate(curr_date));           break
                case 'curr_day'       : setDate(curr_date);                        break
                case 'next_day'       : setDate(utils.dt.nextDate(curr_date));           break
                case 'prev_month'     : {
                    const year  = utils.dt.getYear(curr_date)
                    const month = utils.dt.getMonth(curr_date)
                    const date  = utils.dt.newDate(year, month - 1, 1)
                    setDate([date, utils.dt.lastDateOfMonth(date)])
                    break
                }
                case 'curr_month': setDate([utils.dt.firstDateOfMonth(curr_date), utils.dt.lastDateOfMonth(curr_date)]); break
                case 'next_month': {
                    const year  = utils.dt.getYear(curr_date)
                    const month = utils.dt.getMonth(curr_date)
                    const date  = utils.dt.newDate(year, month + 1, 1)
                    setDate([date, utils.dt.lastDateOfMonth(date)])
                    break
                }
            }

            emit('refresh')
        }

        // 设置查询日期
        function setDate(date: string[] | string) {
            if (Array.isArray(props.modelValue)) {
                emit('update:modelValue', Array.isArray(date) ? date : [date, date])
            } else {
                emit('update:modelValue', Array.isArray(date) ? date[0]! : date)
            }
        }

        // 更多日期操作
        function handleCommand(command: string) {
            handleDateBtnClick({ prop: command })
        }

        return {
            today$,
            yesterday$,
            same_week_day$,
            same_month_day$,
            curr_day$,
            curr_month$,
            setDate,
            handleDateBtnClick,
            handleCommand,
        }
    },
})
</script>

<template>
    <ElSpace :size="10" alignment="center">
        <ElButtonGroup>
            <ElButton :disabled="disabled" @click="handleDateBtnClick({ prop: 'prev_day' })">
                上日
            </ElButton>
            <ElButton style="width: 80px;" :disabled="disabled" @click="handleDateBtnClick({ prop: 'curr_day' })">
                {{ curr_day$ }}
            </ElButton>
            <ElButton :disabled="disabled" @click="handleDateBtnClick({ prop: 'next_day' })">
                下日
            </ElButton>
        </ElButtonGroup>
        <ElButtonGroup>
            <ElButton :disabled="disabled" @click="handleDateBtnClick({ prop: 'prev_month' })">
                上月
            </ElButton>
            <ElButton style="width: 60px;" :disabled="disabled" @click="handleDateBtnClick({ prop: 'curr_month' })">
                {{ curr_month$ }}
            </ElButton>
            <ElButton :disabled="disabled" @click="handleDateBtnClick({ prop: 'next_month' })">
                下月
            </ElButton>
        </ElButtonGroup>
        <ElDropdown v-if="more" :disabled="disabled" @command="handleCommand">
            <ElButton :disabled="disabled">
                更多日期操作
                <ElIcon class="el-icon--right">
                    <IconArrowDown />
                </ElIcon>
            </ElButton>
            <template #dropdown>
                <ElDropdownMenu>
                    <ElDropdownItem command="today" :disabled="disabled">
                        今天 ({{ today$ }})
                    </ElDropdownItem>
                    <ElDropdownItem command="yesterday" :disabled="disabled">
                        昨天 ({{ yesterday$ }})
                    </ElDropdownItem>
                    <ElDropdownItem command="same_week_day" :disabled="disabled">
                        上周同日 ({{ same_week_day$ }})
                    </ElDropdownItem>
                    <ElDropdownItem command="same_month_day" :disabled="disabled">
                        上月同日 ({{ same_month_day$ }})
                    </ElDropdownItem>
                    <ElDropdownItem v-if="Array.isArray(modelValue)" command="last_seven_days" :disabled="disabled">
                        最近七天
                    </ElDropdownItem>
                </ElDropdownMenu>
            </template>
        </ElDropdown>
        <ElButtonGroup v-else>
            <ElButton :disabled="disabled" @click="handleDateBtnClick({ prop: 'today' })">
                今天
            </ElButton>
            <ElButton :disabled="disabled" @click="handleDateBtnClick({ prop: 'same_week_day' })">
                上周同日
            </ElButton>
            <ElButton :disabled="disabled" @click="handleDateBtnClick({ prop: 'same_month_day' })">
                上月同日
            </ElButton>
            <ElButton v-if="Array.isArray(modelValue)" :disabled="disabled" @click="handleDateBtnClick({ prop: 'last_seven_days' })">
                最近七天
            </ElButton>
        </ElButtonGroup>
    </ElSpace>
</template>
