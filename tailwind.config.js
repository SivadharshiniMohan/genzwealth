/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4A853',
          light: '#E8C97A',
          dim: '#B8923F',
          pale: '#F2DEB0',
          glow: 'rgba(212, 168, 83, 0.45)',
        },
        cream: '#F5F0E8',
        ink: {
          DEFAULT: '#0c0a09',
          card: '#161412',
          elevated: '#1c1917',
          border: '#2e2a26',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        gold: '0 0 24px rgba(212, 168, 83, 0.25), 0 4px 24px rgba(0, 0, 0, 0.4)',
        'gold-sm': '0 0 16px rgba(212, 168, 83, 0.2)',
        card: '0 4px 24px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
      },
    },
  },
  plugins: [],
}
