<script lang="ts">
import type { FormItemContext } from 'element-plus'

import { defineComponent,  reactive, watch, computed, ref, inject } from 'vue'
import { sdWeekTimeSelectProps, sdWeekTimeSelectEmits } from './week-time-select'
import { Close, CircleClose    } from '@element-plus/icons-vue'
import {
    formItemContextKey,
    ElIcon,
    ElButton,
    ElSpace,
    ElCheckbox,
    ElCheckboxGroup,
    ElTimePicker,
    ElForm,
    ElFormItem,
} from 'element-plus'

type SelectTime = {
    begin : string | undefined
    end   : string | undefined
    error?: string
}

type SelectTimeGroup = {
    is_all       : boolean
    indeterminate: boolean
    weekdays     : number[]
    times        : SelectTime[]
}

export default defineComponent({
    name      : 'SdWeekTimeSelect',
    components: {
        ElIcon,
        ElButton,
        ElSpace,
        ElCheckbox,
        ElCheckboxGroup,
        ElForm,
        ElFormItem,
        Close,
        CircleClose,
        ElTimePicker,
    },
    inheritAttrs: false,
    props       : sdWeekTimeSelectProps,
    emits       : sdWeekTimeSelectEmits,
    setup(props, { emit }) {
        const WEEK_DAY  = [
            { id: 1, label: '周一' },
            { id: 2, label: '周二' },
            { id: 3, label: '周三' },
            { id: 4, label: '周四' },
            { id: 5, label: '周五' },
            { id: 6, label: '周六' },
            { id: 7, label: '周日' },
        ]

        const elFormItem = inject(formItemContextKey, {} as FormItemContext)
        const formRef = ref()
        const state = reactive({
            curr_time      : '', // 保存当前拼接的时间组合
            select_times   : [] as SelectTimeGroup[],
            select_weekdays: [] as number[],
        })

        // 禁用星期选择（已分配完毕）
        const disabled_week_select$ = computed(() => {
            return state.select_weekdays.length === 7
        })

        // 监听外部时间字符串变化，进行解析和初始化
        watch(() => props.modelValue, (val: string) => {
            if (!val) {
                state.select_times = [getDefaultTimeGroup()]
            } else {
                // 相同时段组合字符串时，避免再次解析
                if (val !== 'invalid' && val !== state.curr_time) {
                    splitTimeStr(val)
                    updateSelectedWeekdays()
                }
            }
        }, { immediate: true })

        watch(
            () => props.modelValue,
            () => {
                elFormItem.validate?.('change').catch(err => console.error(err))
            },
        )

        // 监听内部时间变化，进行外部更新
        watch(() => state.select_times, () => {
            updateSelectedWeekdays()
            const new_val = joinTimeGroup()
            const old_val = state.curr_time

            state.curr_time = new_val
            emit('update:modelValue', new_val)
            emit('change', new_val, old_val)
        }, { immediate: true, deep: true })

        // 解析时间字符串
        function splitTimeStr(str: string) {
            /**
             * 1,1,1,1,0,0,0,01:01,06:39 |
             * 1,1,1,1,0,0,0,10:49,11:49 |
             * 1,1,1,1,0,0,0,14:58,20:49 |
             *
             * 0,0,0,0,1,1,1,03:03,07:59 |
             * 0,0,0,0,1,1,1,11:56,20:57
             */
            const reg       = /(\d,){7}\d\d:\d\d,\d\d:\d\d$/ // --> 1,1,1,1,0,0,0,01:01,06:39
            const times_str = str.split('|').filter(item => reg.test(item))
            if ( !times_str.length ) return

            const map: Record<string, SelectTimeGroup> = {}

            times_str.forEach((str) => {
                const weekday_str = str.slice(0 , 13)
                const begin       = str.slice(14, 19)
                const end         = str.slice(20)

                if (map[weekday_str]) {
                    map[weekday_str]!.times.push({ begin, end })
                } else {
                    const times   : SelectTimeGroup['times']    = [{ begin, end }]
                    const weekdays: SelectTimeGroup['weekdays'] = []
                    weekday_str.replace(/,/g,'').split('').forEach((item, index) => {
                        Number(item) && weekdays.push(index + 1)
                    })

                    map[weekday_str] = {
                        is_all       : weekdays.length === 7,
                        indeterminate: weekdays.length >= 1 && weekdays.length < 7,
                        weekdays     ,
                        times,
                    }
                }
            })

            const time_groups = Object.keys(map).map(key => map[key]!)
            time_groups.forEach((group) => { checkTimes(group.times || []) })  // 检查时段
            state.select_times = time_groups
        }

        // 拼接时间字符串
        function joinTimeGroup() {
            const list: string[] = []
            for (let i = 0; i < state.select_times.length; i++) {
                const time_group = state.select_times[i]!

                const weekdays = [1,2,3,4,5,6,7].map((weekday) => {
                    return time_group.weekdays.includes(weekday) ? 1 : 0
                })

                const weekdays_str = `${ weekdays.join(',') },`
                time_group.times.forEach((item) => {
                    const begin = item.begin || ''
                    const end   = item.end   || ''
                    list.push(`${ weekdays_str }${ begin },${ end }`)
                })
            }
            return list.join('|')
        }

        // 检查时间
        function checkTimes(times: SelectTime[]) {
            const list: { begin: string; end: string; error: string }[] = []
            for (let i = 0; i < times.length; i++) {
                const time  = times[i]!
                const begin = time.begin
                const end   = time.end

                if (!begin || !end) {
                    time.error = '时段不能为空'
                } else if (begin && end   === undefined) {
                    time.error = '结束时段不能为空'
                } else if (end   && begin === undefined) {
                    time.error = '起始时段不能为空'
                } else if (end <= begin) {
                    time.error = '结束时间需要大于起始时间'
                } else {
                    time.error = ''
                    list.push(time as { begin: string; end: string; error: string })
                }
            }

            // 根据开始时间顺序
            list.sort((a, b) => (a.begin > b.begin ? 1 : -1))

            // 检查时段重叠
            let step = 1
            const len  = list.length
            while (step < len) {
                for (let i = step; i <= len - 1; i++) {
                    const time_a = list[step - 1]!
                    const time_b = list[i]!
                    if (time_b.begin <= time_a.end) {
                        time_a.error = '时段含有重叠'
                        time_b.error = '时段含有重叠'
                    }
                }
                step += 1
            }
        }

        // 更新已选择过的星期
        function updateSelectedWeekdays() {
            const weekdays: number[] = []
            state.select_times.forEach((item) => {
                weekdays.push(...item.weekdays)
            })
            state.select_weekdays = weekdays
        }

        // 全选星期
        function onWeekdaysAllChange(is_all: string | number | boolean, item: SelectTimeGroup) {
            if (is_all) {
                item.weekdays = [1,2,3,4,5,6,7].filter(num => !state.select_weekdays.includes(num))
            } else {
                item.weekdays = []
            }
            item.is_all        = item.weekdays.length === 7
            item.indeterminate = item.weekdays.length >= 1 && item.weekdays.length < 7
        }

        // 单选星期
        function onWeekdaysChange(value: (string | number | boolean)[], item: SelectTimeGroup) {
            item.is_all        = value.length === 7
            item.indeterminate = value.length >= 1 && value.length < 7
        }

        // 添加一组时间
        function handleAddTimeGroup() {
            if (state.select_times.length >= 7) return
            state.select_times.push(getDefaultTimeGroup())
        }

        // 删除一组时间
        function handleDelTimeGroup(index: number) {
            state.select_times.splice(index, 1)
        }

        // 添加时段
        function handleAddTimeItem(item: SelectTimeGroup) {
            if (item.times.length >= 5) return

            item.times.push(getDefaultTime())
        }

        // 删除时段
        function handelDelTimeItem(item: SelectTimeGroup, index: number) {
            item.times.splice(index, 1)
            checkTimes(item.times)
        }

        // 获取默认时间组填充值
        function getDefaultTimeGroup() {
            return {
                is_all       : false,
                indeterminate: false,
                weekdays     : [] as number[],
                times        : [{ begin: '08:00', end: '22:00', error: '' }],
            }
        }

        // 获取默认时间填充值
        function getDefaultTime() {
            return {
                begin: undefined,
                end  : undefined,
                error: '',
            }
        }

        // 校验星期选择
        function validatorWeekdays(_rule: any, value: any, callback: any) {
            if (!value || !value.length) {
                callback(new Error('星期不能为空'))
            } else {
                callback()
            }
        }

        // 校验开始时段
        function validatorBeginTime(time: SelectTime, timeIndex: number, times: SelectTime[], callback: any) {
            formRef.value && formRef.value.validateField(`time.${ timeIndex }.end`, () => null)
            if (!time.begin) {
                callback(new Error('起始时段不能为空'))
            } else if (timeIndex > 0 && time.begin <= times[timeIndex - 1]!.end!) {
                callback('必须大于上一个结束时段')
            } else {
                callback()
            }
        }

        // 校验结束时段
        function validatorEndTime(time: SelectTime, callback: any) {
            if (!time.end) {
                callback(new Error('结束时段不能为空'))
            } else if (time.begin && time.end <= time.begin) {
                callback(new Error('结束时段必须大于起始时段'))
            } else {
                callback()
            }
        }

        // 外部触发校验
        async function validate() {
            return new Promise((resolve) => {
                formRef.value.validate((valid: boolean) => {
                    if (valid) {
                        formRef.value.clearValidate()
                    }
                    resolve(valid)
                })
            })
        }

        return {
            formRef,
            WEEK_DAY,
            state,
            disabled_week_select$,
            validate,
            validatorWeekdays,
            validatorBeginTime,
            validatorEndTime,
            checkTimes,
            onWeekdaysAllChange,
            onWeekdaysChange,
            handleAddTimeGroup,
            handleDelTimeGroup,
            handleAddTimeItem,
            handelDelTimeItem,
        }
    },
})
</script>

