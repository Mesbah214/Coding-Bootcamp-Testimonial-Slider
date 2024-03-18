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
