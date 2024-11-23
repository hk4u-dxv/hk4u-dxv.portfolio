// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@componentsUI': '/src/components/ui',
        '@componentsSections': '/src/components/sections',
        '@componentsLayout': '/src/components/layout',
        '@layouts': '/src/layouts',
        '@pages': '/src/pages',
        '@scripts': '/src/scripts',
        '@assets': '/src/assets',
        '@styles': '/src/styles'
      }
    }
  }
});