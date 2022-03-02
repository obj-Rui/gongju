/*
 * @Author: wangrui
 * @Date: 2022-01-19 16:25:08
 * @LastEditors: wangrui
 * @Description: eslint 配置
 * @LastEditTime: 2022-02-07 10:31:53
 */
module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    // VUE模版解析器
    parser: 'vue-eslint-parser',
    parserOptions: {
      ecmaVersion: 2020,
      // TypeScript ESLint 解析器
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
    },
    extends: ['alloy', 'alloy/vue', 'alloy/typescript'],
    globals: {
      defineProps: 'readonly',
      defineEmits: 'readonly',
      defineExpose: 'readonly',
      withDefaults: 'readonly',
      defineComponent: 'readonly',
      ref: 'readonly',
      computed: 'readonly',
    },
    rules: {
      // 配合vue/no-multiple-template-root自动引入 支持多个根结点
      'vue/no-multiple-template-root': 'off',
    }
  }
