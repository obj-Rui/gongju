/*
 * @Author: wangrui
 * @Date: 2022-03-30 18:25:56
 * @LastEditors: wangrui
 * @Description:
 * @LastEditTime: 2022-03-31 16:17:38
 */
import * as echarts from "echarts/core" // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。

export const table2_1 = {
  //   backgroundColor: "#091C3D",
  tooltip: {
    //提示框组件
    trigger: "axis",
    formatter: "{b}<br />{a0}: {c0}<br />{a1}: {c1} <br /> {a2}: {c2}",
    axisPointer: {
      type: "shadow",
      label: {
        backgroundColor: "#6a7985",
      },
    },
    textStyle: {
      color: "#000",
      fontStyle: "normal",
      fontFamily: "微软雅黑",
      fontSize: 12,
    },
  },
  title: {
    text: "社交运营",
    textStyle: {
      fontSize: 16,
      fontWeight: 400,
      color: "#",
    },
    left: "8%",
    top: "10%",
  },
  grid: {
    left: "10%",
    right: "10%",
    bottom: "10%",
    top: "40%",
    //	padding:'0 0 10 0',
    containLabel: true,
  },
  legend: {
    //图例组件，颜色和名字
    right: "10%",
    top: "10%",
    itemGap: 16,
    itemWidth: 18,
    itemHeight: 10,
    data: [
      {
        name: "健康度",
        //icon:'image://../wwwroot/js/url2.png', //路径
      },
      {
        name: "可用度",
      },
      {
        name: "可用度2",
      },
    ],
    textStyle: {
      color: "#a8aab0",
      fontStyle: "normal",
      fontFamily: "微软雅黑",
      fontSize: 12,
    },
  },
  xAxis: [
    {
      type: "category",
      //	boundaryGap: true,//坐标轴两边留白
      data: ["1", "2", "3", "4", "5"],
      axisLabel: {
        //坐标轴刻度标签的相关设置。
        //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
        // margin: 15,
        textStyle: {
          color: "#078ceb",
          fontStyle: "normal",
          fontFamily: "微软雅黑",
          fontSize: 12,
        },
        // rotate: 50,
      },
      axisTick: {
        //坐标轴刻度相关设置。
        show: false,
      },
      axisLine: {
        //坐标轴轴线相关设置
        lineStyle: {
          color: "#fff",
          opacity: 0.2,
        },
      },
      splitLine: {
        //坐标轴在 grid 区域中的分隔线。
        show: false,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      splitNumber: 5,
      axisLabel: {
        textStyle: {
          color: "#a8aab0",
          fontStyle: "normal",
          fontFamily: "微软雅黑",
          fontSize: 12,
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#fff"],
          opacity: 0.06,
        },
      },
    },
  ],
  series: [
    {
      name: "健康度",
      type: "bar",
      data: [10, 15, 30, 45, 55],
      barWidth: 5,
      barGap: 5, //柱间距离
      label: {
        //图形上的文本标签
        normal: {
          show: true,
          position: "top",
          textStyle: {
            color: "#a8aab0",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 12,
          },
        },
      },
      itemStyle: {
        normal: {
          show: true,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#5768EF",
            },
            {
              offset: 1,
              color: "#5768EF",
            },
          ]),
          barBorderRadius: 2,
          borderWidth: 0,
        },
      },
    },
    {
      name: "可用度",
      type: "bar",
      data: [8, 5, 25, 30, 35],
      barWidth: 5,
      barGap: 5, //柱间距离
      label: {
        //图形上的文本标签
        normal: {
          show: true,
          position: "top",
          textStyle: {
            color: "#a8aab0",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 12,
          },
        },
      },
      itemStyle: {
        normal: {
          show: true,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#69CBF2",
            },
            {
              offset: 1,
              color: "#69CBF2",
            },
          ]),
          barBorderRadius: 2,
          borderWidth: 0,
        },
      },
    },
    {
      name: "可用度2",
      type: "bar",
      data: [4, 6, 33, 32, 39],
      barWidth: 5,
      barGap: 2, //柱间距离
      label: {
        //图形上的文本标签
        normal: {
          show: true,
          position: "top",
          textStyle: {
            color: "#a8aab0",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 12,
          },
        },
      },
      itemStyle: {
        normal: {
          show: true,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#ea6e56",
            },
            {
              offset: 1,
              color: "#e4923f",
            },
          ]),
          barBorderRadius: 2,
          borderWidth: 0,
        },
      },
    },
  ],
}

