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
        customteal: "#00ADB5",
        customtealdark: "#007F87",
        customgray: "#393E46",
        customdark: "#222831",
        txtdark: "#0D0D11",
        txtlight: "#f5f5f5",
        custombglight: "#e5e8ed",
        custombgdark: "#353839",
        // Cards
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
