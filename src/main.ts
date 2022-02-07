/*
 * @Author: wangrui
 * @Date: 2022-01-19 16:20:45
 * @LastEditors: wangrui
 * @Description:
 * @LastEditTime: 2022-01-20 12:40:16
 */
import { createApp } from "vue"
import App from "./App.vue"
import routers from "./router/index"
import 'antd/dist/antd.css'

createApp(App).use(routers).mount("#app")
