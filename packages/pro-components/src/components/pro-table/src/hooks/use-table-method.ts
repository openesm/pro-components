import type { SdProTableContext } from '../types'

import { nextTick } from 'vue'
export const useTableMethod = ($proTable: SdProTableContext) => {
    const { props, state, getVxeGrid } = $proTable

    // 清空查询 !!!
    function clearSearch() {
        state.search = ''
    }

    // 清空所有状态
    function clearAll() {
        clearSearch()
        clearFilter()
        getVxeGrid()?.clearAll()
    }

    // --- 操作 Tab 相关方法 --------------------------------------------------------------------------
    // 设置当前 tab
    function setActiveTab(value: string | number) { state.curr_tab = value }

    // 取得当前 tab
    function getActiveTab() { return state.curr_tab }

    // 指定 tab 项角标
    function setTabBadge(key: string | number, count: number) {
        state.tab_count_map[`${ key }`] = count
    }

    // 清空所有角标
    function clearTabBadge() {
        Object.keys(state.tab_count_map).forEach((key) => {
            Reflect.deleteProperty(state.tab_count_map, key)
        })
    }
    // ---------------------------------------------------------------------------------------------

    // --- 操作完整数据相关方法 --------------------------------------------------------------------

    // 加载数据并清空所有状态
    function reloadTableData<RowItem = any>(rows: RowItem[]) {
        clearAll()
        state.full_rows = rows
    }

    // 更新数据
    function setTableData(rows: any[]) {
        state.full_rows = rows
    }

    /** 获取表格相关数据 */
    function getTableData() {
        const { full_rows$, filter_rows$, visible_rows$ } = $proTable.getComputedMaps()
        const full_data    = full_rows$.value
        const filter_data  = filter_rows$.value
        const visible_data = visible_rows$.value
        return { full_data, filter_data, visible_data }
    }
    // ---------------------------------------------------------------------------------------------

    // --- 操作列相关方法 --------------------------------------------------------------------------
    // 显示列
    function showColumn(fieldOrColumn: any) { getVxeGrid()?.showColumn(fieldOrColumn) }

    // 隐藏列
    function hideColumn(fieldOrColumn: any) { getVxeGrid()?.hideColumn(fieldOrColumn) }

    // 通过字段名获取列信息
    function getColumnByField(field: string) { return getVxeGrid()?.getColumnByField(field) }

    // 获取表格当前可视的列 (非 tree)
    function getColumns() { return getVxeGrid()?.getColumns() }

    // 获取当前表格的列
    function getTableColumn() { return getVxeGrid()?.getTableColumn() || {} }

    // 加载列配置
    function loadColumn(columns: any[]) { return getVxeGrid()?.loadColumn(columns) }

    // 加载列配置并恢复到初始状态
    function reloadColumns(columns: any[]) { return getVxeGrid()?.reloadColumn(columns) }

    // 刷新列配置
    function refreshColumn() { return getVxeGrid()?.refreshColumn() }
    // ---------------------------------------------------------------------------------------------

    // --- 操作行相关方法 --------------------------------------------------------------------------
    // 插入一行或多行数据
    function insert(row: any | any[]) {
        state.full_rows.push(...(Array.isArray(row) ? row : [row]))
    }

    // 插入一行或多行数据至指定位置
    function insertAt(row: any | any[], rowIndex?: number) {
        const rows = Array.isArray(row) ? row : [row]
        if (rowIndex === -1) {
            state.full_rows.unshift(...rows)
        } else if (typeof rowIndex === 'number') {
            state.full_rows.splice(rowIndex, 0, ...rows)
        } else {
            state.full_rows.push(...rows)
        }
    }

    // 删除一行或多行数据
    function remove(row: any) {
        const idx = getRowIndex(row)
        if (idx !== -1) state.full_rows.splice(idx, 1)
    }

    // 替换或添加 !!!
    function replaceRow(old_row: any, new_row: any) {
        const idx = getRowIndex(old_row)
        if (idx !== -1) {
            state.full_rows.splice(idx, 1, new_row)
        } else {
            insert(new_row)
        }
    }

    // 取得指定行下标
    function getRowIndex(row: any, rows?: any[]) {
        // v24.02.20 使用唯一 key 标识查找数据
        const { rowKey, rowConfig } = props
        const row_key = rowKey || rowConfig?.keyField
        if (row_key) {
            return (rows ?? state.full_rows).findIndex(item => item[row_key] === row[row_key])
        } else {
            return (rows ?? state.full_rows).indexOf(row)
        }
    }

    // 设置当前激活行 !!!
    function setCurrentRow(row: any) {
        const $grid = getVxeGrid()
        if ( !$grid ) return

        nextTick(() => {
            const { filter_rows$ } = $proTable.getComputedMaps()

            const enablePager = props.enablePager
            const filter_rows = filter_rows$.value

            const idx = getRowIndex(row, filter_rows)
            if (idx === -1) return

            // 表格开启了分页模式
            if (enablePager) {
                state.page_index = parseInt(`${ idx / state.page_size }`, 10) + 1
            }

            setTimeout(() => {
                /**
                 * 当滚动距离过远将不起作用 v24.03.08
                 * https://gitee.com/xuliangzhan_admin/vxe-table/issues/I566PY?skip_mobile=true
                 */
                $grid.scrollToRow(row)
                $grid.setCurrentRow(row)
            }, 5)
        })
    }

    // 清空当前选中行
    function clearCurrentRow() { getVxeGrid()?.clearCurrentRow()  }

    // ---------------------------------------------------------------------------------------------

    // --- 操作过滤器相关方法 ----------------------------------------------------------------------
    // 设置过滤
    function setFilter(field: string) {
        getVxeGrid()?.setFilter(field, { checked: true } as any)
    }

    // 清空过滤
    function clearFilter() {
        state.column_filters = []
        getVxeGrid()?.clearFilter()
    }
    // ---------------------------------------------------------------------------------------------

    // --- 操作单选框行相关方法 --------------------------------------------------------------------
    // 获取单选框已选中的数据
    function getRadioRecord() {
        return getVxeGrid()?.getRadioRecord(false)
    }

    // 设置指定行单选框选中状态
    function setRadioRow<RowItem = any>(row: RowItem) {
        getVxeGrid()?.setRadioRow(row)
    }

    // 清空当前选中单选框
    function clearRadioRow() {
        getVxeGrid()?.clearRadioRow()
    }

    // 清空用户保留选中单选框
    function clearRadioReserve() {
        getVxeGrid()?.clearRadioReserve()
    }
    // ---------------------------------------------------------------------------------------------


    // --- 操作复选框行相关方法 --------------------------------------------------------------------
    // 获取复选框已选中的数据
    function getCheckboxRecords() {
        return getVxeGrid()?.getCheckboxRecords(false)
    }

    // 设置指定行复选框选中状态
    function setCheckboxRow<RowItem = any>(rows: RowItem | RowItem[], checked: boolean) {
        getVxeGrid()?.setCheckboxRow(rows, checked)
    }

    // 设置所有行复选框选中状态
    function setAllCheckboxRow(checked: boolean) {
        getVxeGrid()?.setAllCheckboxRow(checked)
    }

    // 切换所有行复选框状态
    function toggleAllCheckboxRow() {
        getVxeGrid()?.toggleAllCheckboxRow()
    }

    // 清空当前选中复选框
    function clearCheckboxRow() {
        getVxeGrid()?.clearCheckboxRow()
    }

    // 列头复选框是否全选
    function isAllCheckboxChecked() {
        return getVxeGrid()?.isAllCheckboxChecked()
    }

    // 列头复选框是否半选
    function isAllCheckboxIndeterminate() {
        return getVxeGrid()?.isAllCheckboxIndeterminate()
    }
    // ---------------------------------------------------------------------------------------------

    // --- 操作展开行相关方法 ------------------------------------------------------------------------
    // 指定行展开状态
    function setRowExpand(row: any, checked: boolean) { getVxeGrid()?.setRowExpand(row, checked) }

    // 指定所有行展开状态
    function setAllRowExpand(checked: boolean) { getVxeGrid()?.setAllRowExpand(checked) }

    // 切换指定行展开状态
    function toggleRowExpand<RowItem = any>(row: RowItem) { getVxeGrid()?.toggleRowExpand(row)  }
    // ---------------------------------------------------------------------------------------------

    // --- 操作滚动相关方法 ------------------------------------------------------------------------
    // 滚动至顶部 !!!
    let scroll_timer: ReturnType<typeof setTimeout>
    function scrollToTop() {
        clearTimeout(scroll_timer)

        const $grid = getVxeGrid()
        if ( !$grid ) return

        scroll_timer = setTimeout(() => {
            $grid.scrollTo(0, 0)
        }, 0)
    }

    function getScroll() { return getVxeGrid()?.getScroll() }   // 取得滚动状态
    function clearScroll() { getVxeGrid()?.clearScroll() }      // 清空滚动状态
    function refreshScroll() { getVxeGrid()?.refreshScroll() } // 刷新滚动
    // ---------------------------------------------------------------------------------------------

    // 切换全屏展示
    function toggleMaximize() { state.is_fullscreen = !state.is_fullscreen }
    function maximize() { state.is_fullscreen = true }
    function revert() { state.is_fullscreen = false }
    function isMaximized() { return state.is_fullscreen === true }

    // 开启或关闭导出
    function openExportSetting() { state.visible_export_dialog = true }
    function closeExportSetting() { state.visible_export_dialog = false }

    // 开启或关闭列设置
    function openColumnSetting() { state.visible_column_setting_dialog = true }
    function closeColumnSetting() { state.visible_column_setting_dialog = false }

    return {
        clearSearch,
        clearAll,
        // ----------------
        setActiveTab,
        getActiveTab,
        setTabBadge,
        clearTabBadge,
        // ----------------
        reloadTableData,
        setTableData,
        getTableData,
        // ----------------
        showColumn,
        hideColumn,
        getColumnByField,
        getColumns,
        getTableColumn,
        loadColumn,
        reloadColumns,
        refreshColumn,
        // ----------------
        insert,
        insertAt,
        remove,
        replaceRow,
        getRowIndex,
        setCurrentRow,
        clearCurrentRow,
        // ----------------
        clearFilter,
        setFilter,
        // ----------------
        getRadioRecord,
        setRadioRow,
        clearRadioRow,
        clearRadioReserve,
        // ----------------
        getCheckboxRecords,
        setCheckboxRow,
        setAllCheckboxRow,
        toggleAllCheckboxRow,
        clearCheckboxRow,
        isAllCheckboxChecked,
        isAllCheckboxIndeterminate,
        // ----------------
        setRowExpand,
        setAllRowExpand,
        toggleRowExpand,
        // ----------------
        scrollToTop,
        getScroll,
        clearScroll,
        refreshScroll,
        // ----------------
        toggleMaximize,
        maximize,
        revert,
        isMaximized,
        openExportSetting,
        closeExportSetting,
        openColumnSetting,
        closeColumnSetting,
    }
}
