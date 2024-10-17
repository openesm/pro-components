import type { PropType } from 'vue';
export declare const webdataRocksProps: {
    report: {
        type: PropType<any>;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    toolbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    customizeCell: {
        type: FunctionConstructor;
    };
};
export declare const webdataRocksEmits: string[];
