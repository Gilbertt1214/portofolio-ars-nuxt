<template>
  <div
    :class="isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
    class="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 transition-all duration-300"
  >
    <div
      class="absolute inset-0 bg-black/60 transition-opacity duration-300"
      @click="$emit('close')"
    ></div>

    <div
      :class="isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
      class="bg-white border-[3px] sm:border-[4px] border-[#0a0a0a] shadow-[8px_8px_0_#0a0a0a] sm:shadow-[12px_12px_0_#0a0a0a] relative z-10 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden"
    >
      <button
        @click="$emit('close')"
        class="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#ff2d55] text-white text-sm sm:text-base font-bold border-[2px] sm:border-[3px] border-[#0a0a0a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#0a0a0a] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 z-20"
      >
        ✕
      </button>

      <div class="p-4 sm:p-8 overflow-y-auto flex-1">
        <h2 class="text-2xl sm:text-4xl font-['Bebas_Neue',sans-serif] text-[#0a0a0a] mb-4 sm:mb-6 tracking-wider uppercase border-b-3 sm:border-b-4 border-[#0a0a0a] pb-2 inline-block">
          {{ project?.title }}
        </h2>

        <div class="mb-5 sm:mb-8 border-[2px] sm:border-[3px] border-[#0a0a0a] shadow-[4px_4px_0_#0a0a0a] sm:shadow-[6px_6px_0_#0a0a0a] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
          <img :src="project?.image" :alt="project?.title" class="w-full h-40 sm:h-64 object-cover" />
        </div>

        <div class="space-y-5 sm:space-y-8 font-['Space_Mono',monospace]">
          <section v-if="project?.about">
            <h3 class="text-base sm:text-xl font-bold text-[#0a0a0a] mb-2 sm:mb-3 uppercase tracking-tighter bg-[#ff2d55] text-white px-2 sm:px-3 py-1 inline-block border-[2px] border-[#0a0a0a]">
              ABOUT THIS PROJECT
            </h3>
            <p class="text-xs sm:text-sm leading-relaxed text-[#333]">
              {{ project.about }}
            </p>
          </section>
          <section v-if="project?.techStack?.length">
            <h3 class="text-base sm:text-xl font-bold text-[#0a0a0a] mb-3 sm:mb-4 uppercase tracking-tighter bg-[#00df9a] px-2 sm:px-3 py-1 inline-block border-[2px] border-[#0a0a0a]">
              TECH STACK
            </h3>
            <div class="flex flex-wrap gap-2 sm:gap-4">
              <div
                v-for="tech in project.techStack"
                :key="tech"
                class="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 border-[2px] border-[#0a0a0a] bg-white shadow-[2px_2px_0_#0a0a0a] sm:shadow-[3px_3px_0_#0a0a0a] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#0a0a0a] sm:hover:shadow-[5px_5px_0_#0a0a0a] transition-all"
              >
                <Icon :name="getIconName(tech)" class="text-base sm:text-xl" />
                <span class="text-[10px] sm:text-xs font-bold uppercase">{{ tech }}</span>
              </div>
            </div>
          </section>
          <section v-if="project?.features?.length">
            <h3 class="text-base sm:text-xl font-bold text-[#0a0a0a] mb-2 sm:mb-3 uppercase tracking-tighter bg-[#89CFF0] px-2 sm:px-3 py-1 inline-block border-[2px] border-[#0a0a0a]">
              FEATURES
            </h3>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <li
                v-for="feature in project.features"
                :key="feature"
                class="flex items-center gap-2 before:content-['▶'] before:text-[#ff2d55] before:text-[10px]"
              >
                {{ feature }}
              </li>
            </ul>
          </section>
          <section class="pt-3 sm:pt-4 border-t-2 border-[#0a0a0a] flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-4">
            <button
              v-if="project?.repo"
              @click="openLink(project.repo)"
              class="flex items-center justify-center xs:justify-start gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 border-[2px] sm:border-[3px] border-[#0a0a0a] bg-[#1a1a2e] text-white text-xs sm:text-base font-bold uppercase tracking-wider shadow-[4px_4px_0_#0a0a0a] sm:shadow-[6px_6px_0_#0a0a0a] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_#0a0a0a] sm:hover:shadow-[8px_8px_0_#0a0a0a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-150"
            >
              <Icon name="fa6-brands:github" class="text-lg sm:text-xl" />
              <span>REPOSITORY</span>
            </button>
            <button
              v-if="project?.live"
              @click="openLink(project.live)"
              class="flex items-center justify-center xs:justify-start gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 border-[2px] sm:border-[3px] border-[#0a0a0a] bg-[#ffe066] text-[#0a0a0a] text-xs sm:text-base font-bold uppercase tracking-wider shadow-[4px_4px_0_#0a0a0a] sm:shadow-[6px_6px_0_#0a0a0a] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_#0a0a0a] sm:hover:shadow-[8px_8px_0_#0a0a0a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-150"
            >
              <Icon name="ph:arrow-square-out-bold" class="text-lg sm:text-xl" />
              <span>LIVE DEMO</span>
            </button>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  project: {
    type: Object,
    default: null,
  },
});

defineEmits(["close"]);

const openLink = (url) => {
  window.open(url, '_blank');
};

const getIconName = (tech) => {
  const iconMap = {
   nextjs: "logos:nextjs-icon",
    typescript: "logos:typescript-icon",
    tailwind: "logos:tailwindcss-icon",
    prisma: "logos:prisma",
    react: "logos:react",
    vue: "logos:vue",
    nuxt: "logos:nuxt-icon",
    supabase: "logos:supabase-icon",
    nodejs: "logos:nodejs-icon",
    mongodb: "logos:mongodb-icon",
    expo: "logos:expo-icon",
    firebase: "logos:firebase",
    vite: "logos:vitejs",
    javascript: "logos:javascript",
    vercel: "logos:vercel-icon",
    bootstrap: "logos:bootstrap",
    php: "logos:php",
    laravel: "logos:laravel",
    mysql: "logos:mysql",
    html: "logos:html-5",
    css: "logos:css-3",
    unity: "logos:unity",
    csharp: "logos:c-sharp",
    iot: "logos:iot",
    arduino: "logos:arduino",
    python: "logos:python",
  };
  return iconMap[tech.toLowerCase()] || "ph:app-window-bold";
};
</script>
