import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import svgLoader from 'vite-svg-loader'
import htmlPlugin from 'vite-plugin-html-config'

const htmlOptions = {
  title: 'The F2E 前端 & UI 修煉精神時光屋',
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(), htmlPlugin(htmlOptions)],
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
  },
})
