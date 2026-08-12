import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// omnica.ai is served from the root of a GitHub *user* pages repo
// (ericksonc.github.io), so assets live at '/' -- not '/repo-name/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
