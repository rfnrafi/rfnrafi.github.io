module.exports = {
  mode: ["jit"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#F03737",
      },
      fontSize : {
        "-g1" : "0,8607333448097779rem",
        "g" : "1rem",
        "g1" : "1,1618‬rem",
        "g2" : "1,34977924‬rem",
        "g3" : "1,568173521032‬rem",
        "g4" : "1,821903996734978‬‬rem",
        "g5" : "2,116688063406697‬‬‬rem",
        "g5" : "2,459168192065901‬‬‬rem",
        "g7" : "2,857061605542163‬‬‬rem",
        "g8" : "3,319334173318885‬‬‬rem",
        "g9" : "3,856402442561881‬‬‬rem",
        "g10" : "4,480368357768393‬‬‬rem",
        "g11" : "5,205291958055319‬‬‬rem",
        "g12" : "6,04750819686867‬‬‬rem",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
