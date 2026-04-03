<template>
    <div>
        <SectionHome @openModal="showModal = true" />
        <section id="about">
            <SectionAbout />
        </section>
        <section id="certified">
            <SectionCertified />
        </section>
        <section id="projects">
            <SectionProjects />
        </section>
        <section id="contact">
            <SectionContact />
        </section>
        <StalkingModal :isOpen="showModal" @close="showModal = false" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
</script>
