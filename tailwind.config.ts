/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          terracotta: '#C96B4A',
          charcoal: '#2C2C2C',
          sage: '#A8B5A0',
          beige: '#F5F3EF',
          warmgray: '#4A4A4A',
        },
        fontFamily: {
          serif: ['Playfair Display', 'Georgia', 'serif'],
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }