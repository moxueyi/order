const socket = new WebSocket("ws://127.0.0.1:10810/add?table=1");

socket.onopen = function () {
}

socket.onmessage = function (event) {
    let data = JSON.parse(event.data);
    if (data["menu"]) {
        console.log(data);
    } else if (data["table"]) {
        let tables = data["table"];
        console.log(tables);
    }
}

setTimeout(() => {
    socket.send("table 1 add " + "清蒸鲈鱼");
}, 5000);

setTimeout(() => {
    socket.send("table 1 add " + "清蒸鲈鱼");
}, 8000);

setTimeout(() => {
    socket.send("table 1 add " + "雪里红炒豆腐");
}, 10000);

setTimeout(() => {
    socket.send("table " + `${1} ` + "sub " + "雪里红炒豆腐");
}, 12000);
setTimeout(() => {
    socket.send("table 1 sub " + "雪里红炒豆腐");
}, 13000);

