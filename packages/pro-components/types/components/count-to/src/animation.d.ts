/**
 * requestAnimationFrame详解
 * https://www.jianshu.com/p/fa5512dfb4f5
 *
 * requestAnimationFrame 比 定时器运行动画的优势
 * - requestAnimationFrame 会将每帧中的所有 DOM操作集中，跟随浏览器的刷新频率在一次重绘或回流中完成
 * - 隐藏或不可见的元素，不会对其进行重绘和回流
 */
declare let _requestAnimationFrame: Function;
declare let _cancelAnimationFrame: Function;
export { _requestAnimationFrame, _cancelAnimationFrame, };
