/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'color-primary': '#9D3971',
        'color-secndary': '#161616',
        'gradientStart': '#C27B9F',
        'gradientEnd': '#901D63',
        'color-border': '#F0F0F0',
        'color-white-dark': '#FDF7FB',
        'gradient-start': '#FFFFFF',
        'gradient-end': '#D8A7BE',
      }
    },
    container : {
      center: true,
      padding: {
        DEFAULT: '40px',
        md: '50px',
      }
    }
  },
  plugins: [],
}