import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slateSoft: "#f8fafc",
        primary: "#4f46e5",
        accent: "#14b8a6"
      }
    }
  },
  plugins: []
};

export default config;
