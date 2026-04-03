<template>
    <section
        id="home"
        class="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-24 pb-10 sm:pb-12 overflow-x-hidden"
    >
        <div
            class="max-w-6xl w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 sm:gap-8 md:gap-12"
        >
            <div
                class="w-full sm:w-1/2 text-left border-[3px] sm:border-[4px] border-[#0a0a0a] bg-[#f5f0e8] p-6 sm:p-8 md:p-12 shadow-[6px_6px_0_#0a0a0a] sm:shadow-[8px_8px_0_#0a0a0a] flex flex-col justify-center relative transition-all duration-300"
            >
                <div
                    class="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-[#ff2d55] text-white text-xs sm:text-xs font-bold px-3 sm:px-3 py-1 border-[2px] sm:border-[3px] border-[#0a0a0a] tracking-widest uppercase"
                >
                    EXPERT
                </div>
                <h1
                    data-aos="fade-right"
                    class="text-5xl sm:text-6xl lg:text-7xl font-['Bebas_Neue',sans-serif] text-[#0a0a0a] tracking-wide mt-2 sm:mt-0 mb-3 sm:mb-4 flex flex-col lg:flex-row items-start lg:items-center justify-start gap-2 lg:gap-6"
                >
                    <div class="flex flex-col items-start leading-[0.9]">
                        <span>HI I'M</span>
                        <span class="text-[#ff2d55]">ARS</span>
                    </div>
                    <client-only>
                        <div
                            class="w-32 sm:w-40 md:w-48 lg:w-64 shrink-0 -mt-2 lg:-mt-6 self-start lg:self-auto"
                        >
                            <DotLottieVue
                                src="/Cat-Movement.lottie"
                                autoplay
                                loop
                                :renderConfig="{ renderer: 'svg' }"
                                class="w-full h-auto object-contain"
                            />
                        </div>
                    </client-only>
                </h1>
                <div
                    data-aos="zoom-in"
                    class="mt-4 sm:mt-6 border-t-[2px] sm:border-t-[3px] border-[#0a0a0a] pt-4 sm:pt-5 flex items-start gap-2 sm:gap-3"
                >
                    <span
                        class="text-[#ff2d55] text-base sm:text-xl mt-0.5 sm:mt-0.5"
                        >▶</span
                    >
                    <p
                        class="text-sm sm:text-[0.95rem] text-[#333] leading-relaxed sm:leading-loose"
                    >
                        A passionate data science enthusiast dedicated to
                        transforming data into meaningful insights and building
                        intelligent, data-driven solutions through innovative
                        and analytical approaches
                    </p>
                </div>
                <div
                    data-aos="fade-up"
                    class="mt-5 sm:mt-8 flex flex-row items-center gap-3 sm:gap-4 w-full"
                >
                    <button
                        @click="openResume"
                        class="flex-1 inline-flex items-center justify-center gap-1 sm:gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-[#ff2d55] text-white text-xs sm:text-sm font-bold uppercase tracking-wider border-[2px] sm:border-[3px] border-[#0a0a0a] shadow-[3px_3px_0_#0a0a0a] sm:shadow-[4px_4px_0_#0a0a0a] hover:bg-[#e02849] hover:shadow-[4px_4px_0_#0a0a0a] sm:hover:shadow-[6px_6px_0_#0a0a0a] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-[1px_1px_0_#0a0a0a] active:translate-x-0.5 active:translate-y-0.5 transition-all duration-150 text-center"
                    >
                        <span>MYRESUME</span>
                    </button>
                    <button
                        @click="$emit('openModal')"
                        class="flex-1 inline-flex items-center justify-center gap-1 sm:gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-[#ffe066] text-[#0a0a0a] text-xs sm:text-sm font-bold uppercase tracking-wider border-[2px] sm:border-[3px] border-[#0a0a0a] shadow-[3px_3px_0_#0a0a0a] sm:shadow-[4px_4px_0_#0a0a0a] hover:bg-[#ffd11a] hover:shadow-[4px_4px_0_#0a0a0a] sm:hover:shadow-[6px_6px_0_#0a0a0a] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-[1px_1px_0_#0a0a0a] active:translate-x-0.5 active:translate-y-0.5 transition-all duration-150 text-center"
                    >
                        <span>SOSMED</span>
                    </button>
                </div>
            </div>

            <div
                data-aos="fade-left"
                class="w-full sm:w-1/2 flex flex-col justify-center items-center mt-0"
            >
                <div
                    class="relative group w-full max-w-[320px] sm:max-w-sm mx-auto"
                >
                    <div
                        class="absolute inset-0 bg-[#ffe066] border-[3px] sm:border-[4px] border-[#0a0a0a] translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 group-hover:translate-x-4 group-hover:translate-y-4 sm:group-hover:translate-x-6 sm:group-hover:translate-y-6 transition-all duration-300"
                    ></div>
                    <div
                        class="relative bg-[#f5f0e8] border-[3px] sm:border-[4px] border-[#0a0a0a] p-3 sm:p-4 group-hover:-translate-x-1 group-hover:-translate-y-1 sm:group-hover:-translate-x-2 sm:group-hover:-translate-y-2 transition-all duration-300"
                    >
                        <img
                            src="/assets/arshome.png"
                            alt="Hero Image"
                            class="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
defineEmits(["openModal"]);

const openResume = () => {
    window.open("https://canva.link/petrt5wkle3vojz", "_blank");
};
</script>
