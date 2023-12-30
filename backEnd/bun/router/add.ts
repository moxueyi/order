import table, { type tableType } from "../table";

/**
 * -1 num值无效, 0 创建table, 1 table已经存在
 */
function add(tables: tableType[], num: string | null): number {
    if (num == null) return -1;
    for (const item of tables) {
        if (item[num]) {
            return 1;
        }
    }

    tables.push({ [num]: { table: new table() } });
    return 0;
}

export default add;
