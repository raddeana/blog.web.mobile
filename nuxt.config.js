export default {
  head: {
    title: 'blog.web.mobile',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['@less/index.less'],
  plugins: [{ src: '@/plugins/vant-ui', ssr: true }],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {},
  babel: {
    plugins: [
      ['import', {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: false
      }, 'vant']
    ]
  }
}
