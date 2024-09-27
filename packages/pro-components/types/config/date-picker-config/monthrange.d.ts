export declare function getShortcuts(): {
    text: string;
    value: Date[];
}[];
declare const _default: {
    /** 选择范围时的分隔符 */
    rangeSeparator: string;
    /** 范围选择时开始月份的占位内容 */
    startPlaceholder: string;
    /** 范围选择时结束月份的占位内容 */
    endPlaceholder: string;
    /** 选中月份范围的格式 */
    valueFormat: string;
    /** 快捷方式 */
    shortcuts: {
        text: string;
        value: Date[];
    }[];
};
export default _default;
