import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 주소가 https://r00neyj.github.io/my-sns/ 라서 하위 경로를 지정
  base: '/my-sns/',
  plugins: [
    react(),
    // 휴대폰 홈 화면에 설치할 수 있게 매니페스트와 서비스 워커를 만듦
    VitePWA({
      // 새로 배포하면 묻지 않고 새 버전으로 바뀜
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      // 아이콘은 아래 globPatterns 로 이미 저장되므로 따로 넣지 않음
      includeManifestIcons: false,
      manifest: {
        name: '빵지순례',
        short_name: '빵지순례',
        description: '우리 동네 빵집에서 만난 오늘의 빵을 사진으로 남겨요',
        lang: 'ko',
        display: 'standalone',
        // base 와 같은 경로
        start_url: '/my-sns/',
        scope: '/my-sns/',
        // 디자인 규칙의 화면 배경색 (상단바와 같은 색)
        theme_color: '#fff3f0',
        background_color: '#fff3f0',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
      workbox: {
        // 빌드된 앱 파일만 저장. runtimeCaching 을 두지 않아서 Supabase 요청과 게시물 사진은 저장하지 않음
        globPatterns: ['**/*.{js,css,html,svg,png}'],
      },
    }),
  ],
})
