/**
 * 打开图片选择
 */
interface OpenFilePickerOptions {
    accept?: string;
    multiple?: boolean;
}
type OpenFilePickerReturn<T extends OpenFilePickerOptions> = T extends OpenFilePickerOptions ? T['multiple'] extends true ? File[] : File : File;
export declare function chooseImage<T extends OpenFilePickerOptions>(options?: T): Promise<OpenFilePickerReturn<T> | null>;
export {};
