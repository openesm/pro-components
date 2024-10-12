interface ExportOptions {
    file_name: string;
    sheet_name?: string;
    columns: any[];
    data: any[];
}
export declare function xlsxExport(options: ExportOptions): Promise<void>;
export declare function csvExport(options: ExportOptions): void;
export declare function FileSaver(blob: Blob, download_name: string): void;
export {};
