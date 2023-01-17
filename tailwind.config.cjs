/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: "Fira Mono",
    },
    extend: {
      colors: {
        primary: "#858AE3",
        white: "#F4F7F5",
        gray: "#A7A2A9",
        dark: "#1E1E1F",
        "dark-secondary": "#28282A",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ]
};
