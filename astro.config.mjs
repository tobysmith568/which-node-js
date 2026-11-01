// @ts-check
import { satteri } from "@astrojs/markdown-satteri";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { externalLinks } from "./src/markdown/externalLinks.ts";

const site = "https://which-node.js.org";

// These pages are marked as `noindex`, so they must not be advertised in the sitemap
const noIndexPaths = ["/privacy", "/terms", "/third-party"];

const isIndexablePage = (/** @type {string} */ page) => {
  const { pathname } = new URL(page);
  return !noIndexPaths.includes(pathname);
};

// https://astro.build/config
export default defineConfig({
  site,
  // Emit `faq.html` rather than `faq/index.html` so that `/faq` is served by GitHub Pages without a redirect to `/faq/`
  build: { format: "file" },
  trailingSlash: "never",
  integrations: [sitemap({ filter: isIndexablePage })],
  markdown: {
    // The markdown documents are legal text; leave their characters exactly as written
    processor: satteri({
      hastPlugins: [externalLinks],
      features: { gfm: false, smartPunctuation: false }
    })
  }
});
