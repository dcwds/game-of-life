const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: colors.blue,
      gray: colors.blueGray,
      green: colors.emerald
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
