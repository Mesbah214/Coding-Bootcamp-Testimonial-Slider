/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    fontWeight: {
      'regular': '300',
      'medium': '500',
      'bold': '700'
    },
    extend: {
      backgroundPosition: {
        'top-left': 'top left 22%'
      },
      backgroundSize: {
        '75': '75%',
        '45': '45%',
        'quotes-sm': '3.125rem',
        'quotes-md': '4rem',
        'quotes-xl': '8rem'
      },
      fontFamily: {
        'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'dark-blue': 'hsl(240, 38%, 20%)',
        'primary-gray': 'hsla(250, 9%, 40%, 1)',
        'grayish-blue': 'hsl(240, 18%, 77%)'
      },
    },
  },
  plugins: [],
}
