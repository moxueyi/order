import table from "../table";

/**
 * -1 num值无效, 0 创建table, 1 table已经存在
 */
function add(tables: table[], num: string | null): number {
    if (num === null) return -1;

    for (const table of tables) {
        if (table.getNo() === num) {
            return 1;
        }
    }

    tables.push(new table("table " + num));
    // console.log(tables);
    return 0;
}

export default add;
