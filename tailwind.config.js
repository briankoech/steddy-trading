/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['raleway'],
    },
    extend: {
      height: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
