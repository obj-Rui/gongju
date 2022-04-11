/*
 * @Author: wangrui
 * @Date: 2022-03-30 16:02:17
 * @LastEditors: wangrui
 * @Description:
 * @LastEditTime: 2022-03-30 18:05:52
 */
import * as echarts from "echarts/core" // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。

export const option1 = {
  title: [
    {
      text: "已完成",
      x: "center",
      top: "80%",
      textStyle: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "100",
      },
    },
    {
      text: "75%",
      x: "center",
      y: "center",
      textStyle: {
        fontSize: "24",
        color: "#FFFFFF",
        fontFamily: "DINAlternate-Bold, DINAlternate",
        foontWeight: "600",
      },
    },
  ],
  //   backgroundColor: "#111",
  polar: {
    radius: ["42%", "52%"],
    center: ["50%", "50%"],
  },
  angleAxis: {
    max: 100,
    startAngle: 90,
    show: false,
  },
  radiusAxis: {
    type: "category",
    show: true,
    axisLabel: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  series: [
    {
      name: "",
      type: "bar",
      roundCap: true,
      barWidth: 30,
      data: [70],
      coordinateSystem: "polar",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: "#16CEB9",
            },
            {
              offset: 1,
              color: "#6648FF",
            },
          ]),
        },
      },
    },
  ],
}

export const option2 = {
  title: [
    {
      text: "已完成",
      x: "center",
      top: "80%",
      textStyle: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "100",
      },
    },
    {
      text: "75%",
      x: "center",
      y: "center",
      textStyle: {
        fontSize: "24",
        color: "#FFFFFF",
        fontFamily: "DINAlternate-Bold, DINAlternate",
        foontWeight: "600",
      },
    },
  ],
  //   backgroundColor: "#111",
  polar: {
    radius: ["42%", "52%"],
    center: ["50%", "50%"],
  },
  angleAxis: {
    max: 100,
    startAngle: -40,
    show: false,
  },
  radiusAxis: {
    type: "category",
    show: true,
    axisLabel: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  series: [
    {
      name: "",
      type: "bar",
      roundCap: true,
      barWidth: 30,
      data: [70],
      coordinateSystem: "polar",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: "#5ec0b2",
            },
            {
              offset: 1,
              color: "#62bfde",
            },
          ]),
        },
      },
    },
  ],
}

export const option3 = {
  title: [
    {
      text: "已完成",
      x: "center",
      top: "80%",
      textStyle: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "100",
      },
    },
    {
      text: "75%",
      x: "center",
      y: "center",
      textStyle: {
        fontSize: "24",
        color: "#FFFFFF",
        fontFamily: "DINAlternate-Bold, DINAlternate",
        foontWeight: "600",
      },
    },
  ],
  //   backgroundColor: "#111",
  polar: {
    radius: ["42%", "52%"],
    center: ["50%", "50%"],
  },
  angleAxis: {
    max: 100,
    startAngle: -40,
    show: false,
  },
  radiusAxis: {
    type: "category",
    show: true,
    axisLabel: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  series: [
    {
      name: "",
      type: "bar",
      roundCap: true,
      barWidth: 30,
      data: [70],
      coordinateSystem: "polar",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: "#ea6e56",
            },
            {
              offset: 1,
              color: "#e4923f",
            },
          ]),
        },
      },
    },
  ],
}
export const option4 = {
  title: [
    {
      text: "已完成",
      x: "center",
      top: "80%",
      textStyle: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "100",
      },
    },
    {
      text: "75%",
      x: "center",
      y: "center",
      textStyle: {
        fontSize: "24",
        color: "#FFFFFF",
        fontFamily: "DINAlternate-Bold, DINAlternate",
        foontWeight: "600",
      },
    },
  ],
  //   backgroundColor: "#111",
  polar: {
    radius: ["42%", "52%"],
    center: ["50%", "50%"],
  },
  angleAxis: {
    max: 100,
    startAngle: -40,
    show: false,
  },
  radiusAxis: {
    type: "category",
    show: true,
    axisLabel: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  series: [
    {
      name: "",
      type: "bar",
      roundCap: true,
      barWidth: 30,
      data: [70],
      coordinateSystem: "polar",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: "#7d2eec",
            },
            {
              offset: 1,
              color: "#a042ee",
            },
          ]),
        },
      },
    },
  ],
}

