<script lang="ts">
import { defineComponent, reactive, toRefs, computed, watch, onMounted, onUnmounted } from 'vue'

import { sdCountToProps, sdCountToEmits } from './count-to'
import {
    _requestAnimationFrame,
    _cancelAnimationFrame,
} from './animation'

export default defineComponent({
    name : 'SdCountTo',
    props: sdCountToProps,
    emits: sdCountToEmits,
    setup(props, { emit }) {
        const state = reactive({
            displayValue : '', // 显示值
            localStartVal: props.startVal, // 内部开始值
            localDuration: props.duration, // 动画时间
            printVal     : null as number | null,
            paused       : false, // 是否暂停
            startTime    : null as DOMHighResTimeStamp | null,
            timestamp    : null as DOMHighResTimeStamp | null,
            remaining    : null as number | null,
            rAF          : null as Function | null,
        })

        const count_down$ = computed(() => props.startVal > props.endVal)

        watch(() => props.startVal, () => { props.autoplay && start() })
        watch(() => props.endVal  , () => { props.autoplay && start() })

        onMounted(() => { props.autoplay && start() })
        onUnmounted(() => { _cancelAnimationFrame(state.rAF) })

        // 启动动画
        function start() {
            state.localStartVal = props.startVal
            state.localDuration = props.duration
            state.startTime     = null
            state.rAF           = _requestAnimationFrame(countAnimationCallback)
        }

        function pauseResume() {
            if (state.paused) {
                resume()
                state.paused = false
            } else {
                pause()
                state.paused = true
            }
        }

        // 暂停
        function pause() {
            _cancelAnimationFrame(state.rAF)
        }

        // 恢复
        function resume() {
            state.startTime = null
            state.localDuration = Number(state.remaining)
            state.localStartVal = Number(state.printVal)
            _requestAnimationFrame(countAnimationCallback)
        }

        // 重置
        function reset() {
            state.startTime = null
            _cancelAnimationFrame(state.rAF)
            state.displayValue = formatNumber(props.startVal)
        }

        // 动画回调函数
        function countAnimationCallback(timestamp: DOMHighResTimeStamp) {
            if (!state.startTime) state.startTime = timestamp

            state.timestamp = timestamp
            const progress = timestamp - state.startTime
            state.remaining = state.localDuration - progress

            if (props.useEasing) {
                if (count_down$.value) {
                    state.printVal = state.localStartVal - props.easingFn(progress, 0, state.localStartVal - props.endVal, state.localDuration)
                } else {
                    state.printVal = props.easingFn(progress, state.localStartVal, props.endVal - state.localStartVal, state.localDuration)
                }
            } else {
                if (count_down$.value) {
                    state.printVal = state.localStartVal - ((state.localStartVal - props.endVal) * (progress / state.localDuration))
                } else {
                    state.printVal = state.localStartVal + (props.endVal - state.localStartVal) * (progress / state.localDuration)
                }
            }

            if (count_down$.value) {
                state.printVal = (state.printVal as number) < props.endVal ? props.endVal : state.printVal
            } else {
                state.printVal = (state.printVal as number) > props.endVal ? props.endVal : state.printVal
            }

            state.displayValue = formatNumber(state.printVal as number)
            if (progress < state.localDuration) {
                state.rAF = _requestAnimationFrame(countAnimationCallback)
            } else {
                emit('callback')
            }
        }

        // 格式化数字
        function formatNumber(num: number) {
            const value = `${ num.toFixed(props.decimals)  }`

            const x   = value.split('.')
            let x1    = x[0] || ''
            const x2  = x.length > 1 ? props.decimal + x[1] : ''
            const rgx = /(\d+)(\d{3})/

            if (props.separator && !isNumber(props.separator)) {
                while (rgx.test(x1)) {
                    x1 = x1?.replace(rgx, `$1${ props.separator }$2`)
                }
            }

            return `${ props.prefix }${ x1 }${ x2 }${ props.suffix }`
        }

        // 是否传入数字分隔符
        function isNumber(val: string) {
            return !isNaN(parseFloat(val))
        }

        return {
            ...toRefs(state),
            pauseResume,
            reset,
            start,
            pause,
            resume,
        }
    },
})
</script>

<template>
    <span>
        {{ displayValue }}
    </span>
</template>
