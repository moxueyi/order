import type table from "../table";
import add from "./add";

function router(tables: table[], url: URL) {
    switch (url.pathname) {
        case "/add":
            switch (add(tables, url.searchParams.get("table"))) {
                case -1:
                    console.log("创建失败, 无效的table编号或为空");
                    break;
                case 0:
                    console.log("成功创建table");
                    break;
                case 1:
                    console.log("创建失败, table已经存在");
                    break;
                default:
                    break;
            }

            break;
        default:
            break;
    }
}

export default router;