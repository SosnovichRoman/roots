/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'ease': 'ease',
      },
      colors: {
        'main-color': '#00B1FD', 
        'background-color': '#F8F8F8',
      }
    },
  },
  plugins: [],
}

