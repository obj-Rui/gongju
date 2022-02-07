import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
        '@': path.resolve('./src'),
    }
  },
  plugins: [vue()],
  esbuild: {
    // 此配置是为了在vue中使用jsx
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: "import { h } from 'vue';",
  },
})
