const plugin = require("tailwindcss/plugin");
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        web: {
          500: "#F59E0B",
        },
        native: {
          500: "#0EA5E9",
        },
        figma: {
          500: "#10B981",
        },
        talk: {
          500: "#c084fc",
        },
      },
      fontFamily: {
        rubrik: ["rubik", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".gradient-text-rgb": {
          background:
            "linear-gradient(160deg, #FCD34D 0%, #F59E0B 13.54%, #FD6243 27.60%, #DF74EE 42.19%, #8364F4 55.73%, #6AB7E0 70.31%, #92EFCD 82.81%, #32CC91 96.88%)",
        },
        ".gradient-logo-rgb": {
          background:
            "linear-gradient(97deg, #FCD34D 23.44%, #FD6243 37.71%, #8364F4 77.08%, #92EFCD 100%)",
        },
        ".gradient-web": {
          background: "linear-gradient(180deg, #FCD34D 0%, #F59E0B 100%)",
        },
        ".gradient-native": {
          background: "linear-gradient(144deg, #7DD3FC 0%, #0EA5E9 100%)",
        },
        ".gradient-figma": {
          background: "linear-gradient(153deg, #6EE7B7 0%, #10B981 100%)",
        },
        ".gradient-youtube": {
          background: "linear-gradient(153deg, #c4302b  0%, #FF0000  100%)",
        },
      });
    }),
  ],
};
