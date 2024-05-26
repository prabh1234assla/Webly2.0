import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#22092C",
          200: "#2F113C",
        },
        secondary: {
          100: "#F05941",
          200: "#872341",
          300: "#BE3144",
        },
      },
    },
  },
  plugins: [],
};
export default config;
