/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
        // primary: "#1E40AF",
        // secondary: "#FBBF24",
    },
    fontFamily: {
      Outfit: ["Outfit", "sans-serif"],
      Ovo: ["Ovo", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
