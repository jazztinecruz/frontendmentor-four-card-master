module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGreen: '#44D2D2',
        blue: '#539DF0',
        red: '#EB5354',
        orange: '#FBAD4A',
        black: '#525358',
        blueBlack: '#515266',
        lightGray: '#B9B9BB',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        primary: '0px 8px 30px #DFE6EE'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
