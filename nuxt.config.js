import * as SITE_INFO from './content/site/info.json'

export default {
  target: 'static',
  components: true,
  generate: {
    fallback: true,
  },
  env: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.URL || 'http://createADotEnvFileAndSetURL'
        : 'http://localhost:3000',
    lang: SITE_INFO.sitelang || 'en-US',
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
    extend(config, { isDev }) {
      if (!isDev) {
        // Optimize asset loading for production
        config.splitChunks.cacheGroups = {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        }
      }
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
      name: SITE_INFO.sitename || process.env.npm_package_name || '',
      lang: process.env.lang,
    },
    meta: {
      name: SITE_INFO.sitename || process.env.npm_package_name || '',
      lang: process.env.lang,
      ogHost: process.env.URL,
      ogImage: '/preview.jpg',
    },
  },
  head: {
    title: SITE_INFO.sitename || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: SITE_INFO.sitedescription || process.env.npm_package_description || '',
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
