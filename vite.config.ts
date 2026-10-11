import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 주소가 https://r00neyj.github.io/my-sns/ 라서 하위 경로를 지정
  base: '/my-sns/',
  plugins: [react()],
})
