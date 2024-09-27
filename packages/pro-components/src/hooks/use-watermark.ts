/**
 * v23.11.12
 * 设置水印
 */

import type { Ref } from 'vue'

import { getCurrentInstance, shallowRef, onBeforeUnmount, ref, onDeactivated } from 'vue'

interface WatermarkAttr {
    font     ?: string // 字体
    fillStyle?: string // 字体背景色
}

export const useWatermask = (
    wrap_el_ref: Ref<HTMLElement | null> = (ref(document.body)) as Ref<HTMLElement>,
) => {
    // 绘制文本背景图
    function createWatermaskBg(str: string, attr?: WatermarkAttr) {
        const canvas = document.createElement('canvas')
        const width  = 200
        const height = 140

        const canvas_2d = canvas.getContext('2d')
        if ( !canvas_2d ) return

        canvas_2d.rotate(-20 * Math.PI / 120)
        canvas_2d.font         = attr?.font ?? '12px Reggae One'
        canvas_2d.fillStyle    = attr?.fillStyle ?? 'rgba(0, 0, 0, 0.12)'
        canvas_2d.textAlign    = 'left'
        canvas_2d.textBaseline = 'middle'
        canvas_2d.fillText(str, width / 20, height)

        return canvas.toDataURL('image/png')
    }

    // 绘制水印层
    const id = Symbol('watermask').toString()
    const watermark_el_ref = shallowRef<HTMLElement>()
    function createWatermark(str: string, attr?: WatermarkAttr) {
        // 水印容器存在则更新
        const watermark_el = watermark_el_ref.value
        if (  watermark_el ) {
            updateWatermark({ str, attr })
            return id
        }

        // 初始化水印容器
        const div = document.createElement('div')
        watermark_el_ref.value = div

        div.id = id
        div.style.pointerEvents = 'none'
        div.style.top      = '0px'
        div.style.bottom   = '0px'
        div.style.left     = '0px'
        div.style.right    = '0px'
        div.style.position = 'absolute'
        div.style.zIndex   = '1000000'

        const wrap_el = wrap_el_ref.value
        if ( !wrap_el ) return

        updateWatermark({ str, attr })
        wrap_el.appendChild(div)

        return id
    }

    // 页面随窗口调整更新水印
    function updateWatermark(
        options: {
            width ?: number
            height?: number
            str   ?: string
            attr  ?: WatermarkAttr
        },
    ) {
        const watermark_el = watermark_el_ref.value
        if ( !watermark_el ) return

        if (typeof options.width  !== 'undefined') watermark_el.style.width  = `${ options.width  }px`
        if (typeof options.height !== 'undefined') watermark_el.style.height = `${ options.height }px`
        if (typeof options.str    !== 'undefined') {
            watermark_el.style.background = `
                url(${ createWatermaskBg(options.str, options.attr) }) left top repeat
            `
        }
    }

    // 设置水印
    function setWatermark(str: string, attr?: WatermarkAttr) {
        createWatermark(str, attr)

        const instance = getCurrentInstance()
        if ( !instance ) return

        onBeforeUnmount(() => {
            clearWatermark()
        })
    }

    // 清除水印
    function clearWatermark() {
        // 取出水印容器，并清除引用
        const watermark_el = watermark_el_ref.value
        watermark_el_ref.value = undefined

        // 取得外部容器移除水印
        const wrap_el = wrap_el_ref.value
        if ( !wrap_el ) return
        watermark_el && wrap_el.removeChild(watermark_el)
    }

    onDeactivated(clearWatermark)

    return {
        setWatermark,
        clearWatermark,
    }
}
