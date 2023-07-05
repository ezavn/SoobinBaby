/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "serif"],
        ms: ["Ms Madi", "cursive"],
        birth: ["Birthstone Bounce", "cursive"],
      },
      colors: {
        white: "#fff",
        black: "#252525",
        red: "#E81207",
        yellow: "#F29C1F",
        lightYellow: "#F79E21",
        green: "#6AA062",
        grey: "#6E6E6E",
      },
      margin: {
        section: "80px",
        sectionMB: "50px",
      },
      spacing: {
        section: "80px",
        sectionMB: "50px",
      },
    },
  },
  plugins: [],
};
