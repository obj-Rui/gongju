/*
 * @Author: wangrui
 * @Date: 2022-01-19 16:20:45
 * @LastEditors: wangrui
 * @Description:
 * @LastEditTime: 2022-06-22 10:44:23
 */
import { createApp } from "vue"
import App from "./App.vue"
import routers from "./router/index"
import "ant-design-vue/dist/antd.css"
import i18n from "./plugins/i18n"

const app: any = createApp(App)

app.use(routers)
app.use(i18n, {
  greetings: {
    hello: "Bonjour!",
  },
})
app.config.errorHandler = (err: any) => {
  /* 处理错误 */
  console.log("全局处理error")
  console.error(err)
}
app.mount("#app")
