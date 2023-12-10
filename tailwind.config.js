/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gradient-background": "linear-gradient(to right, #007c7c, #000000)",
      },
    },
  },
  plugins: [],
};