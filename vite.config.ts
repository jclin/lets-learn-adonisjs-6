import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  server: {
    // watch: {
    //   // Polling because WSL2 file system events don't propagate to the Windows host.
    //   // https://dev.to/proparitoshsingh/hmr-not-working-in-vite-on-wsl2-5h2k
    //   usePolling: true,
    // },
    hmr: {
      host: 'localhost',
    },
  },
  plugins: [
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ['resources/css/app.css', 'resources/js/app.js'],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.edge'],
    }),
  ],

  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
})
