// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/css/main.css"],
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
    typescript: {
        strict: true,
    },
    runtimeConfig: {
        public: {
            BACKEND_API_URL: "",
            X_API_KEY: "",
        },
    },
});
