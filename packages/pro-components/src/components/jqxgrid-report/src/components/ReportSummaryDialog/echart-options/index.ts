import bar   from './bar'
import pie   from './pie'
import line  from './line'
import funnel from './funnel'

export function getChartOptions(type: string, rpt: any): any {
    switch (type) {
        case 'bar'   : return bar(rpt)
        case 'pie'   : return pie(rpt)
        case 'line'  : return line(rpt)
        case 'funnel': return funnel(rpt)
        default      : return {}
    }
}
