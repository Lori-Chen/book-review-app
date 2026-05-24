/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        'primary-light': '#5DADE2',
        secondary: '#F39C12',
        'secondary-dark': '#E67E22',
      },
    },
  },
  plugins: [],
}
