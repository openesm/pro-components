export type ListItem = {
    label: string;
    value: any;
};
type SummaryCheckboxListItem = {
    checkboxes: true;
    value: any[];
};
type SummaryRadioListItem = {
    checkboxes: false;
    value: any;
};
export type SummaryListItem = (SummaryCheckboxListItem | SummaryRadioListItem) & {
    width: string;
    height: string;
    items: ListItem[];
};
export {};