<template>
    <ElForm ref="formRef" :model="state">
        <div
            v-for="(item, index) in state.select_times"
            :key="`time-group-${ index }`" class="sd-week-time-select"
        >
            <ElCheckbox
                v-model="item.is_all"
                :disabled="item.weekdays.length === 0 && disabled_week_select$"
                :indeterminate="item.indeterminate"
                @change="onWeekdaysAllChange($event, item)"
            >
                全选
            </ElCheckbox>
            <ElFormItem
                :prop="`select_times.${ index }.weekdays`"
                :rules="[{ validator: validatorWeekdays, trigger: 'change' }]"
            >
                <ElCheckboxGroup v-model="item.weekdays" @change="onWeekdaysChange($event, item)">
                    <ElCheckbox
                        v-for="day in WEEK_DAY"
                        :key="day.id"
                        :label="day.id"
                        :disabled="!item.weekdays.includes(day.id) && state.select_weekdays.includes(day.id)"
                    >
                        {{ day.label }}
                    </ElCheckbox>
                </ElCheckboxGroup>
            </ElFormItem>
            <ElFormItem
                v-for="(time, timeIndex) in item.times"
                :key="`time-item-${ timeIndex }`"
            >
                <ElSpace :size="10" class="sd-week-time-select__time-item">
                    <ElFormItem
                        :prop="`time.${ timeIndex }.begin`"
                        :rules="[{
                            validator: (_rule: any, _value: any, callback: any) => { validatorBeginTime(time, timeIndex, item.times, callback) },
                            trigger  : 'change',
                        }]"
                    >
                        <ElTimePicker
                            v-model="time.begin"
                            :disabled="item.weekdays.length === 0 && disabled_week_select$"
                            format="HH:mm"
                            value-format="HH:mm"
                            style="width: 145px;"
                            @change="checkTimes(item.times)"
                        />
                    </ElFormItem>
                    <span>至</span>
                    <ElFormItem
                        :prop="`time.${ timeIndex }.end`"
                        :rules="[{
                            validator: (_rule: any, _value: any, callback: any) => { validatorEndTime(time, callback) },
                            trigger  : 'change',
                        }]"
                    >
                        <ElTimePicker
                            v-model="time.end"
                            :disabled="item.weekdays.length === 0 && disabled_week_select$"
                            format="HH:mm"
                            value-format="HH:mm"
                            style="width: 145px;"
                            @change="checkTimes(item.times)"
                        />
                    </ElFormItem>
                    <ElIcon
                        v-if="item.times.length > 1"
                        :size="18"
                        @click="handelDelTimeItem(item, timeIndex)"
                    >
                        <CircleClose />
                    </ElIcon>
                <!-- <span class="sd-week-time-select__time-item-error">{{ time.error }}</span> -->
                </ElSpace>
            </ElFormItem>
            <ElButton
                style="width: 145px;"
                @click="handleAddTimeItem(item)"
            >
                添加时间段
            </ElButton>
            <div
                v-if="state.select_times.length > 1"
                class="sd-week-time-select__close"
                @click="handleDelTimeGroup(index)"
            >
                <ElIcon><Close /></ElIcon>
            </div>
        </div>
        <div style="padding-bottom: 5px;">
            <ElButton type="primary" plain :disabled="disabled_week_select$" @click="handleAddTimeGroup">
                添加一组自定义时间组合
            </ElButton>
        </div>
    </ElForm>
</template>
