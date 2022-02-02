const defaultTheme = require('tailwindcss/defaultTheme');
const colors       = require('tailwindcss/colors');

module.exports = {
  important: true,
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      primary : '#1f396f',
      secondary : '#2aafd8',
      ...colors,
    },
    screens : {
      'xs' : '360px',
      ...defaultTheme.screens,
    }
  },
  variants: {
    extend: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
