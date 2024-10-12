import type { SdProTableDefineTypes } from '../types';
export declare const loadColumnByCache: (config?: SdProTableDefineTypes.CacheConfig) => string[] | null;
export declare const saveColumnToCache: (value: string[], config?: SdProTableDefineTypes.CacheConfig) => void;
