// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
    'nuxt-icon',
    'shadcn-nuxt',
    '@nuxtjs/supabase'
  ],
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
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
