// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL, // can be overridden by NUXT_API_SECRET environment variable
    supabaseKey: process.env.SUPABASE_KEY,
    public: {
      // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      
    }
  },
  typescript: {
    typeCheck: true,
    strict: true
  },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/supabase',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  supabase: {
    // Options
    redirect: true,
    redirectOptions: {
      login: '/login',
      callback: '/dashboard',
      include: undefined,
      exclude: ['/'],
      cookieRedirect: false,
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
