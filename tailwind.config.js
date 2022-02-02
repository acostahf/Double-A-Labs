module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('../images/footer.png')",
        hero: "url('../images/hero@2x.svg')",
        secTwo: "url('../images/secTwo.svg')",
        group: "url('../images/Group.png')",
        room: "url('../images/room.png')",
        secSnS: "url('../images/secSS.svg')",
        cardG: "url('../images/cardG.png')",
        dots: "url('../images/dots.png')",
        nodes: "url('../images/techynodes2.svg')",
        comuter: "url('../images/computer.png')",
        arrow: "url('../images/arrow.svg')",
      },
      colors: {
        nmr: {
          footer: "#089BA3",
          lightBlue: "#03B6BD",
          darkBlue: "#1B7AA8",
          lightGreen: "#05BE9B",
          liteblue: "#00A6A0",
          grey: "#6C757D",
          bgBlue: "#F2F6FF",
          textGrey: "#333333",
        },
      },
      // boxShadow: {
      //   lg: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 107, 1)",
      // },
      height: {
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
      },
      width: {
        800: "800px",
        1000: "1000px",
        1200: "1200px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
