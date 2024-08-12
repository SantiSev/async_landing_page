/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ["Montserrat", "sans-serif"],
      },
      colors: {
        background_blue: '#002FFF', 
        background_purple: '#3D188C',
      }
     
    },
  },
  plugins: [],
}

