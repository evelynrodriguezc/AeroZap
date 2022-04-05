module.exports = {
  content: ['./public/*.{html,js}'],
  theme: {
    textColor: {
      primary: "#CC2D4A",
      secondary: "#8FA206",
      terciary: "#61AEC9",
      white: "#FFFF",
      black: "#0000",
    },
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
      }),
      backgroundImage: {
        sanFrancisco: "url('../img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
        yosemite: "url('../img/yosemite.jpg')",
        LA: "url('../img/LA.jpg')",
        seattle: "url('../img/seattle.jpg')",
        new_york: "url('../img/new_york.jpg')",
        norway: "url('../img/norway.jpg')",
        sydney: "url('../img/sydney.jpg')",
        miami: "url('../img/miami.jpg')",
        switzerland: "url('../img/switzerland.jpg')",
        bali: "url('../img/bali.jpg')",
        chicago: "url('../img/chicago.jpg')",
        europe: "url('../img/europe.jpg')",
        iceland: "url('../img/iceland.jpg')",
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  ringColor:{
    'primary': '#CC2D4A',
    'secondary': '#8FA206',
    'tertiary': '#61AEC9',
  },  
  plugins: [],
};