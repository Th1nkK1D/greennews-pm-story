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
    extend: {},
  },
  variants: {},
  plugins: [],
}
