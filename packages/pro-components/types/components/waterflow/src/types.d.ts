export declare namespace SdWaterflowTypes {
    interface WaterflowItem {
        url: string;
        width: number;
        height: number;
        title?: string;
    }
    type ColumnItem = {
        height: number;
        items: WaterflowItem[];
    };
}
