/*
 * @Author: wangrui
 * @Date: 2022-01-19 16:20:45
 * @LastEditors: wangrui
 * @Description:
 * @LastEditTime: 2022-03-30 10:28:18
 */
import { createApp } from "vue"
import App from "./App.vue"
import routers from "./router/index"
import "ant-design-vue/dist/antd.css"

createApp(App).use(routers).mount("#app")
