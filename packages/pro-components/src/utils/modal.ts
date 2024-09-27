
let count = 0

// 增加弹窗总数
function plusModalCount() {
    count += 1
}

// 减少弹窗总数
function minusModalCount() {
    count -= 1
    if (count < 0) count = 0
}

// 取得弹窗数量
function getModalCount() {
    return count
}

// 是否有显示的弹窗
function hasVisibleModal() {
    return count > 0
}

export {
    plusModalCount,
    minusModalCount,
    getModalCount,
    hasVisibleModal,
}
