/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        darkSecondary: "#28282A",
        branch: "#099104",
        cmd: "#e100ff",
        add: "#4024e0",
        pull: "#4024e0",
        commit: "#1a5ba5",
        merge: "#118d7c",
        push: "#8d54e1",
        default: "#7e1aa5",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // code: {
            //   backgroundColor: theme('colors.gray.100'),
            //   padding: '0.2rem 0.4rem',
            //   borderRadius: theme('borderRadius.md'),
            // },
            // pre: {
            //   backgroundColor: theme('colors.gray.900'),
            //   color: theme('colors.gray.100'),
            //   padding: '1rem',
            //   borderRadius: theme('borderRadius.md'),
            //   overflowX: 'auto',
            // },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ]
};
