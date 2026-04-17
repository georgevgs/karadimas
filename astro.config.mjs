import {defineConfig} from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";

export default defineConfig({
    site: "https://ikaradimas.gr",
    output: "static",
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    image: {
        layout: "constrained",
    },
    prefetch: {
        prefetchAll: true,
        defaultStrategy: "viewport",
    },
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        sitemap(),
        mdx(),
        icon(),
        compress(),
        robotsTxt()
    ],
});
