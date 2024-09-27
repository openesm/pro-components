/* eslint-disable import/no-mutable-exports */
/**
 * requestAnimationFrame详解
 * https://www.jianshu.com/p/fa5512dfb4f5
 *
 * requestAnimationFrame 比 定时器运行动画的优势
 * - requestAnimationFrame 会将每帧中的所有 DOM操作集中，跟随浏览器的刷新频率在一次重绘或回流中完成
 * - 隐藏或不可见的元素，不会对其进行重绘和回流
 */

let _requestAnimationFrame = window.requestAnimationFrame as Function
let _cancelAnimationFrame  = window.cancelAnimationFrame  as Function


const _window = window as any
let prefix
const prefixes = 'webkit moz ms o'.split(' ') // 各浏览器前缀
for (let i = 0; i < prefixes.length; i++) {
    if (_requestAnimationFrame && _cancelAnimationFrame) { break }
    prefix = prefixes[i]
    _requestAnimationFrame = _window.requestAnimationFrame || _window[`${ prefix  }RequestAnimationFrame`]
    _cancelAnimationFrame  = _window.cancelAnimationFrame  || _window[`${ prefix  }CancelAnimationFrame`] || _window[`${ prefix  }CancelRequestAnimationFrame`]
}

// 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
let lastTime = 0
if (!_requestAnimationFrame || !_cancelAnimationFrame) {
    _requestAnimationFrame = function (callback: Function) {
        const currTime = new Date().getTime()
        // 为了使setTimteout的尽可能的接近每秒60帧的效果
        const timeToCall = Math.max(0, 16 - (currTime - lastTime))
        const id = window.setTimeout(() => {
            callback(currTime + timeToCall)
        }, timeToCall)
        lastTime = currTime + timeToCall
        return id
    }

    _cancelAnimationFrame = function (id: number) {
        window.clearTimeout(id)
    }
}

export {
    _requestAnimationFrame,
    _cancelAnimationFrame,
}
