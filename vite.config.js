import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import { resolve, dirname } from 'node:path'
import path from 'path'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: path.resolve(__dirname, 'src')
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Nutrition Project'
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@modules': fileURLToPath(new URL('./node_modules', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        globals: {
          jquery: 'window.jQuery'
        }
      }
    }
  }
})
