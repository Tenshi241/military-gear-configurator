/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        military: {
          dark: '#1a1a1a',
          gray: '#2d2d2d',
          accent: '#d4af37',
          green: '#4a7c59',
        }
      }
    },
  },
  plugins: [],
}