import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        moon: "#d2b5f2",
        biloba: "#ba7feb",
        mediump: "#8156d7",
        purp: "#4c40ce",
        govenor: "#3f2ec2",

        light: {
          primary: "#346ec7",
          textlight: "#ffffff",
        },

        dark: {
          primarydark: "#174790",
          textdark: "#000000",
        },

        cards: {},
        customteal: "#00ADB5",
        customtealdark: "#007F87",
        customgray: "#393E46",
        customdark: "#222831",
        txtdark: "#0D0D11",
        txtlight: "#f5f5f5",
        custombglight: "#e5e8ed",
        gray_dark: "#353839",
        // Cards
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
