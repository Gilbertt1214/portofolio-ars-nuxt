import tailwindcss from "@tailwindcss/vite";
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    future: {
        compatibilityVersion: 4,
    },
    css: ["~/assets/css/tailwind.css"], 
    vite: {
         optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'aos',
        '@vueuse/core',
        '@lottiefiles/dotlottie-vue'
      ]
    },
        plugins: [
            tailwindcss(),
            svgLoader(),    
        ],
    },
    modules: ["@nuxt/image", "@nuxt/icon"],
});