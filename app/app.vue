<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
})

useHead({
    title: "PORTOFOLIO - ARS",
    meta: [
        {
            name: "description",
            content:
                "PORTOFOLIO - ARS",
        },
    ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
