module.exports = {
  mode: ["jit"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#F03737",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
