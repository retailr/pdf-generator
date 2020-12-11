module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['Work Sans', 'sans-serif'],
      },
      colors: {
        primary: '#f9534d'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
