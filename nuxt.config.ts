
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    plugins: ['~/server/plugins/mongodb.ts']
  },
  runtimeConfig: {
    MONGO_URL: process.env.MONGO_URL,
    OLAH_API: process.env.OLAH_API,
    public: {
      OLAH_URL: 'https://www.sayolah.com'
    }
  },
})
