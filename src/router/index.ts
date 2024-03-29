/*
 * @Author: wangrui
 * @Date: 2022-01-20 10:30:25
 * @LastEditors: wangrui
 * @Description:
 * @LastEditTime: 2022-06-19 07:53:35
 */
import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "home",
      component: () => import("../views/home/index"), // 这是路由的籁加载，也可以其他方式
      // children: [
      //   {
      //     path: "/home",
      //     component: () => import("../views/home/index.tsx"),
      //   },
      //   {
      //     path: "/demo01",
      //     component: () => import("../views/demo01/index.vue"),
      //   },
      //   {
      //     path: "/demo02",
      //     component: () => import("../views/echartTable/index.vue"),
      //   },
      // ],
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/home/index"),
      beforeEnter: (to, from, next) => {
        const isFirst = window.localStorage.getItem("isFirst")
        if (isFirst !== "N") {
          next({ name: "welcome" })
        }
        next()
      },
    },
    {
      path: "/welcome",
      name: "welcome",
      component: () => import("../views/welcome/index"),
      // beforeEnter:(to,from) =>{

      // }
    },
    {
      path: "/demo02",
      component: () => import("../views/echartTable/index.vue"),
    },
    {
      path: "/demo03",
      component: () => import("../views/demo3/index.vue"),
    },
    {
      path: "/demo04",
      component: () => import("../views/demo04/index.vue"),
    },
    {
      path: "/demo2",
      component: () => import("../views/demo02/index.vue"),
    },
  ],
})

export default router
