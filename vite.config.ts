import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api-to-gscript': {
        target: 'https://script.google.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-to-gscript/, '/macros/s/AKfycbwbGXs62kKsRYaweUSksfORBzD0pCnv8S3-PjC_oKz7re9PM-evQ85KiwO8x-Z7kebqGg/exec')
      }
    }
  },
  base: './',
})