/*
 * @Author: wangrui
 * @Date: 2022-01-19 16:20:45
 * @LastEditors: wangrui
 * @Description: 
 * @LastEditTime: 2022-03-19 19:54:30
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.tsx' 
