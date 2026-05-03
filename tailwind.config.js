/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'body': ['"Inter"', 'sans-serif'],
        'sora': ['"Sora"', 'sans-serif'],
      },
      colors: {
        'primary': '#111520',
        'secondary': '#1A2030',
        'accent': '#D6A848',
        'accent-dark': '#B88F35',
        'accent-light': '#F0CB6E',
        'text-light': '#F8FAFC',
        'text-muted': '#94A3B8',
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.8s ease-out',
        'fade-in-scale': 'fade-in-scale 0.6s ease-out',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(214, 168, 72, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(214, 168, 72, 0.6)' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-scale': {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
