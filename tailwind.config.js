/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f2f5',
          100: '#d1d6e1',
          200: '#a8b1c3',
          300: '#7e8ca5',
          400: '#5e6b87',
          500: '#404a64',
          600: '#293553',
          700: '#1c2540',
          800: '#0F172A',
          900: '#0A2342'
        },
        army: {
          50: '#f1f5f1',
          100: '#dce8dc',
          200: '#bbd4bc',
          300: '#99c09a',
          400: '#7aac7c',
          500: '#5c955e',
          600: '#3F704D',
          700: '#345A3F',
          800: '#244230',
          900: '#162A20'
        },
        tactical: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#4A4A4B',
          700: '#333333',
          800: '#1A1A1A',
          900: '#0A0A0A'
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        card: '0 2px 5px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};