import type { AppContext } from 'vue';
import type { FormItemRule } from 'element-plus';
export interface ProFormGlobalConfig {
    component: {
        [key: string]: {
            tag: string;
            type?: 'input' | 'select';
            props?: Record<string, any>;
        };
    };
    inputPlaceholderPrefix: string;
    selectPlaceholderPrefix: string;
    rulesConfig: Record<string, FormItemRule>;
    getAppContext?: () => AppContext;
}
export declare const globalConfig: ProFormGlobalConfig;
export declare const setupGlobalConfig: (options?: Partial<ProFormGlobalConfig>) => void;
export default globalConfig;
