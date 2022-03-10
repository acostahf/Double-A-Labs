module.exports = {
  purge: ["./src/**/*.js"],
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
        line: "url('../images/line.svg')",
        techRoom: "url('../images/tech-room.png') ",
        gradient: "url('../images/gradient.png')",
        testimonials: "url('../images/Testimonials.png')",
        training: "url('../images/training.png')",
        footerGrad: "url('../images/footer-grad.png')",
      },
      colors: {
        nmr: {
          bgBlue: "#1372D8",
          orange: "#FF6D00",
          red: "#ff4046",
          yellow: "#f4d600",
          midnight: "#232b33",
          LightGray: "#f4f4f4",
          gray: "#6B7075",
        },
      },
      fontSize: {
        base: "24px",
        "5xl": "45px",
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
