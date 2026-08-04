/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          orange: '#FF8C00',
          gold: '#D4AF37',
          gray: '#333333',
          glass: 'rgba(255,255,255,.08)',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 24px 80px rgba(212,175,55,.18)',
        glass: '0 20px 70px rgba(0,0,0,.45)',
      },
      backgroundImage: {
        radial: 'radial-gradient(circle at top, rgba(255,140,0,.24), transparent 35%), radial-gradient(circle at 80% 20%, rgba(212,175,55,.16), transparent 25%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        sheen: 'sheen 4s linear infinite',
        pulseGold: 'pulseGold 3s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        sheen: {
          '0%': { transform: 'translateX(-140%) skewX(-25deg)' },
          '100%': { transform: 'translateX(280%) skewX(-25deg)' },
        },
        pulseGold: {
          '0%,100%': { boxShadow: '0 0 0 rgba(212,175,55,0)' },
          '50%': { boxShadow: '0 0 40px rgba(212,175,55,.28)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};
