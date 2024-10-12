import type { ElMessageBoxOptions } from 'element-plus';
/** messageBox 确认框等. */
export declare const showAlert: (message: string, title?: string, options?: ElMessageBoxOptions['type'] | ElMessageBoxOptions) => Promise<boolean>;
export declare const showConfirm: (message: string, title?: string, options?: ElMessageBoxOptions['type'] | ElMessageBoxOptions) => Promise<boolean>;
export declare const showPrompt: (message: string, title?: string, options?: ElMessageBoxOptions['type'] | ElMessageBoxOptions) => Promise<string | boolean>;
