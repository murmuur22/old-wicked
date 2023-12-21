/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{jsx,js}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      cursor: {
        'ak47': 'url(public/assets/cursors/ak47.cur), auto',
        'frog': 'url(public/assets/cursors/frog.cur), auto',
        'frog-point': 'url(public/assets/cursors/frog-point.cur), pointer',
      },

      fontFamily: {
        'sans': ['helvetica-neue', 'sans-serif'],
        'light': ['helvetica-neue-light', 'sans-serif'],
        'ultralight': ['helvetica-neue-ultralight', 'sans-serif'],
        'body': ['bahnschrift', 'sans-serif'],
        'display': ['vcr-osd-mono', 'sans-serif'],
        'terminal': ['terminal-grotesque', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 0.75s step-start infinite',
        'fadeIn': 'fadeIn 1.2s ease forwards',
        'fadeOut': 'fadeOut 0.7s ease forwards',
      },
      keyframes: {
        blink: {
          '50%': { 'opacity': '0' },
        },
        fadeIn: {
          '0%': { 'opacity': '0' },
          '100%': { 'opacity': '1' },
        },
        fadeOut: {
          '0%': { 'opacity': '1' },
          '100%': { 'opacity': '0' },
        },
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
