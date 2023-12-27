const socket = new WebSocket("ws://127.0.0.1:10810/add?table=2");

socket.onopen = function () {
    // 发送一个初始化消息
    socket.send("Hello, server!");
}

socket.onmessage = function (event) {
    console.log(event.data);
}

setTimeout(()=>{
    socket.send("table 2 add "+ "凉菜");    
}, 5000)