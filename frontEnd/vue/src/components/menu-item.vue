<script setup>

const props = defineProps({
  no: Number,
  name: String,
  imgUrl: String,
  webs: WebSocket,
  dishList: Object,
})

function change(oper, No, name) {
  if (oper === '+') {
    props.webs.send(`table ${No} add ${name}`);
  } else {
    props.webs.send(`table ${No} sub ${name}`);
  }
}

</script>

<template>
  <div id="item-box" class="flex">
    <img :src="imgUrl" alt="">
    <div id="dishName">{{ props.name }}</div>
    <div id="count">
      <button id="sub" @click="change('-', props.no, props.name)">-</button>
      <div id="countNum">{{ props.dishList[props.name] ? props.dishList[props.name] : 0 }}</div>
      <button @click="change('+', props.no, props.name)">+</button>
    </div>

  </div>
</template>

<style scoped>
#item-box {
  height: 70px;
  margin: 4px 4px 8px;
  padding: 10px;


  background: white;
  border-radius: 10px;

  #dishName {
    width: 6rem;
    overflow-wrap: break-word;
  }

  img {
    width: 70px;
    margin-right: 5px;
  }
}

#count {
  display: flex;
  align-items: end;
}

#countNum {
  text-align: center;
  width: 1.5rem;
  padding: 0 3px 0 3px;
}

button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 0;
  background-color: #FA7014;
  color: white;
}

#sub {
  background-color: white;
  color: #FA7014;
  border: 1px solid #FA7014
}
</style>