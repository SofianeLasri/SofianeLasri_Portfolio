import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
    output: 'server',
    i18n: {
        defaultLocale: "fr",
        locales: ["fr", "en"],
    },
    adapter: vercel()
});
