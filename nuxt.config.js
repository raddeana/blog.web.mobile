export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog.web.mobile',
    htmlAttrs: {
      lang: 'en'
    },
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
  css: ['vant/lib/index.css'],
  plugins: ['@/plugins/vant-ui'],
  components: true,
  buildModules: ['@nuxt/typescript-build',],
  modules: [],
  build: {}
}
