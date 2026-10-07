import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages वर repo-name/ या subpath खाली host होतं, म्हणून base द्यावा लागतो.
  // उदा. repo चं नाव "trinova-techsolution" असेल तर: base: '/trinova-techsolution/'
  base: '/<repo-name>/',
})
