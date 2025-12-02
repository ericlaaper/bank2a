import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#138B3B',
        secondary: '#FFCB00',

        background: '#F7F6F2',
        'background-soft': '#FAFAF7',
        'text-main': '#333333',
        'text-muted': '#444444',
        'border-soft': '#DDDDDD',

        // Dark mode colors
        'background-dark': '#111827',
        'background-soft-dark': '#1F2933',
        'text-main-dark': '#F9FAFB',
        'text-muted-dark': '#D1D5DB',
        'border-soft-dark': '#374151',
        'paper-dark': '#1F2933',

        paper: '#F4F2EC',
        'paper-soft': '#E6DCCF',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
