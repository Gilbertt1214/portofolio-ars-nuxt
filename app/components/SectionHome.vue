<template>
    <section
        id="home"
        class="min-h-screen sm:min-h-[100vh] flex flex-col sm:flex-row items-start sm:items-center justify-center px-4 sm:px-8 pt-24 sm:pt-20 pb-10 sm:pb-12"
    >
        <div
            class="max-w-6xl w-full flex flex-col sm:flex-row items-center sm:items-stretch justify-between gap-6 sm:gap-10"
        >
            <!-- Left Section -->
            <div
                class="flex-auto sm:max-w-[50%] text-left border-[2px] sm:border-[4px] border-[#0a0a0a] bg-[#f5f0e8] p-6 sm:p-10 shadow-[0.25rem_0.25rem_0_#0a0a0a] sm:shadow-[0.5rem_0.5rem_0_#0a0a0a] flex flex-col justify-start sm:justify-center relative rounded-md transition-all duration-300"
            >
                <div
                    class="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#ff2d55] text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 border-[2px] sm:border-[3px] border-[#0a0a0a] tracking-widest uppercase rounded"
                >
                    EXPERT
                </div>
                <h1
                    data-aos="fade-right"
                    class="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-['Bebas_Neue',sans-serif] text-[#0a0a0a] tracking-wide mt-8 sm:mt-0 mb-6 sm:mb-8 flex flex-col lg:flex-row items-start lg:items-center justify-start gap-2 lg:gap-6"
                >
                    <div class="flex flex-col items-start leading-tight">
                        <span>HI I'M</span>
                        <span class="text-[#ff2d55]">ARS</span>
                    </div>
                    <client-only>
                        <div class="w-20 h-20 sm:w-28 sm:h-28 shrink-0 self-center">
                            <DotLottieVue
                                src="/Cat-Movement.lottie"
                                autoplay
                                loop
                                :renderConfig="{ renderer: 'svg' }"
                                class="w-full h-full object-contain"
                            />
                        </div>
                    </client-only>
                </h1>
                <div
                    data-aos="zoom-in"
                    class="mt-3 sm:mt-6 border-t-[2px] sm:border-t-[3px] border-[#0a0a0a] pt-3 sm:pt-5 flex items-start gap-2"
                >
                    <span class="text-[#ff2d55] text-sm sm:text-xl">▶</span>
                    <p class="text-sm sm:text-base text-[#333]">
                        A passionate data science enthusiast dedicated to
                        transforming data into meaningful insights and building
                        intelligent, data-driven solutions through innovative
                        and analytical approaches.
                    </p>
                </div>
                <div
                    data-aos="fade-up"
                    class="mt-6 sm:mt-10 flex flex-row items-center gap-4 w-full"
                >
                    <button
                        @click="openResume"
                        class="flex-1 sm:flex-none py-2 px-4 bg-[#ff2d55] text-white font-bold uppercase text-sm border-[2px] sm:border-[3px] border-[#0a0a0a] shadow-[3px_3px_0_#0a0a0a] hover:bg-[#e02849] hover:shadow-[4px_4px_0_#0a0a0a] transition-all duration-200"
                    >
                        MY RESUME
                    </button>
                    <button
                        @click="$emit('openModal')"
                        class="flex-1 sm:flex-none py-2 px-4 bg-[#ffe066] text-black font-bold uppercase text-sm border-[2px] sm:border-[3px] border-[#0a0a0a] shadow-[3px_3px_0_#0a0a0a] hover:bg-[#ffd11a] hover:shadow-[4px_4px_0_#0a0a0a] transition-all duration-200"
                    >
                        SOSMED
                    </button>
                </div>
            </div>

            <!-- Right Section -->
            <div
                data-aos="fade-left"
                class="flex-auto sm:max-w-[50%] flex flex-col justify-center items-center"
            >
                <div
                    class="relative group w-full max-w-xs sm:max-w-sm mx-auto rounded-md"
                >
                    <div
                        class="absolute inset-0 bg-[#ffe066] border-[2px] sm:border-[4px] border-[#0a0a0a] translate-x-1 sm:translate-x-2 translate-y-1 sm:translate-y-2 group-hover:translate-x-1.5 group-hover:translate-y-1.5 sm:group-hover:translate-x-3 sm:group-hover:translate-y-3 transition-transform duration-300"
                    ></div>
                    <div
                        class="relative bg-[#f5f0e8] border-[2px] sm:border-[4px] border-[#0a0a0a] p-3 sm:p-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 sm:group-hover:-translate-x-1.5 sm:group-hover:-translate-y-1.5 rounded-md"
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