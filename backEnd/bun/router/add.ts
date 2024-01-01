import tables from "../table";

/**
 * -1 num值无效, 0 创建table, 1 table已经存在
 */
function add(No: string | null): number {
    if (No == null) return -1;
    for (const item of tables) {
        if (item[No]) {
            return 1;
        }
    }

    tables.push({ [No]: { dishList: {} } });
    return 0;
}

export default add;
