import type { EChartsType } from 'echarts/types/dist/shared'
import type * as Echarts from 'echarts'

interface PublicMethod {
    /** 获取实例 */
    getInstance: () => EChartsType | null
    /** 设置图表选项 */
    setOption  : EChartsType['setOption']
    /** 分片加载数据 */
    appendData : EChartsType['appendData']
    /** 清空图表 */
    clear      : EChartsType['clear']
    /** 销毁实例 */
    dispose    : EChartsType['dispose']
    /** 重置图表尺寸 */
    resize     : EChartsType['resize']
    /** 监听事件 */
    on         : EChartsType['on']
    /** 取消监听事件 */
    off        : EChartsType['off']
    /** 显示 Loading */
    showLoading: EChartsType['showLoading']
    /** 关闭 Loading */
    hideLoading: EChartsType['hideLoading']
}

export type SdEchartInitOptions = Parameters<typeof Echarts.init>[2]
export type SdEchartContext     = PublicMethod
