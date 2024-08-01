/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // Adding primary colors
          'purple': '#493DF5',
          'background': '#151F32',
          'black': '#000000',
        },
        grey: {
          '80': '#F3F4F5',
          '100': '#E8E9EB',
          '200': '#D0D2D6',
          '300': '#5B6270',
          '400': '#353D4E',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],      
      },
      fontSize: {
        'h2': [
          '28px', {
            fontWeight: '700',
            lineHeight: '44px'
          }
        ],
        'h4': [
          '20px', {
            fontWeight: '700',
            lineHeight: '32px'
          }
        ],
        'h5': [
          '16px', {
            fontWeight: '700',
            lineHeight: '24px'
          } 
        ],
        'p': [
          '16px', {
            fontWeight: '400',
            lineHeight: '24px'
          }
        ],
        'h6': [
          '14px', {
            fontWeight: '700',
            lineHeight: '24px'
          }
        ],
        'meta': [
          '14px', {
            fontWeight: '400',
            lineHeight: '24px'
          }
        ]
    },
  },
  plugins: [],
  }
}