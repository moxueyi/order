<script setup>
import GetTableId from "./components/getTableId.vue";
import Menu from "./components/menu.vue";
import BottomBar from "./components/bottomBar.vue";
import { ref } from "vue";
import Submit from "./components/Submit.vue";

let ws = null;
let tableNum = 0;
let login = ref(true);//登录界面开关
let userNumber = ref(1);

//获取桌号
function getNum(msg) {
  tableNum = msg;
}

//获取websocket
function getWs(msg) {
  ws = msg;
  ws.send("user");
  //关闭登录界面
  login.value = false;
}


function getUserCount(msg) {
  userNumber.value = msg;
}

</script>

<template>
  <div v-if="login">
    <get-table-id @postNum="getNum" @postWs="getWs" style="z-index: 5"></get-table-id>
  </div>
  <div v-else>
    <header>
      <h3>{{ tableNum }} 号桌 {{ userNumber }} 人点菜</h3>
    </header>

    <main class="flex">
      <Menu @postUserCount="getUserCount" :ws="ws" :table-num="tableNum"></Menu>
    </main>

    <footer>
      <bottom-bar></bottom-bar>
    </footer>
  </div>
  <submit></submit>
</template>


<style scoped>
* {
  /* //border: 1px solid black; */
}

header {
  position: fixed;
  height: 7vh;
  width: 100vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.3);
}
</style>
