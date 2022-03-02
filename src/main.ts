/*
 * @Author: wangrui
 * @Date: 2022-01-19 16:20:45
 * @LastEditors: wangrui
 * @Description:
 * @LastEditTime: 2022-02-07 10:29:21
 */
import { createApp } from "vue"
import App from "./App.vue"
import routers from "./router/index"
import 'ant-design-vue/dist/antd.css'

createApp(App).use(routers).mount("#app")
