/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",        // ✅ scan src/app/
    "./src/components/**/*.{js,ts,jsx,tsx}", // ✅ scan src/components/
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
