/*
 * @Author: wangrui
 * @Date: 2022-06-22 10:31:58
 * @LastEditors: wangrui
 * @Description: i18n
 * @LastEditTime: 2022-06-22 10:43:12
 */
export default {
  install: function (app: any, options: Object) {
    app.config.globalProperties.$translate = (key: string) => {
      return key.split(".").reduce((p: any, n) => p && p[n], options)
    }
  },
}
