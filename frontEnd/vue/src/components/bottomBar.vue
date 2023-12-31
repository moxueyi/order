<script setup>

</script>

<template>
  <div id="box" class="flex">

    <div id="total">
      <span>合计:</span>
      <span id="totalPrice">￥20.00</span>
    </div>
    <div id="submit">
      <span>提交订单</span>
    </div>

  </div>
</template>

<style scoped>
#box {
  position: fixed;
  bottom: 0;

  height: 10vh;
  width: 100vw;
  background-color: white;
  box-shadow: 0 -1px 10px -2px rgba(0, 0, 0, 0.3);

  justify-content: space-between;
  align-items: center;
  font-size: 17px;


  margin-right: 1rem;
  align-items: center;

  #total {
    margin-left: 2rem;
  }

  #submit {
    margin-right: 1rem;
    padding: 15px 20px;
    border-radius: 60px;
    background: #FA7014;
    box-shadow: 0 -1px 10px -2px rgba(0, 0, 0, 0.3);
  }
}
</style>