const colorList = ["#9E87FF", "#73DDFF", "#fe9a8b", "#F56948", "#9E87FF"]
export const option5 = {
  //   backgroundColor: "#fff",
  //   title: {
  //     // text: "全国6月销售统计",
  //     textStyle: {
  //       fontSize: 12,
  //       fontWeight: 400,
  //     },
  //     left: "center",
  //     top: "5%",
  //   },
  legend: {
    icon: "circle",
    top: "5%",
    right: "5%",
    itemWidth: 6,
    itemGap: 20,
    textStyle: {
      color: "#556677",
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      label: {
        show: true,
        backgroundColor: "#fff",
        color: "#556677",
        borderColor: "rgba(0,0,0,0)",
        shadowColor: "rgba(0,0,0,0)",
        shadowOffsetY: 0,
      },
      lineStyle: {
        width: 0,
      },
    },
    backgroundColor: "#fff",
    textStyle: {
      color: "#5c6c7c",
    },
    padding: [10, 10],
    extraCssText: "box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)",
  },
  grid: {
    top: "15%",
  },
  xAxis: [
    {
      type: "category",
      data: ["北京", "上海", "广州", "深圳", "香港", "澳门", "台湾"],
      axisLine: {
        // show: false,
        lineStyle: {
          color: "#556677",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: "#556677",
        },
        // 默认x轴字体大小
        fontSize: 12,
        // margin:文字到x轴的距离
        margin: 15,
      },
      axisPointer: {
        label: {
          // padding: [11, 5, 7],
          padding: [0, 0, 10, 0],
          /*除了padding[0]建议必须是0之外，其他三项可随意设置和CSSpadding相同，[上，右，下，左]如果需要下边线超出文字，设左右padding即可，
    注：左右padding最好相同padding[2]的10:10 = 文字距下边线的距离 + 下边线的宽度
    如：UI图中文字距下边线距离为7 下边线宽度为2
    则padding: [0, 0, 9, 0]*/

          // 这里的margin和axisLabel的margin要一致!
          margin: 15,
          // 移入时的字体大小
          fontSize: 12,
          backgroundColor: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#fff", // 0% 处的颜色
              },
              {
                // offset: 0.9,
                offset: 0.86,
                /*
0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）
                 */
                color: "#fff", // 0% 处的颜色
              },
              {
                offset: 0.86,
                color: "#33c0cd", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#33c0cd", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
      boundaryGap: false,
    },
  ],
  yAxis: [
    {
      type: "value",
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#DCE2E8",
        },
      },
      axisLabel: {
        textStyle: {
          color: "#556677",
        },
      },
      splitLine: {
        show: false,
      },
    },
    {
      type: "value",
      position: "right",
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: "#556677",
        },
        formatter: "{value}",
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#DCE2E8", // 坐标底部线条
        },
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: "Adidas",
      type: "line",
      data: [10, 10, 30, 12, 15, 3, 7],
      symbolSize: 1,
      symbol: "circle",
      smooth: true,
      yAxisIndex: 0,
      showSymbol: false,
      //   lineStyle: {
      //     width: 5,
      //     color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
      //       {
      //         offset: 0,
      //         color: "#9effff",
      //       },
      //       {
      //         offset: 1,
      //         color: "#9E87FF",
      //       },
      //     ]),
      //     shadowColor: "rgba(158,135,255, 0.3)",
      //     shadowBlur: 10,
      //     shadowOffsetY: 20,
      //   },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(219, 50, 51, 0.3)",
              },
              {
                offset: 0.8,
                color: "rgba(219, 50, 51, 0)",
              },
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowBlur: 10,
        },
      },
      itemStyle: {
        normal: {
          color: colorList[0],
          borderColor: colorList[0],
        },
      },
    },
    {
      name: "Nike",
      type: "line",
      data: [5, 12, 11, 14, 25, 16, 10],
      symbolSize: 1,
      symbol: "circle",
      smooth: true,
      yAxisIndex: 0,
      showSymbol: false,
      //   lineStyle: {
      //     width: 5,
      //     color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
      //       {
      //         offset: 0,
      //         color: "#73DD39",
      //       },
      //       {
      //         offset: 1,
      //         color: "#73DDFF",
      //       },
      //     ]),
      //     shadowColor: "rgba(115,221,255, 0.3)",
      //     shadowBlur: 10,
      //     shadowOffsetY: 20,
      //   },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(137, 189, 27, 0.3)",
              },
              {
                offset: 0.8,
                color: "rgba(137, 189, 27, 0)",
              },
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowBlur: 10,
        },
      },
      itemStyle: {
        normal: {
          color: colorList[1],
          borderColor: colorList[1],
        },
      },
    },
  ],
}
