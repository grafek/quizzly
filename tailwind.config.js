/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goldenrod: "#DAA520",
        "light-goldenrod": "#FFEC8B",
        black: "#000",
        darker: "#111",
        white: "#fff",
        dark: {
          100: "#999",
          200: "#888",
          300: "#777",
          500: "#555",
          600: "#444",
          700: "#333",
          400: "#666",
          800: "#222",
          900: "#111",
        },
      },
      fontFamily: {
        mukta: "Mukta",
      },
      listStyleType: { letters: "upper-alpha" },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
