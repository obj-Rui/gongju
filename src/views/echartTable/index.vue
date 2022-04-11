<!--
 * @Author: wangrui
 * @Date: 2022-03-30 10:27:39
 * @LastEditors: wangrui
 * @Description: 
 * @LastEditTime: 2022-03-31 16:20:38
-->
<template>
  <div class="contain">
    <header class="header">
      <div class="des_box">
        <div class="num">
          <p><span class="des_num">19</span> 个</p>
          <p class="des">工具个数</p>
        </div>
        <div class="img">
          <img src="../../assets/tool.png" alt="" />
        </div>
      </div>

      <div class="des_box">
        <div class="num">
          <p><span class="des_num">19</span> 个</p>
          <p class="des">工具个数</p>
        </div>
        <div class="img">
          <img src="../../assets/tool.png" alt="" />
        </div>
      </div>

      <div class="des_box">
        <div class="num">
          <p><span class="des_num">19</span> 个</p>
          <p class="des">工具个数</p>
        </div>
        <div class="img">
          <img src="../../assets/tool.png" alt="" />
        </div>
      </div>

      <div class="des_box">
        <div class="num">
          <p><span class="des_num">19</span> 个</p>
          <p class="des">工具个数</p>
        </div>
        <div class="img">
          <img src="../../assets/tool.png" alt="" />
        </div>
      </div>
    </header>
    <div class="content">
      <div class="content1">
        <div id="table1" class="table1">
          <div class="tip">
            <div class="tip_des">
              <p class="des">同比上月增</p>
              <p class="num">80%</p>
            </div>
            <div class="tip_des">
              <p class="des">2.3% ⬆️</p>
              <img src="./../../assets/start3.png" alt="" />
            </div>
            <div class="circle_box">
              <div id="circle_1" class="circle"></div>
              <div id="circle_2" class="circle"></div>
              <div id="circle_3" class="circle"></div>
              <div id="circle_4" class="circle"></div>
            </div>
          </div>
          <div id="table5"></div>
        </div>
        <div class="table1 table2">
          <div id="table2_1"></div>
          <div id="table2_2"></div>
        </div>
      </div>
      <div class="content2">
        <div class="table1 table3">
          <div class="title">title</div>
          <div class="table_3_box">
            <div class="table_3"></div>
            <div class="table_3"></div>
            <div class="table_3"></div>
          </div>
        </div>
        <div class="table1 table4">
          <div id="table4"></div>
        </div>
        <div class="table1 table3 table5">
          <div class="title">title</div>
          <div class="table_3_box">
            <div class="table_3"></div>
            <div class="table_3"></div>
            <div class="table_3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import * as echarts from "echarts/core" // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import { BarChart, LineChart, PieChart, CustomChart } from "echarts/charts" // 引入柱状图图表，图表后缀都为 Chart
import { PolarComponent, TitleComponent, LegendComponent, TooltipComponent, GridComponent } from "echarts/components" // 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import { LabelLayout, UniversalTransition } from "echarts/features" // // 标签自动布局，全局过渡动画等特性
import { CanvasRenderer } from "echarts/renderers" //// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步

// 注册必须的组件
echarts.use([
  PolarComponent,
  BarChart,
  PieChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  GridComponent,
  CustomChart,
])

import { option1, option2, option3, option4, option5 } from "./components/main"
import { table2_1, table2_2, table2_3 } from "./components/table2"
export default {
  setup() {},
  mounted() {
    this.draw()
  },
  methods: {
    draw() {
      // 接下来的使用就跟之前一样，初始化图表，设置配置项
      let options = [option1, option2, option3, option4, option1, option2, option3, option4]
      let myChart = Array.from(document.querySelectorAll(".circle")).map((item: any) => echarts.init(item))
      myChart.forEach((item, index) => item.setOption(options[index]))
      let myChart2 = Array.from(document.querySelectorAll(".table_3")).map((item: any) => echarts.init(item))
      myChart2.forEach((item, index) => item.setOption(options[index]))
      echarts.init(document.querySelector("#table5")).setOption(option5)
      echarts.init(document.querySelector("#table2_1")).setOption(table2_1)
      echarts.init(document.querySelector("#table2_2")).setOption(table2_2)
      echarts.init(document.querySelector("#table4")).setOption(table2_3)
      // myChart.setOption(table1)
    },
  },
}
</script>
<style scoped lang="scss">
body {
  background-color: #1c1b25;
}
.contain {
  height: 100%;
  background-color: #1c1b25;
}
.header {
  width: 100%;
  // height: 100px;
  text-align: center;
  color: #fff;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .des_box {
    background-image: linear-gradient(90deg, #4781e3, #569ef2);
    height: 100px;
    width: 20%;
    border-radius: 12px;
    padding: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    &:nth-child(1) {
      background-image: linear-gradient(90deg, #5ec0b2, #62bfde);
    }
    &:nth-child(2) {
      background-image: linear-gradient(90deg, #ea6e56, #e4923f);
    }
    &:nth-child(3) {
      background-image: linear-gradient(90deg, #7d2eec, #a042ee);
    }
    .num {
      .des_num {
        font-size: 2rem;
      }
      .des {
        opacity: 0.5;
      }
    }
    .img {
      width: 60px;
      height: 60px;
      img {
        width: 100%;
      }
    }
  }
}
.content {
  padding: 0rem 4rem;
  display: flex;
  flex-direction: column;
  .content1 {
    width: 100%;
    display: flex;
  }
  .content2 {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
  }
  .table1 {
    background-color: #282633;
    width: 60%;
    // height: 200px;
    border-radius: 1rem;
    .tip {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .circle_box {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 600px;
      }
      .circle {
        height: 100px;
        width: 120px;
      }
      .tip_des {
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        height: 100%;
        // width: 150px;
        img {
          width: 45px;
        }
        padding: 1rem;
        .des {
          // color: #fff;
          opacity: 0.5;
          white-space: nowrap;
        }
        .num {
          font-size: 1.5rem;
        }
      }
    }
    #table5 {
      width: 100%;
      height: 400px;
    }
  }
  .table2 {
    width: 40%;
    // height: 400px;
    margin-left: 1rem;
    #table2_1 {
      width: 100%;
      height: 250px;
    }
    #table2_2 {
      width: 100%;
      height: 300px;
    }
  }
  .table3 {
    width: 30%;
    height: 140px;
    position: relative;
    // border: 1px solid #fff;
    .table_3_box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .table_3 {
        width: 120px;
        height: 140px;
      }
    }
  }
  .table4 {
    width: 40%;
    height: 140px;
    // border: 1px solid #fff;
    margin: 0 1rem;
    #table4 {
      width: 100%;
      height: 140px;
    }
  }
  .table5 {
    width: 30%;
    height: 140px;
    // border: 1px solid #fff;
  }
  .title {
    position: absolute;
    left: 10%;
    top: 5%;
    color: #fff;
  }
}
</style>
