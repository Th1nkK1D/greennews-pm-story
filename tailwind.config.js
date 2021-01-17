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
      h1: '69px',
      h2: '55px',
      h3: '44px',
      h4: '35px',
      h5: '28px',
      h6: '23px',
      body1: '18px',
      body2: '14px',
      caption: '12px',
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
