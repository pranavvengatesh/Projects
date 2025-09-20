/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'hero-font':'Sriracha'
    },
    borderColor:{
      'primary':' rgb(85, 81, 227)',
      'secondary':'#2D336B',
    }
  },
  plugins: [],
}

