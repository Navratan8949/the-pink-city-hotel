/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F1EA',
        sand: '#E8DFD0',
        beige: '#D9CDB8',
        charcoal: '#1A1816',
        'charcoal-light': '#2A2622',
        'dark-brown': '#3D332B',
        gold: '#B8985A',
        'gold-light': '#C9A96E',
        'gold-dark': '#9A7B42',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.3em',
        'wide-lg': '0.2em',
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 12vw, 11rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display': ['clamp(2.5rem, 7vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        'section': ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease forwards',
        'slide-up': 'slideUp 1s ease forwards',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
