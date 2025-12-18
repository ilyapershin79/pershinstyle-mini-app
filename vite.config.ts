import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // ИЗМЕНИТЕ С 5173 НА 5174
    host: true
  }
})