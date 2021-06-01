module.exports = {
  purge: [
    "./src/**/*.jsx", "./index.html",
  ], // needed for purging of styles
  darkMode: false, // or 'media' or 'class'
  theme: { //definition of color palette, fonts, type scale, border sizes, breakpoints etc.
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif",
      },
    },
  },
  variants: { // controls which variants are generated for the core utilities
    extend: {},
  },
  plugins: [],
}
