<script setup>
import Count from "./count.vue"
import {ref} from "vue";

defineProps({
  name: String,
  imgUrl: String,
  dishCountNum: Number
})


</script>

<template>
  <div id="item-box" class="flex">
    <img :src="imgUrl" alt="">
    <div id="dishName">{{ name }}</div>
    <Count></Count>
    <!--    <div v-for="item in order.values()"></div>-->
    <!--    <div v-if="item.name === name">-->
    <!--      <Count :Count="itme.quantity"></Count>-->
    <!--    </div>-->
    <!--    <div v-else>-->
    <!--      <Count v-if="item.name === name" :Count=""></Count>-->
    <!--    </div>-->
    <!--    <Count v-if="item.name === name" :Count="dishCountNum "></Count>-->
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

</style>