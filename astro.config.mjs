// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), robotsTxt(), sitemap(), icon()],
  site: "https://start-ui.com/",
  adapter: vercel(),
});