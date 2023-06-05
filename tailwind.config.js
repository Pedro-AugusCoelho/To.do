/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#4EA8DE',
        'blue-dark': '#1E6F9F',
        'purple': '#8284FA',
        'purple-dark': '#5E60CE',
        'danger': '#E25858',
        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
        'sm': '425px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

