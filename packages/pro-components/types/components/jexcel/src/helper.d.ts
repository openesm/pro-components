import type { Ref } from 'vue';
import type { SdJexcelTypes } from './types';
import type { SdJexcelProps } from './jexcel';
interface DefineProJexcelOptions<T extends object = any> extends SdJexcelProps {
    data?: T[];
}
export declare function defineJexcel<T extends object = any>(options: DefineProJexcelOptions<T>): [Ref<SdJexcelTypes.PublicMethod<T>>, Required<DefineProJexcelOptions<T>>];
export {};
