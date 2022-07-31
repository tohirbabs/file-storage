/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nova-green': '#3cb043',
        'nova-black': '#242424',
        'nova-grey': '#333333'
      }
    },
  },
  plugins: [],
}