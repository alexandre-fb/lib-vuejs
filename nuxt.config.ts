// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'last',
    viewer: true,
  },
  googleFonts: {
    families: {
      Roboto: [200, 400, 700],
      'Fira Code': [300, 400, 700],
    },
  },
  css: [
    '~/assets/css/global.css',
  ]
});