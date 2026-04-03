<template>
    <div
        :class="
            isOpen
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
        "
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 transition-all duration-300"
    >
        <div
            class="absolute inset-0 bg-black/50 transition-opacity duration-300"
            @click="$emit('close')"
        ></div>
        <div
            :class="isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
            class="bg-white border-[3px] sm:border-[4px] border-[#0a0a0a] p-5 sm:p-8 max-w-md w-full shadow-[8px_8px_0_#0a0a0a] sm:shadow-[12px_12px_0_#0a0a0a] relative z-10 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
        >
            <button
                @click="$emit('close')"
                class="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#ff2d55] text-white text-xs sm:text-sm font-bold border-[2px] sm:border-[3px] border-[#0a0a0a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#0a0a0a] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150"> X </button>
            <h2
                class="text-2xl sm:text-3xl font-['Bebas_Neue',sans-serif] text-[#0a0a0a] mb-4 sm:mb-6 tracking-wider uppercase">
                MY SOCIAL MEDIA
            </h2>
            <div class="flex flex-col gap-3 sm:gap-4">
                <button
                    @click="openLink('https://www.instagram.com/aswaraay')"
                    class="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 border-[2px] sm:border-[3px] border-[#0a0a0a] bg-[#ffe066] text-[#0a0a0a] text-sm sm:text-base font-bold uppercase tracking-wider shadow-[3px_3px_0_#0a0a0a] sm:shadow-[4px_4px_0_#0a0a0a] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_#0a0a0a] sm:hover:shadow-[6px_6px_0_#0a0a0a] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#0a0a0a] transition-all duration-150"
                >
                    <Icon name="fa6-brands:instagram" class="text-xl sm:text-2xl" />
                    <span>Instagram</span>
                </button>
                <button
                    @click="openLink('https://linkedin.com/in/aswaraayu')"
                    class="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 border-[2px] sm:border-[3px] border-[#0a0a0a] bg-[#89CFF0] text-[#0a0a0a] text-sm sm:text-base font-bold uppercase tracking-wider shadow-[3px_3px_0_#0a0a0a] sm:shadow-[4px_4px_0_#0a0a0a] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_#0a0a0a] sm:hover:shadow-[6px_6px_0_#0a0a0a] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#0a0a0a] transition-all duration-150"
                >
                    <Icon name="fa6-brands:linkedin-in" class="text-xl sm:text-2xl" />
                    <span>LinkedIn</span>
                </button>
                <button
                    @click="openLink('https://www.tiktok.com/@corydoraw')"
                    class="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 border-[2px] sm:border-[3px] border-[#0a0a0a] bg-[#1a1a2e] text-[#f5f5f5] text-sm sm:text-base font-bold uppercase tracking-wider shadow-[3px_3px_0_#0a0a0a] sm:shadow-[4px_4px_0_#0a0a0a] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_#0a0a0a] sm:hover:shadow-[6px_6px_0_#0a0a0a] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#0a0a0a] transition-all duration-150"
                >
                    <Icon name="fa6-brands:tiktok" class="text-xl sm:text-2xl" />
                    <span>TikTok</span>
                </button>
                <button
                    @click="openLink('https://github.com/awraay')"
                    class="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 border-[2px] sm:border-[3px] border-[#0a0a0a] bg-[#1a1a2e] text-[#f5f5f5] text-sm sm:text-base font-bold uppercase tracking-wider shadow-[3px_3px_0_#0a0a0a] sm:shadow-[4px_4px_0_#0a0a0a] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_#0a0a0a] sm:hover:shadow-[6px_6px_0_#0a0a0a] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#0a0a0a] transition-all duration-150"
                >
                    <Icon name="fa6-brands:github" class="text-xl sm:text-2xl" />
                    <span>GitHub</span>
                </button>
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
});

defineEmits(["close"]);

const openLink = (url) => {
  window.open(url, '_blank');
};
</script>
