module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('../images/footer.png')",
      },
      colors: {
        nmr: {
          footer: "#089BA3",
          lightBlue: "#03B6BD",
          darkBlue: "#1B7AA8",
          lightGreen: "#05BE9B",
          liteblue: "#00A6A0",
          grey: "##6C757D",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
