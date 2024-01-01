import router from "./router";
import type { dishTypes } from "./menu";
import { command, getOrder } from "./table";

let menu: dishTypes = await Bun.file("cookbook.json").json();
let tableUsers: { [No: string]: { count: number } }[] = [];

type tableServer = {
    No: string,
    table: string,
    status: number,
    users: number,
}

const server = Bun.serve<tableServer>({
    port: 10810,
    fetch(req, server) {
        const url = new URL(req.url);
        const success = router(req, server, url);

        // console.log(tables);

        return success
            ? undefined
            : new Response("WebSocket upgrade error", { status: 400 });

    },
    websocket: {
        open(ws) {

            // 分组
            ws.subscribe(`${ws.data.table}`);
            if (ws.data.status === 0) {
                tableUsers.push({ [`${ws.data.No}`]: { count: 1 } });
            } else if (ws.data.status === 1) {
                for (let item of tableUsers) {
                    if (item[`${ws.data.No}`]) {
                        item[`${ws.data.No}`].count++;
                        break;
                    }
                }
            }
        },

        message(ws, message) {
            let mess = message.toString().split(" ");
            console.log(mess);
            // console.log("the table is " + `${ws.data.table}`);

            if (mess.length > 0) {
                switch (mess[0]) {
                    case "menu":
                        ws.send(JSON.stringify(menu));
                        break;
                    case "order":
                        ws.send(getOrder(ws.data.No));
                        break;
                    case "table":
                        command(mess[1], mess[2], mess[3]);
                        ws.send(getOrder(ws.data.No));
                        ws.publish(`${ws.data.table}`, getOrder(ws.data.No));
                        break;
                    default:
                        break;
                }
            } else {
                ws.close();
            }
        },

        close(ws) {
            // 用户的退出点餐
            ws.unsubscribe(`${ws.data.table}`);
            for (let item of tableUsers) {
                if (item[`${ws.data.No}`]) {
                    item[`${ws.data.No}`].count--;
                    server.publish(`${ws.data.table}`, JSON.stringify(item));
                    break;
                }
            }

            console.log(`${ws.data.table}` + " user - 1.");
        },
    },
});

console.log(`Listening on ${server.hostname}:${server.port}`);
