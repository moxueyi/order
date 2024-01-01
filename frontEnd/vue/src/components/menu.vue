<script setup>
import { ref } from 'vue'
import MenuItem from "./menu-item.vue";


let menu = ref({});
let dishType = ref([]);
let typeItem = ref([])
let order = ref({});
const emit = defineEmits(['postUserCount'])

//从父组件获取webSocket
const props = defineProps({
  ws: WebSocket,
  tableNum: Number
})
//获取菜单
if (props.ws.readyState === 1) {
  props.ws.send("menu")
  props.ws.send("order");
}

//处理菜单数据
props.ws.onmessage = function (ev) {
  //将响应数据转成js对象
  let data = JSON.parse(ev.data);
  console.log(data);
  if (data["menu"]) {
    // 获取菜单
    menu.value = data["menu"];
    // 获取菜类名
    dishType.value = Object.keys(menu.value);
    // 默认菜类
    typeItem.value = menu.value["主食"];
  } else if (data["dishList"]) {
    order.value = data["dishList"];
    console.log(order);
  } else if (data["user"]) {
    postUserCount(data["user"]);
  }
}

function postUserCount(data) {
  emit("postUserCount", data);
}

// 切换菜类型
function handleType(item) {
  typeItem.value = menu.value[item];
}

</script>

<template>
  <div id="box" class="flex">
    <!--菜单类别-->
    <div class="flex" id="menu_dir">
      <div id="items" v-for="(item, index) in dishType.values()" :key="index">
        <div id="dir_item" @click="handleType(item)">
          <p>{{ item }}</p>
        </div>
      </div>
    </div>
    <!--菜单列表-->
    <div class="flex" id="menu_list">
      <div v-for="(item, index) in typeItem.values()" :key="index">
        <menu-item :no="props.tableNum" :name="item.name" :img-url="item.image" :webs="props.ws"
          :dish-list="order"></menu-item>
      </div>
    </div>
  </div>
</template>

<style scoped>
#box {
  width: 100vw;
  height: 83vh;

  margin-top: 7vh;
  margin-bottom: 10vh;

  #menu_dir {
    background: white;
    width: 100px;
    flex-direction: column;

    #dir_item {
      display: flex;
      border-bottom: 1px solid black;
      height: 2rem;
      justify-content: center;
      align-items: center;
    }
  }

  #menu_list {
    flex: 2;
    flex-direction: column;
    overflow: auto;
  }

  #items {
    overflow: auto;
  }
}
</style>