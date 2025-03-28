import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueJs, vueJsConfigs } from '@vue/eslint-config-js'
import pluginVitest from '@vitest/eslint-plugin'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pluginCypress from 'eslint-plugin-cypress/flat'
import oxlint from 'eslint-plugin-oxlint'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// To allow more languages other than `js` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-js'
// configureVueProject({ scriptLangs: ['js'] })
// More info at https://github.com/vuejs/eslint-config-js/#advanced-setup

export default defineConfigWithVueJs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  pluginVue.configs['flat/essential'],
  vueJsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  {
    ...pluginCypress.configs.recommended,
    files: [
      'cypress/e2e/**/*.{cy,spec}.{js,mjs}',
      'cypress/support/**/*.{js,mjs}'
    ],
  },
  ...oxlint.configs['flat/recommended'],
  skipFormatting,
)

