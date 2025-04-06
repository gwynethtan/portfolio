import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [".flowbite-react\\class-list.json"],
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
}