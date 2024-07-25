import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"]
  },
  adapter: vercel({
    webAnalytics: { enabled: true },
    imageService: true,
    imagesConfig: {
      sizes: [320, 400, 640, 1280],
      formats: ["image/avif", "image/webp"],
      domains: [],
    },
  }),
  integrations: [mdx(), vue()]
});