/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#292d3e',
        foreground: '#959dcb',
        comment: '#676e95',
        accent: '#c3e88d',
        redish: '#ff5370',
        orangish: '#f78c6c',
        yellowish: '#ffcb6b',
        greenish: '#c3e88d',
        bluish: '#82aaff',
        purplish: '#c792ea',
      },
    },
  },
  plugins: [],
}
