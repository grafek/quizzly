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
        dark: "#111",
        white: "#fff",
        gray: "#999",
        "light-gray": "#999",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
