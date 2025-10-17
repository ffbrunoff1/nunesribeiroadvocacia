/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8F0FF',
          100: '#D1E1FF',
          200: '#A3C3FF',
          300: '#75A5FF',
          400: '#5A8DEE',
          500: '#0D28A6',
          600: '#0B2394',
          700: '#091E82',
          800: '#071970',
          900: '#05145E',
        },
        secondary: {
          50: '#F7F7F8',
          100: '#EFEFF1',
          200: '#DFDFEA',
          300: '#CFCFE3',
          400: '#B0AFB9',
          500: '#6E6B7B',
          600: '#626069',
          700: '#565456',
          800: '#4A4844',
          900: '#3E3C32',
        },
        accent: {
          50: '#F0F8FF',
          100: '#E1F1FF',
          200: '#C3E3FF',
          300: '#A5D5FF',
          400: '#87C7FF',
          500: '#5A8DEE',
          600: '#4B7AD6',
          700: '#3C67BE',
          800: '#2D54A6',
          900: '#1E418E',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Monaco', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
};
