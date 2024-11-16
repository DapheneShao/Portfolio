import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  server: {
    port: 80, // 设置端口号
    host: '0.0.0.0', // 可选：指定主机地址
  },
})
