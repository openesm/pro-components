/**
 * 处理聚合函数
 */
import type { SdJqxgridTypes } from '../types';
export declare const aggregatesMap: Record<string, SdJqxgridTypes.AggregateCustomType | (() => SdJqxgridTypes.AggregateCustomType)>;
export declare const getAggregates: (aggs?: (SdJqxgridTypes.AggregateType | SdJqxgridTypes.AggregateCustomType)[]) => SdJqxgridTypes.AggregateCustomType[] | undefined;
export declare const aggregatesRenderer: (aggs: Record<string, string>) => string;
