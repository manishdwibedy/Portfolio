import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // This ensures your site works on manishd.in
  base: '/', 
  build: {
    rollupOptions: {
      input: {
        // "main" is your default index.html
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        refund: resolve(__dirname, 'refund.html'),
        services: resolve(__dirname, 'services.html'),
        talks: resolve(__dirname, 'talks.html'),
        terms: resolve(__dirname, 'terms.html'),
        // You can add the backup/old files if you need them built too:
        'talks-old': resolve(__dirname, 'talks-old.html'),
        'talks-backup': resolve(__dirname, 'talks-updated-backup.html'),
      },
    },
  },
})