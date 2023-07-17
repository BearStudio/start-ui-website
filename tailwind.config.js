const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.gradient-text-rgb': {
          background:
            'linear-gradient(178deg, #FCD34D 0%, #F59E0B 13.54%, #FD6243 27.60%, #DF74EE 42.19%, #8364F4 55.73%, #6AB7E0 70.31%, #92EFCD 82.81%, #32CC91 96.88%)',
        },
        '.gradient-logo-rgb': {
          background:
            'linear-gradient(97deg, #FCD34D 23.44%, #FD6243 37.71%, #8364F4 77.08%, #92EFCD 100%)',
        },
      });
    }),
  ],
};
