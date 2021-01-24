import { parseTranslation } from './utils/translation'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${process.env.BASE_PATH || ''}/favicon.ico`,
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/styles/tailwind.css', '~/assets/styles/typography.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: process.env.G_TAG ? ['~/plugins/gtag.js'] : [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://i18n.nuxtjs.org
    'nuxt-i18n',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    build: {
      publicPath: `${process.env.BASE_PATH || ''}/_nuxt/`,
    },
  },

  env: {
    BASE_PATH: process.env.BASE_PATH || '/',
    G_TAG: process.env.G_TAG,
    SITE_URL: `https://greennews.agency${process.env.BASE_PATH || ''}`,
  },

  server: {
    host: '0.0.0.0',
  },

  router: {
    base: process.env.BASE_PATH || '/',
  },

  i18n: {
    locales: ['th', 'en'],
    defaultLocale: 'th',
    vueI18n: {
      fallbackLocale: 'th',
      messages: parseTranslation('./assets/data/translation.csv'),
    },
    detectBrowserLanguage: false,
  },
}
