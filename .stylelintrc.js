/*
 * @Author: wangrui
 * @Date: 2022-01-19 16:37:18
 * @LastEditors: wangrui
 * @Description: stylelint 配置
 * @LastEditTime: 2022-01-19 16:38:23
 */
module.exports = {
    extends: ['stylelint-config-standard-scss'],
    root: true,
    plugins: ['stylelint-order'],
    rules: {
      // csss样式书写顺序
      'order/order': ['custom-properties', 'declarations'],
      'order/properties-order': [
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'overflow',
        'margin',
        'padding',
        'width',
        'height',
      ],
    },
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.svg'],
    overrides: [
      {
        extends: ['stylelint-config-recommended-vue/scss', 'stylelint-config-html/vue'],
        files: ['*.vue', '**/*.vue'],
        rules: {
          'selector-pseudo-element-no-unknown': [
            true,
            {
              ignorePseudoElements: ['v-deep'],
            },
          ],
          'selector-pseudo-element-no-unknown': [
            true,
            {
              ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
            },
          ],
        },
      },
    ],
  };
