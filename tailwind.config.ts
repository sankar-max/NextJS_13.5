import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Rajdhani", "sans-serif"],
      },
      colors: {
        "primary-100": "#A3DEFF",
        "primary-200": "#67A8E9",
        "primary-300": "#202740",
        "primary-400": "#343E66",
        "primary-900": "#141728",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
