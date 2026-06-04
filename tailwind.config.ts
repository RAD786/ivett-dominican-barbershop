import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080808",
        coal: "#121212",
        smoke: "#1c1b1a",
        ivory: "#f7f1e8",
        flagBlue: "#002D62",
        flagRed: "#CE1126",
        flagWhite: "#F7F1E8"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0, 45, 98, 0.28), 0 12px 48px rgba(206, 17, 38, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
