/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./scripts/**/*.js",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'hello-honey': ['"Hello Honey"', 'cursive'],
      },
      backgroundImage: {
        "home": "url('./Images/texture.png')"
      }
    },
  },
  plugins: [],
}