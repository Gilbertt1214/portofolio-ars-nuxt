<template>
    <div class="flex flex-col min-h-screen bg-[#f5f0e8] bg-cover bg-center bg-fixed bg-no-repeat text-[#0a0a0a] font-['Space_Mono',monospace]">
        <AppHeader />
        <main class="grow">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>
