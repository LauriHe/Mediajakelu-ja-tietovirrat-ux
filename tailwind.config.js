/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      HammersmithOne: ['HammersmithOne', 'sans-serif'],
    },
    extend: {
      colors: {
        'raisin-black': '#262935ff',
        'raisin-black-2': '#1B1A20ff',
        'tiffany-blue': '#8EC3BBff',
        'non-photo-blue': '#ACE2E4ff',
        'quinacridone-magenta': '#934061ff',
        'quinacridone-magenta-2': '#a55a77',
      },
    },
    screens: {
      sm: '640px',

      md: '768px',

      rg: '850px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',
    },
  },
  plugins: [],
};
