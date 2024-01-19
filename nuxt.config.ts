// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "last",
    viewer: true,
  },
  googleFonts: {
    families: {
      Roboto: [200, 400, 700],
      "Fira Code": [300, 400, 700],
    },
  },
  css: ["~/assets/css/global.css"],
  app: {
    head: {
      charset: 'utf-8',
      title: 'Lib Vue',
      htmlAttrs: {
        lang: "pt-BR"
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [{ rel:"stylesheet", type:"text/css", href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }]
    }
  },
});
