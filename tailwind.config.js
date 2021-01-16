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
      72: 72,
      64: 64,
      48: 48,
      36: 36,
      24: 24,
      18: 18,
      14: 14,
    },
    colors: {
      black: '#000000',
      'gray-1': '#918F8F',
      'gray-2': '#E9E9E9',
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
    },
  },
  variants: {},
  plugins: [],
}
