export declare namespace SdJqxgridReportTypes {
    export type SumarryType = 'group' | 'cross' | 'chart';
    interface SumarryCheckboxListItem {
        checkboxes: true;
        value: (string | number)[];
    }
    interface SumarryRadioListItem {
        checkboxes: false;
        value: string | number;
    }
    interface SummaryBaseListItem {
        width: string;
        height: string;
        items: {
            label: string;
            value: string | number;
        }[];
    }
    export type SummaryListItem = SummaryBaseListItem & (SumarryCheckboxListItem | SumarryRadioListItem);
    /** ReportData (自定义类型) */
    export interface ReportData {
        /** 报表名称       */ name: string;
        /** 报表标题       */ title: string;
        /** 列集合         */ cols: ColumnDefine[];
        /** 行集合         */ rows: (string | number | boolean)[][];
        /** 查询条件       */ filters: FilterDefine[];
        /** 是否显示过滤器 */ filterable?: boolean;
        /** 页数信息       */ page?: PageInfo;
        /** 是否显示序号   */ row_index?: boolean;
        /** 错误信息       */ err?: string;
        /** 透视表数组     */ pivots?: $stu_rpt_pivot[];
    }
    /** 透视表定义 */
    export interface $stu_rpt_pivot {
        /** 透视表编码 */ pivot_id: string;
        /** 透视表名称 */ pivot_name: string;
        /** 透视表内容 */ pivot_data: string;
        /** 报表编码   */ report_id: string;
        /** 商户编码   */ company_id: string;
        /** 用户编码   */ user_id: string;
        /** 创建时间   */ create_time: string;
        /** 更新时间   */ update_time: string;
    }
    /** ColumnDefine (自定义类型) */
    export interface ColumnDefine {
        /** 字段名称      */ name: string;
        /** 字段别名      */ alias?: string;
        /** 字段标题      */ text: string;
        /** 字段类型      */ type?: string;
        /** count计数字段 */ count?: string;
        /** sum合计字段   */ sum?: string;
        /** max最大值字段 */ max: string;
        /** min最小值字段 */ min?: string;
        /** 是否隐藏      */ hide?: boolean;
        /** 对齐方式      */ align?: string;
        /** 过滤类型      */ filtertype?: string;
        /** 聚合方式      */ aggs?: string[];
        /** 列宽度        */ width?: number;
        /** 格式化方式    */ format?: string;
        /** 映射数据      */ items?: ItemDefine[];
        /** 其它参数      */ option?: any;
    }
    /** FilterData (自定义类型) */
    export interface FilterData {
        /** 参数名 */ name: string;
        /** 参数值 */ value?: any;
    }
    /** FilterDefine (自定义类型) */
    export interface FilterDefine {
        /** 参数名称 */ name: string;
        /** 参数标题 */ title: string;
        /** 参数类型 */ type?: string;
        /** 模糊查询 */ like?: boolean;
        /** 默认值   */ value?: string;
        /** 映射数据 */ items?: ItemDefine[];
    }
    /** ItemDefine (自定义类型) */
    export interface ItemDefine {
        /** 编码 */ id: string;
        /** 名称 */ name: string;
    }
    /** PageInfo (自定义类型) */
    export interface PageInfo {
        /** 每页行数     */ size: number;
        /** 当前页码     */ index: number;
        /** 是否有下一页 */ next: boolean;
    }
    /** ReportDefine (自定义类型) */
    export interface ReportDefine {
        /** 报表名称         */ name: string;
        /** 报表标题         */ title: string;
        /** 每页行数         */ size?: number;
        /** 是否缓存         */ cache?: boolean;
        /** 查询语句         */ sql: string;
        /** 参数自定义       */ params?: object;
        /** 列定义           */ fields: ColumnDefine[];
        /** 列定义(不含隐藏) */ fieldx: ColumnDefine[];
        /** 查询条件         */ filters?: FilterDefine[];
        /** 是否显示过滤器   */ filterable?: boolean;
        /** 数据加工         */ _filter?: Function;
        /** 查询列           */ _fields?: string;
        /** 汇总列           */ _groups?: string;
    }
    /** ReportMenu (自定义类型) */
    export interface ReportMenu {
        /** 菜单名称 */ title: string;
        /** 路径     */ path: string;
        /** 显示序号 */ index?: number;
        /** 图标     */ icon?: string;
    }
    /** ReportMenuDefine (自定义类型) */
    export interface ReportMenuDefine extends ReportMenu {
        /** 下级菜单 */ children?: ReportMenu[];
    }
    export {};
}
