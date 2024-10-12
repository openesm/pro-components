import type { SdProTableContext } from '../types';
import Sortable from 'sortablejs';
export declare const useTableSortable: ($proTable: SdProTableContext) => {
    $sortable: Sortable | undefined;
    initSortable: () => Promise<void>;
    setSortableOption: (key: keyof Sortable.Options, value: any) => void;
    getSortableOption: (key: keyof Sortable.Options) => string | number | boolean | HTMLElement | ((event: Sortable.SortableEvent) => void) | ((this: Sortable, event: Event | TouchEvent, target: HTMLElement, sortable: Sortable) => boolean) | ((event: Sortable.SortableEvent) => void) | ((evt: Sortable.SortableEvent, target: HTMLElement, dragEl: HTMLElement) => Sortable.Direction) | {
        x: number;
        y: number;
    } | Sortable.GroupOptions | {
        get: (sortable: Sortable) => string[];
        set: (sortable: Sortable) => void;
    } | ((dataTransfer: DataTransfer, draggedElement: HTMLElement) => void) | ((event: Sortable.SortableEvent) => void) | ((event: Sortable.SortableEvent) => void) | ((event: Sortable.SortableEvent) => void) | ((event: Sortable.SortableEvent) => void) | ((event: Sortable.SortableEvent) => void) | ((event: Sortable.SortableEvent) => void) | ((event: Sortable.SortableEvent) => void) | ((event: Sortable.SortableEvent) => void) | ((evt: Sortable.MoveEvent, originalEvent: Event) => boolean | void | 1 | -1) | ((evt: Sortable.SortableEvent) => void) | ((event: Sortable.SortableEvent) => void) | ((this: Sortable, offsetX: number, offsetY: number, originalEvent: Event, touchEvt: TouchEvent, hoverTargetEl: HTMLElement) => void | "continue") | ((event: Sortable.SortableEvent) => void) | ((evt: Sortable.SortableEvent) => void) | null | undefined;
    destroySortable: () => void;
};
