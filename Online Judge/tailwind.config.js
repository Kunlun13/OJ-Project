/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "a" : "80%"
      },
      width: {
        "a" : "80%"
      },
      maxWidth: {
        "a" : "800px"
      },
      padding: {
        "a" : "8%"
      }
    },
  },
  plugins: [],
}