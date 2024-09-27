export type OptionValue = {
    label?: string;
    value?: string | number;
    [key: string]: any;
};
export declare const optionValue: OptionValue;
export type OptionWidthCountValue = OptionValue & {
    count?: number;
};
export declare const optionWithCountValue: {
    label: string;
    value: string;
    count: string;
};
export declare const componentSizes: readonly ["default", "small", "large"];
export type ComponentSize = typeof componentSizes[number];
export declare const componentTypes: readonly ["primary", "success", "warning", "danger", "error", "info"];
export type ComponentType = typeof componentTypes[number];
