import {defineConfig} from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/static";

export default defineConfig({
    site: "https://ikaradimas.gr",
    compressHTML: true,
    output: "static",
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    integrations: [
        sitemap(),
        mdx(),
        icon(),
        tailwind({
            applyBaseStyles: false
        }),
        compress(),
        robotsTxt()
    ],
});