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
        'accent-1': '#F8F5FF',
        'neutral-main': '#FFFBF8',
        'main': '#042D1E', 
        'main-3': '#88A599',
      }
    },
  },
  plugins: [],
}

