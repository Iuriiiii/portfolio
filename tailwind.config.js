/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: ['bg-pink-400', 'bg-blue-400', 'bg-zink-400'],
  theme: {
    extend: {

    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@kamona/tailwindcss-perspective'),
  ],
}
