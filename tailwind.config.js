/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'green-blue': '#1565C0',
        'argie-blue': '#64B5F6',
        'uranian-blue': '#A2D6F9',
        'light-blue': '#e4eaf2',
        'light-green': "#CFE57D",
      }
    },
  },
  plugins: [],
}