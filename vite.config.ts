import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api/v1":"https://pasal-ecommerce-server.onrender.com"|| "http://localhost:4000"
    }
  }
})
