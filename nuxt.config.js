export default {
  head: {
    title: 'kuncie-ui',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['@/assets/global.scss'],
  plugins: [
    { src: '@/plugins/icons.plugin', ssr: false },
    { src: '@/plugins/circular.plugin', ssr: false }
  ],
  components: true,
  buildModules: [
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/moment',
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
    ['@nuxtjs/google-fonts', {
      families: {
        Poppins: true
      }
    }]
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
  ],
  axios: {},
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  content: {},
  build: {
    transpile: ['oh-vue-icons'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
  }
}
