<template>
    <header
        class="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e8] border-b-4 border-[#0a0a0a] transition-all duration-300 transform"
        :class="
            isHidden && !menuOpen ? '-translate-y-full invisible' : 'translate-y-0 visible'
        "
    >
        <nav
            class="container mx-auto flex justify-between items-center py-3 px-4 sm:px-7"
        >
            <div class="flex items-center gap-x-2">
                <button
                    @click="scrollToSection('#home')"
                    class="text-lg sm:text-xl font-bold text-[#0a0a0a] tracking-tight uppercase"
                >
                   WELCOME
                </button>
            </div>
            <div class="hidden md:flex items-center gap-x-6">
                <ul class="flex items-center space-x-2">
                    <li v-for="link in navLinks" :key="link.to">
                        <button
                            @click="scrollToSection(link.to)"
                            class="px-3 py-1 text-sm font-bold text-[#0a0a0a] uppercase border-2 border-transparent transition-all duration-200 hover:border-[#0a0a0a] hover:bg-[#ffe066] hover:shadow-[4px_4px_0_#0a0a0a] hover:-translate-y-1"
                        >
                            {{ link.label }}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
        <div
            class="md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t-2 border-[#0a0a0a]"
            :class="menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'"
        >
            <ul class="flex flex-col bg-[#f5f0e8]">
                <li v-for="link in navLinks" :key="link.to" class="border-b border-[#0a0a0a]/20 last:border-b-0">
                    <button
                        @click="scrollToSection(link.to)"
                        class="w-full text-left block px-6 py-3 text-sm font-bold text-[#0a0a0a] uppercase tracking-wider transition-all duration-200 hover:bg-[#ffe066] hover:pl-8"
                    >
                        {{ link.label }}
                    </button>
                </li>
            </ul>
        </div>
    </header>
    <button
        class="md:hidden fixed top-3 right-4 sm:right-7 z-[60] flex flex-col justify-center items-center w-10 h-10 border-2 border-[#0a0a0a] bg-white shadow-[3px_3px_0_#0a0a0a] transition-all duration-200 hover:bg-[#ffe066]"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
    >
        <span
            class="block w-5 h-0.5 bg-[#0a0a0a] transition-all duration-300"
            :class="menuOpen ? 'rotate-45 translate-y-[3px]' : ''"
        ></span>
        <span
            class="block w-5 h-0.5 bg-[#0a0a0a] mt-1 transition-all duration-300"
            :class="menuOpen ? 'opacity-0' : ''"
        ></span>
        <span
            class="block w-5 h-0.5 bg-[#0a0a0a] mt-1 transition-all duration-300"
            :class="menuOpen ? '-rotate-45 -translate-y-[5px]' : ''"
        ></span>
    </button>
</template>

<script setup>
import { ref, watch } from "vue";
import { useWindowScroll } from "@vueuse/core";

const { y } = useWindowScroll();
const isHidden = ref(false);
const menuOpen = ref(false);

const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
    menuOpen.value = false;
};

const navLinks = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#certified", label: "Certified" },
    { to: "#projects", label: "Projects" },
    { to: "#contact", label: "Contact" },
];

watch(y, (current, old) => {
    if (current > old && current > 100) {
        isHidden.value = true;
        menuOpen.value = false;
    } else {
        isHidden.value = false;
    }
});
</script>
