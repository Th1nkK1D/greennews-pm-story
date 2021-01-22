module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans Thai', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
    fontSize: {
      h1: '3.8rem',
      h2: '3rem',
      h3: '2.5rem',
      h4: '2rem',
      h5: '1.5rem',
      h6: '1.3rem',
      body1: '1rem',
      body2: '0.8rem',
      caption: '0.6rem',
    },
    colors: {
      black: '#000000',
      'black-2': '#918F8F',
      'black-3': '#C4C4C4',
      'black-4': '#E9E9E9',
      white: '#FFFFFF;',
      'green-1': '#359592',
      'green-2': '#76A9A6',
      'green-3': '#C7DEDD',
      'green-4': '#D5EFEE',
    },
    extend: {
      zIndex: {
        '-1': -1,
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  variants: {},
  plugins: [],
}
