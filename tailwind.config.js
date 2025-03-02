/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#7BB7D5', // Lightest blue
          200: '#55A1C7', // Light blue
          300: '#3B88AE', // Medium blue
          400: '#2F6A87', // Dark blue
          500: '#284c66'  // Darkest blue - New base color
        }
      }
    },
  },
  plugins: [],
};