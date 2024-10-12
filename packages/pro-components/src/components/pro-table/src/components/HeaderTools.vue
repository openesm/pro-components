<script lang="ts">
import { defineComponent, h, inject } from 'vue'
import { ElTooltip, ElIcon } from 'element-plus'
import { sdProTableKey } from '../token'
import { isFunction } from 'lodash-es'

import {
    Refresh    as IconRefresh,
    FullScreen as IconFullScreen,
    Download   as IconDownload,
    Operation  as IconOperation,
} from '@element-plus/icons-vue'

export default defineComponent({
    name: 'HeaderTools',
    setup() {
        const sdProTableCtx = inject(sdProTableKey)!
        const { state: proTableState, props: proTableProps } = sdProTableCtx
        const { tools_config$ } = sdProTableCtx.getComputedMaps()

        // 渲染工具函数
        const renderToolButton = (content: string | (() => string), icon: any, handle: Function) => {
            return h(ElTooltip, {
                effect   : 'dark',
                content  : isFunction(content) ? content() : content,
                placement: proTableState.is_fullscreen ? 'bottom' : 'top',
            }, () => h(ElIcon, { size: 16, onClick: handle }, () => h(icon)))
        }

        // 工具：刷新按钮
        const renderRefresh = () => {
            if (tools_config$.value.enableRefresh) {
                return renderToolButton('刷新', IconRefresh, () => {
                    sdProTableCtx.emit('refresh', { $proTable: sdProTableCtx })
                })
            } else {
                return null
            }
        }

        // 工具：最大化按钮
        const renderFullscreen = () => {
            if (tools_config$.value.enableFullscreen) {
                return renderToolButton(() => proTableState.is_fullscreen ? '还原' : '最大化', IconFullScreen, () => {
                    sdProTableCtx.toggleMaximize()
                    sdProTableCtx.emit('zoom', { isFullscreen: proTableState.is_fullscreen, $proTable: sdProTableCtx })
                })
            } else {
                return null
            }
        }

        // 工具：最大化按钮
        const renderExport = () => {
            if (tools_config$.value.enableExport) {
                return renderToolButton('导出数据', IconDownload, () => {
                    sdProTableCtx.openExportSetting()
                })
            } else {
                return null
            }
        }

        // 工具：列设置
        const renderColumnSetting = () => {
            if (tools_config$.value.enableColumnSetting) {
                return renderToolButton('列设置', IconOperation, () => {
                    sdProTableCtx.openColumnSetting()
                })
            } else {
                return null
            }
        }

        return () => {
            if (!proTableProps.enableTools) return null

            const slot_tools_left  = sdProTableCtx.slots['header-tools-left']
            const slot_tools_right = sdProTableCtx.slots['header-tools-right']

            return h('div', { class: 'sd-pro-table-header__tools' }, [
                slot_tools_left  ? slot_tools_left({ $proTable: sdProTableCtx }) : null,
                renderRefresh(),
                renderFullscreen(),
                renderExport(),
                renderColumnSetting(),
                slot_tools_right ? slot_tools_right({ $proTable: sdProTableCtx }) : null,
            ])
        }
    },
})
</script>
