/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-mint': '#72A865E5',
        'mint': '#72A865B2',
        'light-mint': '#b5dda4',
        'beige': '#F2F3D9',
      },
    },
  },
  plugins: [],
};
