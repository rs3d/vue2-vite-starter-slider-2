import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import { createVuePlugin as vue } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm.js',
      },
      {
        find: /^vue-slider-component$/,
        replacement: 'vue-slider-component/dist/vue-slider-component.umd.js',
      },
    ],
  },
  esbuild: {
    platform: 'browser',
  },
  build: {
    brotliSize: false, // unsupported in StackBlitz
    minify: false,
    sourcemap: 'inline',
    commonjsOptions: {
      /**
       * Setting to make prod-build working with vue-slider-component
       * https://github.com/rollup/plugins/tree/master/packages/commonjs#requirereturnsdefault
       **/
      requireReturnsDefault: true,
    },
  },
})
