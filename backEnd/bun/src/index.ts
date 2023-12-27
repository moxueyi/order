import menu from "./menu";
import table from "./table";
import router from "./router";

let tables: table[] = [];

const server = Bun.serve({
    port: 10810,
    fetch(req, server) {
        // upgrade logic
        const upgraded = server.upgrade(req);
        if (!upgraded) {
            return new Response("Upgrade failed", { status: 400 });
        }

        const url = new URL(req.url);
        router(tables, url);
        console.log(tables.map((table) => {
            return table.getNo();
        }));

    },
    websocket: {
        open(ws) {
            ws.send(JSON.stringify(menu));
        },
        message(ws, message) {
            let mess = message.toString().split(" ");
            console.log(mess);

            ws.send(message);
            ws.send(JSON.stringify(tables));
        },
    },
});

console.log(`Listening on ${server.hostname}:${server.port}`);
