import { sitelang, sitename, sitedescription } from './content/site/info.json'

const isProduction = process.env.NODE_ENV === 'production'
const url = isProduction ? process.env.URL || 'http://createADotEnvFileAndSetURL' : 'http://localhost:3000'

export default {
  target: 'static',
  components: true,
  generate: {
    fallback: true,
  },
  env: {
    url,
    lang: sitelang || 'en-US',
  },
  loading: { color: '#526488' },
  css: ['@/assets/css/main.pcss'],
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/svg', '@nuxtjs/pwa'],
  modules: ['@nuxt/content', 'nuxt-purgecss'],
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-import': true,
        'tailwindcss/nesting': {},
        'postcss-nested': {},
      },
    },
  },
  content: {
    dir: 'content',
  },
  tailwindcss: {
    viewer: false,
    cssPath: '~/assets/css/main.pcss',
    exposeConfig: false,
  },
  purgeCSS: {
    mode: 'postcss',
    safelist: {
      deep: [/dark/, /btn/, /icon/, /main/],
      greedy: [/^card/, /image$/, /title$/, /^nuxt-content/, /code/, /pre/, /token/, /^vue-content-placeholders/],
    },
  },
  pwa: {
    icon: {
      source: 'static/favicon.png',
      fileName: 'favicon.png',
    },
    manifest: {
      name: sitename || process.env.npm_package_name || '',
      lang: process.env.lang,
    },
    meta: {
      name: sitename || process.env.npm_package_name || '',
      lang: process.env.lang,
      ogHost: process.env.URL,
      ogImage: '/preview.jpg',
    },
  },
  head: {
    title: sitename || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: sitedescription || process.env.npm_package_description || '',
      },
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css?family=Inter',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Inter',
        media: 'print',
        onload: `this.media='all'`,
      },
    ],
    noscript: [
      {
        innerHTML: '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">',
      },
    ],
    __dangerouslyDisableSanitizers: ['noscript'],
  },
}
