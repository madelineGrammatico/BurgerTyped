import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ajouter le "resolve" ci-dessous que si tu utilise un projet vite.js en CRA, pas besoin.
  // sans ça, il n'arrive pas à importer les fichier simples comme @theme/theme
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
