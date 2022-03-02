<!--
 * @Author: wangrui
 * @Date: 2022-02-07 16:15:00
 * @LastEditors: wangrui
 * @Description: 
 * @LastEditTime: 2022-03-01 17:13:57
-->
<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
const getList = () => {
  return new Promise((resolve, reject) => {
        //步骤一:创建异步对象
        var ajax = new XMLHttpRequest();
        //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数
        ajax.open('get', 'http://127.0.0.1:8000');
        //步骤三:发送请求
        ajax.send();
        //步骤四:注册事件 onreadystatechange 状态改变就会调用
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
                resolve(JSON.parse(ajax.responseText))
            }
        }
    })
}

const container = ref<HTMLElement>() // container节点
const blank = ref<HTMLElement>() // blank节点
const list = ref<any>([]) // 列表
const page = ref(1) // 当前页数
const limit = 10 // 一页展示
// 最大页数
const maxPage = computed(() => Math.ceil(list.value.length / limit))
// 真实展示的列表
const showList = computed(() => list.value.slice(0, page.value * limit))

const handleScroll = () => {
    console.log('ww')
  // 当前页数与最大页数的比较
  if (page.value > maxPage.value) return
  const clientHeight = container.value?.clientHeight
  const blankTop = blank.value?.getBoundingClientRect().top - 300.5
  console.log(clientHeight,blankTop)
  if (clientHeight > blankTop  ) {
      console.log("Client height0")
    // blank出现在视图，则当前页数加1
    page.value++
  }
}

onMounted(async () => {
  // document.querySelector('#container').addEventListener('scroll',handleScroll)
  const res = await getList()
  list.value = res
})
</script>

<template>
  <div id="container" @scroll="handleScroll" ref="container">
    <div class="sunshine" v-for="(item) in showList" :key="item.tid">
      <img :src="item.src" />
      <span>{{ item.text }}</span>
    </div>
    <div ref="blank"></div>
  </div>
</template>
<style scoped lang='scss'>
    #container {
        overflow:scroll;
        height:80vh;
    }
    .sunshine {
      display: flex;
      width:100%;
      align-items:center;
      
    }
</style>

