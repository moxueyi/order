<script setup>
import {ref} from 'vue'

const tableId = ref(null)
const tips = ref('')
let ws = ''

// 注册发射Ws,Num的事件
const emit = defineEmits(['postNum', 'postWs'])

//触发发送tableId事件
const postNum = (num) => {
  emit('postNum', num);
}

//触发发送websocket事件
const postWs = (ws) => {
  emit('postWs', ws);
}

// 与后端建立websocket
function handle(tableIdAbs) {
  ws = new WebSocket(`ws://127.0.0.1:10810/add?table=${tableIdAbs}`)
  ws.onopen = function () {
    // 获取websocket
    postWs(ws);
  }
}

// 输入方法
function input() {
  //绝对值转换
  const tableIdAbs = Math.abs(tableId.value)

  //判断是否为正确的值
  if (!Number.isInteger(tableIdAbs) || tableIdAbs === 0) {
    tips.value = "请输入正确的桌号"
  } else {
    //传值后端
    postNum(tableIdAbs);
    handle(tableIdAbs)
  }
}
</script>

<template>
  <div id="background">
    <div id="box" class="flex">
      <p style="margin-top: 30px ">请输入您的桌号:</p>
      <input type="text" v-model.trim="tableId" maxlength="3" placeholder=":桌号">
      <br>
      <button class="confirm-button" @click="input">确定</button>
      <br>
      <div class="tip">{{ tips }}</div>
    </div>
  </div>
</template>

<style scoped>

#box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 200px;
  width: 250px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  border-radius: 5%;


  flex-direction: column;
  align-items: center;
  //justify-content: center;

  input {
    width: 60px;
    height: 24px;
  }

  .confirm-button {
    border-radius: 6px;
    width: 30%;
    padding: 7px;
    text-align: center;
    background-color: #FA7014;
    text-decoration: none;
    color: white;
  }

  .tip {
    font-weight: 600;
    color: rgb(194, 68, 68);
  }
}

#background {
  width: 100dvw;
  height: 100dvh;
  background-image: url("/src/assets/backgound.jpg");
  background-size: cover;
}
</style>