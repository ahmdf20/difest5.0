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
      'biru-dark-100': '#0A4696',
      'biru-dark-200': '#0B2F62',
      'dark-mode-difest': '#4F4675',
      'light-mode-difest': '#F9EC83',
      'hijau-difest': '#27D1D1',
      'hijau-difest-hover': '#20C2C2',
      'kuning-difest': '#FFFFA0',
      // 'biru-bg-difest': '#1a5073',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
