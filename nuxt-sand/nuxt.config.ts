// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: './app',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/devtools',
    '@nuxtjs/dotenv'
  ],
  css: [
    'firebaseui/dist/firebaseui.css'
  ]
})
