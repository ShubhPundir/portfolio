import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // the name of the github repository that I created
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
    port: 5173,
  },
})

// COMMANDS: 
// npm run build
// npx gh-pages -d dist
