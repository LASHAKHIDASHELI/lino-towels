/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#2D5A3D',
        cream: '#F5F1E8',
        'forest-dark': '#1a3a2a',
        'forest-light': '#4a7c5d',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Plus Jakarta Sans', 'system-ui', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        bounce: 'bounce 2s infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'lg': '0 10px 40px rgba(45, 90, 61, 0.1)',
        'xl': '0 20px 60px rgba(45, 90, 61, 0.15)',
      },
    },
  },
  plugins: [],
}
