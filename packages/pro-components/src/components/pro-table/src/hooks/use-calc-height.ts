/**
 * v24.07.10
 * 监听容器变化,取得高度信息
 * - 未设置 vxe-grid 确定高度是引起卡顿原因之一
 */
import type { SdProTableContext } from '../types'
import { ref, nextTick, onMounted, onUnmounted } from 'vue'

export const useCalcHeight = ($proTable: SdProTableContext) => {
    const body_ref    = ref<HTMLDivElement>()
    const body_height = ref(0)
    let first_resize = true
    let $resizeObserver: ResizeObserver | null = null
    let timer: ReturnType<typeof setTimeout>

    onMounted(() => {
        const $container = body_ref.value
        if ( !$container ) return

        body_height.value = $container.clientHeight
        nextTick(() => {
            /**
             * 第一次未取得高度，渲染完重新获取一次
             * - eg: el-drawer 组件因过渡动画第一次获取高度为0
             */
            if (!body_height.value) {
                body_height.value = $container.clientHeight
            }
        })
        initResizeObserver($container)
    })

    onUnmounted(() => {
        $resizeObserver && body_ref.value && $resizeObserver.unobserve(body_ref.value)
        $resizeObserver = null
    })

    function initResizeObserver($container: HTMLDivElement) {
        $resizeObserver = new ResizeObserver(() => {
            if (first_resize) {
                first_resize = false
                return
            }

            /**
             * 切换路由页面时, clientHeight 为 0
             */
            nextTick(() => {
                const curr_height = $container.clientHeight
                if (curr_height) {
                    if (curr_height !== body_height.value) {
                        body_height.value = curr_height
                        clearTimeout(timer)
                        timer = setTimeout(() => {
                            $proTable.getVxeGrid()?.recalculate()
                        }, 5)
                    }
                }
            })
        })
        $resizeObserver.observe($container)
    }

    return {
        body_ref,
        body_height,
    }
}
