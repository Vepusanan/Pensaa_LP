// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://pensaa.com",
  output: "static",
  integrations: [
    sitemap({
      // Legal placeholders are noindex until real policies exist
      filter: (page) => !/\/(terms|privacy|cookies|support)\/$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
