/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '150': '37.5rem',
        '160': '40rem',
        '200': '50rem'
      }
    },
  },
  plugins: [],
}