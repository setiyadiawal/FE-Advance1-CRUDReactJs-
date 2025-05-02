import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://rest-api-ca663-default-rtdb.firebaseio.com/",
        changeOrigin: true,
        secure: false
      }
    }
  }
})
