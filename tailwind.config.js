/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  corePlugins: {
   preflight: false,
  },
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  important: true,
  theme: {
    extend: {
      backgroundImage: {
        'search-pattern': "url('http://infodtsl.my.id/akddtsl/assets/images/search.svg')",
        'landmark': "url('http://infodtsl.my.id/akddtsl/assets/images/authback.jpeg')",
      }, 
      backgroundPosition: {
        'left-10': '10px center',
      },
      colors: {
       'primary': '#3490dc',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
       'light-tosca': '#d0f0f0',
       'tosca': '#2a7c6f',
       'dark-tosca' : '#1b4b43',
      },
      fontFamily: {
       'montserrat': '"Montserrat", sans-serif',
       'avenir': 'avenir-lt-w01_35-light1475496, avenir-lt-w05_35-light, sans-serif',
      },
      minWidth: {
       '0': '0',
       '1/4': '25%',
       '1/2': '50%',
       '3/4': '75%',
       'full': '100%',
      }, 
      screens: {
        'md-l': '850px',
      },
    },

  },
  plugins: [
    plugin(function({ matchVariant }) {
      matchVariant(
        'nth',
        (value) => {
          return `&:nth-child(${value})`;
        },
      )
    }),
  ],
}

