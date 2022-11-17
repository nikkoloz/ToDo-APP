/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        'main-green': '#5efc8d',
        'main-gray': '#e6ebff',
        'main-red': '#FC5E5E'
      },
      width: {
        "595": "595px"
      },
      screens: {
        'md1000': '1000px',
        'sm400': '400px'
        // "mdmx": { 'max': "768px" },
      },
    },
  },
  plugins: [],
};
