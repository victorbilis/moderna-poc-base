import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D637D",
        secondary: "#1d4ed8",
        background: {
          DEFAULT: "#f8fafc",
          paper: "#ffffff",
        },
        error: "#dc2626",
      },
    },
  },
  plugins: [],
};

export default config;
