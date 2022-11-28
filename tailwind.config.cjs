/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        valencia: ['Valencia', 'serif'],
        avenirRoman: ['AvenirRoman', 'sans-serif'],
        avenirBook: ['AvenirBook', 'sans-serif'],
        avenirLight: ['AvenirLight', 'sans-serif'],
        avenirHeavy: ['AvenirHeavy', 'sans-serif'],
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.25,
          },
        },
      },
    },
  },
  plugins: [],
}
