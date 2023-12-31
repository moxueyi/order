<script setup>

const props = defineProps({
  Count: Number
})

const emit = defineEmits(["add", "sub"])

function change(method) {
  switch (method) {
    case "+":
      emit("add")
      console.log('add')

      break
    case "-":
      emit("sub")
      console.log('sub')
      break
    case "updata":

      break
  }
}
</script>

<template>
  <div id="count">
    <button id="sub" @click="change('-')">-</button>
    <div id="countNum">{{ Count }}</div>
    <button @click="change('+')">+</button>
  </div>

</template>

<style scoped>
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