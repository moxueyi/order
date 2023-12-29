const socket = new WebSocket("ws://127.0.0.1:10810/add?table=1");

socket.onopen = function () {
}

socket.onmessage = function (event) {
    let data = JSON.parse(event.data);
    console.log(data);
    let No = "1"
    if (data["menu"]) {
        console.log(data["menu"]);
    } else if (data["table"]) {
        console.log(data["table"]);
    } else {
        console.log(data[No]);
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

