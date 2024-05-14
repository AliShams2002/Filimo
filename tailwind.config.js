/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'black': '#0c2444',
        'pink': '#0437F2',
        'aqua': '#f1f1f1'
      },

      screens: {
        's': '500px'
      }
    },
  },
  plugins: [],
}

