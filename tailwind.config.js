/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'land': "url('../assets/landscape.jpeg')",
        'water':"url('../assets/water.jpg')",
        'hard':"url('../assets/hardscape.jpeg')",
        'indoor':"url('../assets/indoor.jpeg')",
        'verticle':"url('../assets/vertical.jpeg')",
        'roof':"url('../assets/greenroof.jpg')",

        'green-gradient': 'linear-gradient(to top, green, transparent)',
      },
    },
  },
  plugins: [],
}