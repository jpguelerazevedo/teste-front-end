import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// A API de produtos não envia cabeçalhos CORS, então as chamadas passam por um proxy local.
const proxy = {
  '/api': {
    target: 'https://app.econverse.com.br',
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/api/, '/teste-front-end/junior/tecnologia'),
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { proxy },
  preview: { proxy },
})
