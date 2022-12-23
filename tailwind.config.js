/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: 'rgba(10, 58, 103, 0.4)',
        lightgray: 'rgba(10, 58, 103, 0.2)',
        blue: '#0A3A67',
        red: '#75013D',
        white: '#ffffff'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
