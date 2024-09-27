import { App } from 'vue';
import { DeepPartial } from '../types';
import { SdDatePickerProps } from '../components/date-picker/src/date-picker';

declare const config: GlobalConfig;
type ModalType = 'message-box' | 'dialog' | 'drawer';
export interface GlobalConfig {
    app: null | App;
    components: {
        datePicker: Record<string, Partial<SdDatePickerProps>>;
    };
    event: {
        onModalShow: (type: ModalType, opts: Record<string, any>) => void;
        onModalHide: (type: ModalType, opts: Record<string, any>) => void;
    };
}
export declare function setConfig(customConfig?: DeepPartialGlobalConfig): void;
export type DeepPartialGlobalConfig = DeepPartial<GlobalConfig>;
export declare const globalConfig: GlobalConfig;
export default config;
