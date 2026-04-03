<template>
    <div
        class="brutal-header"
        data-aos="fade-down"
    >
        <div class="label-tag" data-aos="fade-right">
            {{ label }}
        </div>
        <h1 class="brutal-title" data-aos="zoom-in">
            <slot name="title">{{ title }}</slot>
        </h1>
        <div class="brutal-desc-box" data-aos="fade-up">
            <span class="desc-arrow">▶</span>
            <p class="brutal-desc">
                <slot name="description">{{ description }}</slot>
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        default: "TAG",
    },
    title: {
        type: String,
        default: "",
    },
    description: {
        type: String,
        default: "",
    },
});
</script>

<style scoped>
.brutal-header {
    border: 3px solid #0a0a0a;
    padding: 1.5rem 1.2rem;
    background: #f5f0e8;
    box-shadow: 5px 5px 0 #0a0a0a;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
}

@media (min-width: 640px) {
    .brutal-header {
        border: 4px solid #0a0a0a;
        padding: 2.5rem 2rem;
        box-shadow: 8px 8px 0 #0a0a0a;
        margin-bottom: 2rem;
    }
}

.label-tag {
    display: inline-block;
    background: #ff2d55;
    color: #fff;
    font-family: "Space Mono", monospace;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    padding: 0.25rem 0.6rem;
    border: 2px solid #0a0a0a;
    margin-bottom: 1rem;
    text-transform: uppercase;
}

@media (min-width: 640px) {
    .label-tag {
        font-size: 0.7rem;
        padding: 0.3rem 0.8rem;
        margin-bottom: 1.2rem;
    }
}

.brutal-title {
    font-family: "Bebas Neue", sans-serif;
    font-size: clamp(2.2rem, 8vw, 5rem);
    line-height: 0.95;
    letter-spacing: 0.02em;
    color: #0a0a0a;
    margin-bottom: 0.4rem;
}

.title-underline {
    display: block;
    color: #ff2d55;
    letter-spacing: -0.05em;
    font-size: 0.5em;
    line-height: 1.2;
}

@media (min-width: 640px) {
    .title-underline {
        font-size: 0.6em;
    }
}

.brutal-desc-box {
    margin-top: 1.2rem;
    border-top: 2px solid #0a0a0a;
    padding-top: 1rem;
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
}

@media (min-width: 640px) {
    .brutal-desc-box {
        margin-top: 1.8rem;
        border-top: 3px solid #0a0a0a;
        padding-top: 1.2rem;
        gap: 0.8rem;
    }
}

.desc-arrow {
    font-size: 0.85rem;
    color: #ff2d55;
    flex-shrink: 0;
    margin-top: 2px;
}

@media (min-width: 640px) {
    .desc-arrow {
        font-size: 1rem;
    }
}

.brutal-desc {
    font-size: 0.8rem;
    line-height: 1.7;
    color: #333;
}

@media (min-width: 640px) {
    .brutal-desc {
        font-size: 0.88rem;
        line-height: 1.75;
    }
}
</style>
