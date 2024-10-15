import { defineConfig } from 'vite' 
import from 'vite-plugin-vercel'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:process.env.PORT 
  },
  plugins: [react()],
})