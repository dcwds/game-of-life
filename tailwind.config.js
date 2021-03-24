const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      blue: colors.blue,
      gray: colors.blueGray,
      purple: colors.indigo
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
