import type { App } from 'vue';
import type { DeepPartial } from '../types';
import type { SdDatePickerProps } from '../components/date-picker/src/date-picker';
declare const config: GlobalConfig;
type ModalType = 'message-box' | 'dialog' | 'drawer';
export interface GlobalConfig {
    app: null | App;
    components: {
        datePicker: Record<string, Partial<SdDatePickerProps>>;
        vxeTable: {
            cachePrefix: string | (() => string);
        };
    };
    event: {
        onModalShow: (type: ModalType, opts: Record<string, any>) => void;
        onModalHide: (type: ModalType, opts: Record<string, any>) => void;
    };
    plugins?: {
        echarts?: {
            require: () => Promise<any> | any;
        };
        jqxgrid?: {
            require: () => Promise<any> | any;
        };
        wangeditor?: {
            require: () => Promise<any> | any;
        };
    };
}
export declare function setConfig(customConfig?: DeepPartialGlobalConfig): void;
export type DeepPartialGlobalConfig = DeepPartial<GlobalConfig>;
export declare const globalConfig: GlobalConfig;
export default config;
