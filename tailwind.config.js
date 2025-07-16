/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // <- important
    "./components/**/*.{js,ts,jsx,tsx}", // <- if using custom components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-josefin)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
