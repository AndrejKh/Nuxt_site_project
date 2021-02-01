import tailwindTypography from '@tailwindcss/typography'

export default {
  telemetry: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GrahamSH',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }
    ]
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
      theme: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        }
       },
    
    }
  },


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  pwa: {
    icons: {
      source: `[srcDir]/[staticDir]/logo.svg`
    }
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxt/image'
  ],
  oneSignal: {
    init: {
      appId: '6441a31b-b647-41d4-9f51-4e15c6b4fef9',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
          disable: true
      }
    }
  },
  
  workbox: {
    runtime: [
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: '.*',
        handler: 'staleWhileRevalidate'
      }

    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content'],


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
