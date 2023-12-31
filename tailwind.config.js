/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT(
    {
      content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
        fontFamily: {
          cattino: ['Cattino'],
        },
        screen: {
          'desktop2': '2080px',
      // => @media (min-width: 1280px) { ... }
        },
        extend: {
          backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
              'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          },
        },
      },
      plugins: [],
    }
);
