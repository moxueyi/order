import type { Server } from "bun";
import add from "./add";

function router(req: Request, server: Server, url: URL): boolean {
    switch (url.pathname) {
        case "/add":
            const No = url.searchParams.get("table");
            const table = "table " + No;
            const status = add(No);
            if (status === -1) {
                console.log("Creation failed, Invalid number or empty.");
            } else {
                if (status === 0) {
                    console.log("Created table.");
                } else {
                    console.log("Unable to create, The table has been created.");
                }
                return server.upgrade(req, { data: { No, table, status } });
            }
            break;
        default:
            break;
    }
    return false;
}

export default router;