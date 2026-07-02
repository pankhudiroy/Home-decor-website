/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#faf8f4',
          100: '#f3eee4',
          200: '#e7dcc8',
          300: '#d6c4a4',
          400: '#c2a87d',
          500: '#b08f5e',
          600: '#9a764c',
          700: '#7c5d3d',
          800: '#5f4830',
          900: '#3f2f20',
        },
        ink: {
          50: '#f6f5f3',
          100: '#e8e6e1',
          200: '#cdc9bf',
          300: '#a8a294',
          400: '#7c7565',
          500: '#5a5345',
          600: '#3f3a30',
          700: '#2b2820',
          800: '#1c1a15',
          900: '#0f0e0b',
        },
        accent: {
          50: '#f0f7f4',
          100: '#dcebe4',
          200: '#b9d6c9',
          300: '#8bbbab',
          400: '#5d9a87',
          500: '#3f7d6b',
          600: '#2f6354',
          700: '#264f43',
          800: '#1d3b33',
          900: '#142822',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
