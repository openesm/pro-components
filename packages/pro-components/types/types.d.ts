export declare namespace OptionComponentTypes {
    interface PropConfig {
        label?: string;
        value?: string;
        count?: string;
        [key: string]: string | undefined;
    }
    type item = {
        label?: string;
        value?: string | number;
        count?: string | number;
        [key: string]: any;
    };
}
export type ComponentSizes = '' | 'default' | 'small' | 'large';
export type ComponentTypes = 'primary' | 'success' | 'warning' | 'danger' | 'error' | 'info';
export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
