
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' }
    ],
    script: [
      { type: "text/javascript", id:"hs-script-loader", src:"//js.hs-scripts.com/8829228.js" },
    ],

  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  server: {     
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },   // other configs 
  /*
  ** Global CSS
  */
  css: [
  ],
  target: 'static',
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/icons.js', mode: 'client' }, // only on client side
  ],
  /*
  ** Nuxt.js dev-modules
  */
  /*
  ** Nuxt.js modules
  */
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    [
      '@nuxtjs/device',
      // {defaultUserAgent: 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36'}
    ],
    'nuxt-buefy',
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ]
  ],
  gtm: {
    id: 'GTM-MTPD369'
  },
  googleAnalytics: {
    id: 'G-QKG0B0RH4K'
  },
  /*
  ** Axios module configuration
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
