import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // listen on 0.0.0.0 (all interfaces)
    port: 5173,      // optional, default is 5173
    strictPort: true // optional, fail if port is taken instead of picking another
  }
})
