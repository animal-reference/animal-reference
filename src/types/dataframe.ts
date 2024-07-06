export interface DataFrame<IndexType = number, ColumnValueType = number> {
    index: IndexType[];
    columns: {
        [columnName: string]: ColumnValueType[];
    };
}
