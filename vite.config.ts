import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import env from 'vite-plugin-env-compatible'

const pathSrc = resolve(__dirname, "./src")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), env()],
  resolve:{
    alias: [
      {
        find: '@', replacement: pathSrc
      }
    ]
  },
  css: {
    preprocessorOptions: {
        scss: {
            additionalData: `@import "${pathSrc}/assets/scss/main.scss";`,
        },
    },
  }
})
