/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundColor: {
        bgDark: '#080808',
        bgNoDark: '#F5F5F5'
      }
    },
  },
  plugins: [],
}
