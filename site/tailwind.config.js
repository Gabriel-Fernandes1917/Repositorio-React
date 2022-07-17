/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    screens:{
      desktop: '1024px',
      desktop2: '1280px'
    },
    extend: {
      backgroundColor: {
        bgDark: '#080808',
        bgNoDark: '#F5F5F5',
      },
      fontFamily:{
        'IBM': ['IBM Plex Mono', 'monospace'],
        'Raleway': ['Raleway', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        linkedin: './src/assets/iconLinkedin.png',
        git: './src/assets/iconGit.png'
      }
      ,
      textColor: {
        grayText: '#9C9C9C'
      },


    },
  },
  plugins: [],
}
