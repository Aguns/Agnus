module.exports = {
  components: true,
  // render: {
  //   // working:
  //   injectScripts: process.env.NODE_ENV === 'development'

  //   // HMR not working:
  //   // injectScripts: false,
  // },

  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: "description",
        name: "description",
        content:
          "Vue Material Admin Template is a \n" +
          "    Google Material Design inspired admin dashboard template built with Vue and Vuetify."
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ],
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/echarts/4.0.4/echarts-en.min.js'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#3adced'},

  /*
  ** Global CSS
  */
  css: [

    'font-awesome/css/font-awesome.css',
    'roboto-fontface/css/roboto/roboto-fontface.css'
  ],

  router: {
    middleware: 'router-auth'
  },

  /*
  ** Plugins to load before mounting the App
  */
 plugins: ['~/plugins/axios'],

  /*
  ** Nuxt.js modules
  */
 modules:
 [
    ['nuxtjs-mdi-font'],
    ["nuxt-validate"],
    ['@nuxtjs/axios'],
    ['@nuxtjs/auth'],
    ["@nuxtjs/dotenv"]

 ],
 /*
  ** Nuxt.js dev-modules
  */
 buildModules: ["@nuxtjs/vuetify"],

  /*
   ** Build configuration
   */
  build: {
    
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://localhost:8080/api'
  }
}
