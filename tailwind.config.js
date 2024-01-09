/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',          
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'dark-mode-difest': '#4F4675',
      'light-mode-difest': '#F9EC83',
      'hijau-difest': '#27D1D1',
      'hijau-difest-hover': '#20C2C2',
      'kuning-difest': '#FFFFA0',
      // 'biru-bg-difest': '#1a5073',
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
