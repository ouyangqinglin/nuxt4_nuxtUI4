// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@nuxt/ui'],
    runtimeConfig: {
        public: {
            apiBase: '/api',
        }
    },
  css: [
      '~/assets/css/fonts.css',
      '~/assets/css/main.css'
  ],
    ui: {
        fonts: false,
        colorMode: false
    },
    app: {
      head: {
          title: 'ASAP',
          htmlAttrs: {
              lang: 'en',
          },
      }
    },
    vite: {
        server: {
            proxy: {
                '/api': {
                    target: 'https://test.asa.hljyer.com',
                    changeOrigin: true,
                    secure: false,
                }
            }
        }
    }
})

