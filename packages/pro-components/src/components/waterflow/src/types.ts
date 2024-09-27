
export namespace SdWaterflowTypes {
    export interface WaterflowItem {
        url    : string
        width  : number
        height : number
        title ?: string
    }

    export type ColumnItem = { height: number;  items: WaterflowItem[] }
}
