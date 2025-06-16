/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#86789C',
        secondary: '#D7E039',
        accent: '#9FD5B5',
        'primary-light': '#A394B8',
        'primary-dark': '#6B5D7A',
        'secondary-light': '#E2E85C',
        'secondary-dark': '#B8C02E',
        'accent-light': '#B8E0C9',
        'accent-dark': '#7BC49A',
      }
    },
  },
  plugins: [],
};