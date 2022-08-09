<!--
 * @Author: wangrui
 * @Date: 2022-06-19 07:45:09
 * @LastEditors: wangrui
 * @Description: 
 * @LastEditTime: 2022-06-22 11:09:47
-->
<template>
  <div>
    <div>{{ state.name }}</div>
    <div @click="increment">{{ state.count }}</div>
    <div>{{ obj.foo }}</div>
    <div>{{ obj2.foo.value + 1 }}</div>
    <div>{{ foo + 1 }}</div>
    <div><button @click="handlechange">按钮</button></div>
    <!-- <div>{{ count }}</div> -->
    <div>{{ total }}</div>
    <Transition name="slide-fade">
      <div v-if="isShow">{{ $translate("greetings.hello") }}</div>
    </Transition>
  </div>
</template>
<script setup>
import { reactive, nextTick, ref, computed } from "vue"
// import { $ref } from "vue/macros"

const obj = ref({ foo: "barhahah" })
const isShow = ref(false)
function handlechange() {
  isShow.value = !isShow.value
}
const obj2 = { foo: ref(12) }
const { foo } = obj2
// const count = $ref(1)
const total = computed(() => {
  return foo.value + 100
})
function increment() {
  state.count++
  nextTick(() => {
    // 访问更新后的 DOM
  })
}
const state = reactive({ name: "张三", count: 1 })
</script>

<style>
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
