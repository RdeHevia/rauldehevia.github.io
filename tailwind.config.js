const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./**/*.html", "./**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        midnightblue: "#0a0440",
        grouparooblue: "#29abe2",
        airbytepurple: "#9579fd",
        indigo: "#1D0D5C",
        monsoon_blue: "#649CD9",
        monsoon_purple: "#916cbf",
        monsoon_dark_purple: "#614980",
        link: {
          normal: "#4c74b9",
          decoration: "#d2dcee",
          hover: "#829dce",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
