import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      'weather-app-ppx5.onrender.com' // 👈 add your deployed host here
    ]
  },
})
