import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blessedbeyondfoundation.com',
  meta: {
    siteName: 'Blessed Beyond Foundation'
  },
  integrations: [
    preact(),
    sitemap({
      canonicalURL: 'https://blessedbeyondfoundation.com'
    })
  ],
});
