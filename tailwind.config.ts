import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2f7",
          100: "#d4dfea",
          200: "#a9bfd5",
          300: "#7e9fc0",
          400: "#4a6f96",
          500: "#2c4e73",
          600: "#1c3a5e",
          700: "#142c48",
          800: "#0d1f36",
          900: "#081527",
          950: "#050d19",
        },
        emerald: {
          50: "#e9f9f1",
          100: "#c8f0dc",
          200: "#93e0bb",
          300: "#5ecb99",
          400: "#33ae7c",
          500: "#1f9463",
          600: "#17754f",
          700: "#145c40",
          800: "#124a35",
          900: "#0f3c2c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0.875rem",
      },
    },
  },
  plugins: [],
};

export default config;
