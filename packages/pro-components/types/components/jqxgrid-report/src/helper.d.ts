export declare function exportCsv(options: {
    file_name: string;
    columns: {
        title: string;
        field: string | number;
        [key: string]: any;
    }[];
    data: any[];
}): boolean;