let chartData = [
  { companyName: "西郊1", weight: 125, type: "工具1" },
  { companyName: "西郊2", weight: 110, type: "工具2" },
  { companyName: "西郊3", weight: 300, type: "工具3" },
]
export const table2_2 = {
  color: [
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#5768EF",
      },
      {
        offset: 1,
        color: "#5768EF",
      },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#69CBF2",
      },
      {
        offset: 1,
        color: "#69CBF2",
      },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#ea6e56",
      },
      {
        offset: 1,
        color: "#e4923f",
      },
    ]),
  ],
  grid: {
    left: "10%",
    right: "10%",
    bottom: "10%",
    top: "90",
    //	padding:'0 0 10 0',
    containLabel: true,
  },
  legend: {
    orient: "vertical",
    top: "center",
    right: "10%",
    itemGap: 16,
    itemWidth: 18,
    itemHeight: 10,
    data: chartData
      ? chartData.map((it) => {
          return it.type
        })
      : [],
    textStyle: {
      color: "#a8aab0",
      fontStyle: "normal",
      fontFamily: "微软雅黑",
      fontSize: 12,
    },
  },
  tooltip: {
    trigger: "item",
    formatter: function (params: any) {
      let str = `${params.seriesName}<br/>${params.marker}${params.data.title}:${params.data.value}吨(${params.percent}%)`
      return str
    },
  },
  series: [
    {
      name: "渠道去向",
      type: "pie",
      radius: ["60", "80"],
      center: ["40%", "50%"],
      roseType: "radius",
      clockwise: false,
      pieGap: 1,
      itemStyle: {
        borderRadius: 1,
        borderColor: "#282633",
        borderWidth: 2,
      },
      label: {
        normal: {
          show: true,
          position: "outside",
          fontSize: 12,
          color: "#a8aab0",
        },
      },
      labelLine: {
        show: true,
        smooth: true,
      },
      data: chartData
        ? chartData.map((it) => {
            return { name: it.type, value: it.weight, title: it.companyName }
          })
        : [],
    },
  ],
}

// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx: any, shape) {
    // 会canvas的应该都能看得懂，shape是从custom传入的
    const xAxisPoint = shape.xAxisPoint
    const c0 = [shape.x, shape.y]
    const c1 = [shape.x - 13, shape.y - 13]
    const c2 = [xAxisPoint[0] - 13, xAxisPoint[1] - 13]
    const c3 = [xAxisPoint[0], xAxisPoint[1]]
    ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
  },
})
// 绘制右侧面
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx: any, shape) {
    const xAxisPoint = shape.xAxisPoint
    const c1 = [shape.x, shape.y]
    const c2 = [xAxisPoint[0], xAxisPoint[1]]
    const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9]
    const c4 = [shape.x + 18, shape.y - 9]
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
  },
})
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx: any, shape) {
    const c1 = [shape.x, shape.y]
    const c2 = [shape.x + 18, shape.y - 9]
    const c3 = [shape.x + 5, shape.y - 22]
    const c4 = [shape.x - 13, shape.y - 13]
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
  },
})
// 注册三个面图形
echarts.graphic.registerShape("CubeLeft", CubeLeft)
echarts.graphic.registerShape("CubeRight", CubeRight)
echarts.graphic.registerShape("CubeTop", CubeTop)

const MAX = [170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170]
const VALUE = [21.9, 26.8, 24.2, 54.9, 74.5, 78.3, 119.0, 126.9, 190.8, 123.2, 156.2, 169.3, 179.5, 155.5]
export const table2_3 = {
  // backgroundColor: "#012366",

  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: function (params: any[], ticket: any, callback: any) {
      const item = params[1]
      return item.name + " : " + item.value
    },
  },
  grid: {
    left: 40,
    right: 40,
    bottom: 100,
    top: 100,
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: [
      "立春",
      "雨水",
      "惊蛰",
      "春分",
      "清明",
      "谷雨",
      "立夏",
      "小满",
      "芒种",
      "夏至",
      "小暑",
      "大暑",
      "立秋",
      "处暑",
    ],
    axisLine: {
      show: false,
      lineStyle: {
        color: "white",
      },
    },
    offset: 25,
    axisTick: {
      show: false,
      length: 9,
      alignWithLabel: true,
      lineStyle: {
        color: "#7DFFFD",
      },
    },
    axisLabel: {
      show: true,
      fontSize: 12,
    },
  },
  yAxis: {
    type: "value",
    axisLine: {
      show: false,
      lineStyle: {
        color: "white",
      },
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
      fontSize: 12,
    },
    boundaryGap: ["10%", "10%"],
  },
  series: [
    {
      type: "custom",
      renderItem: function (params: any, api: any) {
        const location = api.coord([api.value(0), api.value(1)])
        return {
          type: "group",
          children: [
            {
              type: "CubeLeft",
              shape: {
                api,
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: "rgba(47,102,192,.27)",
              },
            },
            {
              type: "CubeRight",
              shape: {
                api,
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: "rgba(59,128,226,.27)",
              },
            },
            {
              type: "CubeTop",
              shape: {
                api,
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: "rgba(72,156,221,.27)",
              },
            },
          ],
        }
      },
      data: MAX,
    },
    {
      type: "custom",
      renderItem: (params: any, api: { coord: (arg0: any[]) => any; value: (arg0: number) => number }) => {
        const location = api.coord([api.value(0), api.value(1)])
        var color =
          api.value(1) > 2000
            ? "red"
            : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(67,102,243,1)",
                },
                {
                  offset: 1,
                  color: "rgba(29,67,243,1)",
                },
              ])
        return {
          type: "group",
          children: [
            {
              type: "CubeLeft",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: color,
              },
            },
            {
              type: "CubeRight",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: color,
              },
            },
            {
              type: "CubeTop",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: color,
              },
            },
          ],
        }
      },
      data: VALUE,
    },
    {
      type: "bar",
      label: {
        normal: {
          show: true,
          position: "top",

          fontSize: 16,
          color: "#fff",
          offset: [2, -25],
        },
      },
      itemStyle: {
        color: "transparent",
      },
      tooltip: {},
      data: MAX,
    },
  ],
}
