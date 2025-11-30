import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk size warning limit (default is 500kb)
    chunkSizeWarningLimit: 2000, // size in KB, adjust as needed
  },
})
