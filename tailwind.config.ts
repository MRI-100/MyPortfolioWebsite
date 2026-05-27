import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        panel: '#0d1828',
        mist: '#9eb0c7',
        brand: {
          cyan: '#3ee7d3',
          blue: '#5b8cff',
          coral: '#ff7a70',
          lime: '#b9f56f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(62, 231, 211, 0.18)',
        soft: '0 18px 60px rgba(7, 17, 31, 0.16)',
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(rgba(158,176,199,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(158,176,199,.07) 1px, transparent 1px)',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('light', '.light &');
    }),
  ],
} satisfies Config;
