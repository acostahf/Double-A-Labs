module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('../images/footer.png')",
        hero: "url('../images/heroBg.png')",
        secTwo: "url('../images/secTwo.png')",
        group: "url('../images/Group.png')",
        room: "url('../images/room.png')",
        secSnS: "url('../images/secSnS.png')",
        cardG: "url('../images/cardG.png')",
        dots: "url('../images/dots.png')",
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
        },
      },
      boxShadow: {
        lg: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 107, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
