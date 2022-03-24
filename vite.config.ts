/*
 * @Author: wangrui
 * @Date: 2022-01-19 16:20:45
 * @LastEditors: wangrui
 * @Description: 
 * @LastEditTime: 2022-03-19 19:52:44
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
        '@': path.resolve('./src'),
    }
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
  esbuild: {
    // 此配置是为了在vue中使用jsx
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: "import { h } from 'vue';",
  },
})
