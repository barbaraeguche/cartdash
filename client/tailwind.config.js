/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mint': '#B5DDA4',
        'beige': '#F2F3D9',
      },
    },
  },
  plugins: [],
};
