/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens : {
      // Mobile medium
      'mm' : "375px",
      // Mobile large
      'xs' : "420px",
      'sm' : "648px",
      'md' : "768px",
      'lg' : "1024px",
      'xl' : "1280px",
      '2xl' : "1536px",
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}