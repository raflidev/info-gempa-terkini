export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Info Gempa terkini',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Info gempa terkini yang terjadi di Indonesia' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:"~plugins/vue-cool-lightbox.js", mode:"client"},
    {src:"~plugins/vue-gtag.js", mode:"client"}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'https://data.bmkg.go.id',
    proxyHeaders: false,
    credentials: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
