/**
 * 水波纹指令
 *
 * vue-vben-admin ripple 实现
 * https://github.com/vbenjs/vue-vben-admin/blob/main/src/directives/ripple/index.ts
 *
 * Vue.js 自定义指令文档
 * https://cn.vuejs.org/guide/reusability/custom-directives.html
 */

import type { Directive } from 'vue'

import './index.scss'

/** 水波纹配置 */
interface RippleOptions {
    event     : string
    transition: number
}

/** 水波纹属性 */
interface RippleProto {
    background?: string
    zIndex?    : string
}

// 事件类型
type EventType = Event & MouseEvent & TouchEvent

// 默认配置
const options: RippleOptions = {
    event     : 'mousedown',
    transition: 400,
}

export const RippleDirective: Directive & RippleProto = {
    // 在元素被插入到 DOM 前调用
    beforeMount: (el: HTMLElement, biding) => {
        // 不启用水波纹效果
        if (biding.value === false) return

        const bg = el.getAttribute('ripple-background')

        setProps(Object.keys(biding.modifiers), options)

        const background = bg || RippleDirective.background
        const zIndex     = RippleDirective.zIndex

        el.addEventListener(options.event, (event) => {
            rippler({
                event: event as EventType,
                el,
                background,
                zIndex,
            })
        })
    },

    // 在绑定元素的父组件
    // 及他自己的所有子节点都更新后调用
    updated(el, binding) {
        if (!binding.value) {
            el?.clearRipple?.()
            return
        }

        const bg = el.getAttribute('ripple-background')
        el?.setBackground?.(bg)
    },
}

// 支持修饰符
function setProps(modifiers: string[], props: RippleOptions) {
    modifiers.forEach((item: string) => {
        if (isNaN(Number(item))) {
            props.event = item
        } else {
            props.transition = item as unknown as number
        }
    })
}

function rippler({
    event,
    el,
    zIndex,
    background,
}: { event: EventType; el: HTMLElement } & RippleProto) {
    const targe_border = parseInt(getComputedStyle(el).borderWidth.replace('px', ''))
    const client_x = event.clientX || event.touches[0]?.clientX || 0
    const client_y = event.clientY || event.touches[1]?.clientY || 0

    const rect = el.getBoundingClientRect()
    const { left, top } = rect
    const { offsetWidth: width, offsetHeight: height } = el
    const { transition } = options

    const dx = client_x - left
    const dy = client_y - top

    const max_x = Math.max(dx, width - dx)
    const max_y = Math.max(dy, height - dy)

    const style = getComputedStyle(el)
    const radius = Math.sqrt(max_x * max_x + max_y * max_y)
    const border = targe_border > 0 ? targe_border : 0

    const ripple = document.createElement('div')
    const ripple_container = document.createElement('div')

    ripple.className = 'ripple'

    Object.assign(ripple.style ?? {}, {
        marginTop      : '0px',
        marginLeft     : '0px',
        width          : '1px',
        height         : '1px',
        transition     : `all ${ transition }ms cubic-bezier(0.4, 0, 0.2, 1)`,
        borderRadius   : '50%',
        pointerEvents  : 'none',
        position       : 'relative',
        zIndex         : zIndex ?? '9999',
        backgroundColor: background ?? 'rgba(0, 0, 0, 0.12)',
    })

    ripple_container.className = 'ripple-container'
    Object.assign(ripple_container.style ?? {}, {
        position     : 'absolute',
        left         : `${ 0 - border }px`,
        top          : `${ 0 - border }px`,
        height       : '0',
        width        : '0',
        pointerEvents: 'none',
        overflow     : 'hidden',
    })

    const storedTargetPosition = el.style.position.length > 0 ? el.style.position : getComputedStyle(el).position

    if (storedTargetPosition !== 'relative') {
        el.style.position = 'relative'
    }

    ripple_container.appendChild(ripple)
    el.appendChild(ripple_container)

    Object.assign(ripple.style, {
        marginTop : `${ dy }px`,
        marginLeft: `${ dx }px`,
    })

    const {
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
    } = style

    Object.assign(ripple_container.style, {
        width    : `${ width }px`,
        height   : `${ height }px`,
        direction: 'ltr',
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
    })

    setTimeout(() => {
        const wh = `${ radius * 2 }px`
        Object.assign(ripple.style ?? {}, {
            width     : wh,
            height    : wh,
            marginLeft: `${ dx - radius }px`,
            marginTop : `${ dy - radius }px`,
        })
    }, 0)

    function clearRipple() {
        setTimeout(() => {
            ripple.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        }, 250)

        setTimeout(() => {
            ripple_container?.parentNode?.removeChild(ripple_container)
        }, 850)
        el.removeEventListener('mouseup', clearRipple, false)
        el.removeEventListener('mouseleave', clearRipple, false)
        el.removeEventListener('dragstart', clearRipple, false)
        setTimeout(() => {
            let clearPosition = true
            for (let i = 0; i < el.childNodes.length; i++) {
                if ((el.childNodes[i] as Record<string, any>).className === 'ripple-container') {
                    clearPosition = false
                }
            }

            if (clearPosition) {
                el.style.position = storedTargetPosition !== 'static' ? storedTargetPosition : ''
            }
        }, options.transition + 260)
    }

    if (event.type === 'mousedown') {
        el.addEventListener('mouseup', clearRipple, false)
        el.addEventListener('mouseleave', clearRipple, false)
        el.addEventListener('dragstart', clearRipple, false)
    } else {
        clearRipple()
    }

    (el as Record<string, any>).setBackground = (bgColor: string) => {
        if (!bgColor) {
            return
        }
        ripple.style.backgroundColor = bgColor
    }
}


