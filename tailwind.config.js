module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['sans-serif'],
        'Readex-Pro': ['sans-serif']
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
