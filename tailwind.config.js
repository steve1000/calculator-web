/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'purple': '#6466E9',
      'purple-dark': 'rgba(78, 69, 221, 0.5)',
      'grey': 'rgba(78, 70, 222, 0.1)',
      'light-grey': '#F9FAFB',
      'white': '#ffffff',
    },
    borderWidth: {
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
    },
    screens: {
      'xs-max': {'max': '360px'},
      'xs-min': {'min': '361px'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'purple-dark-text': '#4E45DD',
        'grey-dark-border': '#4D4D4D',
        'grey-light-border': '#D1D5DA',
        'grey-text': '#394150',
        'error-text': '#CB3A31',
        'error-background': '#F4E7E7',
        'error-border': '#F0A9A6',
      },
    },
  },
  plugins: [],
}
