/**
 * 处理 jqxgrid 初始化
 */
import type { Ref } from 'vue';
import type { SdJqxgridTypes } from '../types';
import type { SdJqxgridProps } from '../jqxgrid';
export declare function initJqxGrid($: any, props: SdJqxgridProps, origin_col_map: Ref<Record<string, SdJqxgridTypes.ColumnOptions & {
    datafield: string;
}>>): {
    columns: SdJqxgridTypes.Column[];
    source: any;
    localization: {
        percentsymbol: string;
        currencysymbol: string;
        currencysymbolposition: string;
        decimalseparator: string;
        thousandsseparator: string;
        sortascendingstring: string;
        sortdescendingstring: string;
        sortremovestring: string;
        pagergotopagestring: string;
        pagershowrowsstring: string;
        pagerrangestring: string;
        pagerpreviousbuttonstring: string;
        pagernextbuttonstring: string;
        pagerfirstbuttonstring: string;
        pagerlastbuttonstring: string;
        groupsheaderstring: string;
        groupbystring: string;
        groupremovestring: string;
        filterclearstring: string;
        filterstring: string;
        filtershowrowstring: string;
        filterorconditionstring: string;
        filterandconditionstring: string;
        filterselectallstring: string;
        filterchoosestring: string;
        filterselectstring: string;
        filterstringcomparisonoperators: string[];
        filternumericcomparisonoperators: string[];
        filterdatecomparisonoperators: string[];
        filterbooleancomparisonoperators: string[];
        validationstring: string;
        emptydatastring: string;
        loadtext: string;
        clearstring: string;
        todaystring: string;
        firstDay: number;
        days: {
            names: string[];
            namesAbbr: string[];
            namesShort: string[];
        };
        months: {
            names: string[];
            namesAbbr: string[];
        };
        AM: string[];
        PM: string[];
        eras: {
            name: string;
            start: null;
            offset: number;
        }[];
        patterns: {
            d: string;
            D: string;
            t: string;
            T: string;
            f: string;
            F: string;
            M: string;
            Y: string;
        };
    };
    theme: string;
    width: string | undefined;
    height: string | undefined;
    columnsheight: number | undefined;
    rowsheight: number | undefined;
    autorowheight: boolean;
    columnsresize: boolean;
    sortable: boolean;
    editable: boolean;
    altrows: boolean;
    filterable: boolean | undefined;
    showfilterrow: boolean | undefined;
    clipboard: boolean;
    scrollmode: string;
    selectionmode: string;
    showstatusbar: boolean;
    showaggregates: boolean;
    statusbarheight: number;
    columngroups: SdJqxgridTypes.ColumnGroupItem[] | undefined;
};
