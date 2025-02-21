/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#F5F5F5",
        white: "#FFFFFF",
        dark: "#333333",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        prompt: ["var(--prompt)"],
        sulphur_Point: ["var(--sulphur_Point)"],
        sans: ["Sarabun", "sans-serif"],
      },
    },
  },
  plugins: [],
};
