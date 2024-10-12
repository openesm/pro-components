import type { SdProTableFilterDefineTypes } from '../types';
/** 获取列筛选器过滤的数据 */
export declare function getfilterDataByColumnFilters(rows: any[], column_filters: SdProTableFilterDefineTypes.FilterItem[]): any[] | undefined;
export declare function compareByType(cv: string | number, iv: string | number, type?: SdProTableFilterDefineTypes.FilterconditionType): boolean;
