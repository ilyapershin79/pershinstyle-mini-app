/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pershin-blue': {
          light: '#2D4961',
          DEFAULT: '#1A2F42',
          dark: '#071323',
        },
        'pershin-gold': '#D4AF37',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-pershin': 'linear-gradient(135deg, #2D4961 0%, #071323 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)',
      }
    },
  },
  plugins: [],
}