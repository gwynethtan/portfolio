const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'neon': '#C62EE8',
        'secondary': '#818AA2',
        'card':'rgba(217, 217, 217, 0.1)',
        'purple-blur': '#350F55',
        'blue-blur': '#292054',
      }
    },
  },
  plugins: [flowbiteReact],
};
