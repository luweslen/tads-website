const description = "Website para auxiliar os alunos da turma 2020 do curso de Tecnólogo em Analise em Desenvolvimento de Sistemas do Instituto Federal do Paraná - campus Londrina.";
const title = "TADS";

export default {
  target: 'static',
  srcDir: 'src/',
  outDir: '/dist',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TADS 2020',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: description
      },

      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: '~/assets/images/cover.png'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://tads.dev'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '~/assets/images/cover.png'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'TADS' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: '~/assets/images/cover.png'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '~/assets/images/cover.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '~/assets/images/cover.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'TADS'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com"' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap' },
      { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
        async: true,
        defer: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/colors.scss',
    '~/assets/styles/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  styleResources: {
    scss: ['./assets/styles/*.scss']
  },

  fontawesome: {
    icons: {
      solid: [
        'faCalendarAlt',
        'faChevronRight',
      ]
    }
  },
}
