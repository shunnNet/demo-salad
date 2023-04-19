import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import svgLoader from 'vite-svg-loader'
import htmlPlugin from 'vite-plugin-html-config'
import autoprefixer from 'autoprefixer'

const htmlOptions = {
  title: 'Demo - Digi Salad ',
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demo-salad/',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
    svgLoader(),
    htmlPlugin(htmlOptions),
  ],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/scss/env.scss";
        `,
      },
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
})
