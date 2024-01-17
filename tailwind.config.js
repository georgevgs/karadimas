/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  "./node_modules/flowbite/**/*.js",
];
export const theme = {
  extend: {
    width: {
      1200: "1200px",
    },
    height: {
      800: "800px",
    },
  },
};
export const plugins = [require("flowbite/plugin")];
export const darkMode = ["class", ".darkmode"];
