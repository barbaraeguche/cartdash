/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mint': {
          '100': '#72A865E5',
          DEFAULT: '#72A865B2',
          '90': '#b5dda4',
        },
        'beige': '#F2F3D9',
      },
    },
  },
  plugins: [],
};
