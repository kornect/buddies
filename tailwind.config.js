/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik']
      },
      spacing: {
        108: '27rem',
        120: '30rem',
        132: '33rem'
      },
      transformOrigin: {
        0: '0%'
      },
      zIndex: {
        '-1': '-1'
      },
      fontSize: {
        xxs: ['0.60rem', { lineHeight: '1rem' }]
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')]
};
