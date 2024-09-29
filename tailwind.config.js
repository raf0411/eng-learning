/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '--clr-dark-blue': '#2D3142',
        '--clr-light-blue': '#4F5D75',
        '--clr-light-gray': '#BFC0C0',
        '--clr-text': '#FFF',
        '--clr-orange': '#EF8354', 
      },
      fontSize: {
        '--fs-h1': '2.5rem',
        '--fs-h2': '1.75rem',
        '--fs-h3': '1.5rem',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        serif: ['Montserrat', 'serif'],
      }
    },
  },
  plugins: [],
}

