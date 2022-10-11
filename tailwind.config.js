/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': "'Barlow', sans-serif",
        'serif': "'Fraunces', serif",
      },
      colors: {
        'soft-red': '#fe7867',
        'yellow': '#fad400',
        'dark-cyan': '#25564b',
        'dark-blue': '#19536b',
        'moderate-cyan': '#458c7e',
        'very-dark-blue': '#23303e',
        'very-dark-gray-blue': '#5a636c',
        'dark-gray-blue': '#818498',
        'gray-blue': '#a7abae',
        'greenish': '#90d4c5',
      },
      height: {
        '128': '32rem',
        '192': '48rem',
        '256': '64rem',
      },
      spacing: {
        '9px': '9px',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
