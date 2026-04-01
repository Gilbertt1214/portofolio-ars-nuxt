<template>
    <div class="about-brutal">
        <BrutalHeader class="max-w-[760px] mx-auto !mb-[3rem] sm:!mb-[4rem]" label="ABOUT ME">
            <template #title>
                <span class="inline-flex items-center gap-4 sm:gap-7 md:gap-8">
                    <span>ASWARAY AYU<br />WULANDARI</span>
                    <img
                        src="/assets/retropie.png"
                        class="w-16 sm:w-25 md:w-32 h-auto transition-all duration-300"
                        alt="Retropie icon"
                    />
                </span>
            </template>
            <template #description>
                Hi there, I'm Aswara Ayu Wulandari, a passionate full-stack
                developer focused on creating modern, efficient, and visually
                engaging digital solutions. I love working with cutting-edge
                technologies such as Artificial Intelligence, Machine Learning,
                and cloud-based systems to build intelligent, user-friendly
                applications. With over three years of hands-on experience and
                numerous completed projects, I'm dedicated to crafting scalable
                and impactful digital products that help people and businesses
                thrive in the digital world. For me, coding is not just about
                logic — it's about blending creativity and technology to bring
                meaningful ideas to life.
            </template>
        </BrutalHeader>
        <div class="brutal-accordion-wrapper" data-aos="fade-up">
            <div class="section-label">FAQ // 01</div>
            <details
                class="brutal-details"
                v-for="(item, i) in faqs"
                :key="i"
            >
                <summary class="brutal-summary">
                    <span class="num-badge"
                        >0{{ i + 1 }}</span
                    >
                    <span class="summary-text">{{
                        item.question
                    }}</span>
                    <span class="chevron">[ + ]</span>
                </summary>
                <div class="brutal-answer">
                    <div
                        class="answer-inner"
                    >
                        {{ item.answer }}
                    </div>
                </div>
            </details>
        </div>
    </div>
</template>

<script setup>
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const faqs = [
    {
        question: "Where do you come from?",
        answer: "I am from Rembang, Central Java and I now live in Solo.",
    },
    {
        question: "what major are you in?",
        answer: "My major is informatics engineering.",
    },
    {
        question: "What stack do you usually use?",
        answer: "I usually use php, vue and python stack.",
    },
];
</script>

<style scoped>
.about-brutal {
    padding: 2.5rem 1rem 2rem;
}

@media (min-width: 640px) {
    .about-brutal {
        padding: 8rem 1.5rem 5rem;
    }
}

.brutal-accordion-wrapper {
    max-width: 760px;
    margin: 0 auto;
    position: relative;
}

.section-label {
    font-size: 0.68rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 1rem;
    padding-left: 2px;
}


.brutal-details {
    border: 3px solid #0a0a0a;
    margin-bottom: -3px; 
    background: #f5f0e8;
    transition: all 0.15s ease;
    position: relative;
}

.brutal-details[open] {
    background: #fffbe6;
    z-index: 1;
    box-shadow: 6px 6px 0 #0a0a0a;
    margin-bottom: 12px;
}

.brutal-details[open] + .brutal-details {
    margin-top: 0;
}

.brutal-summary {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.9rem 0.8rem;
    cursor: pointer;
    list-style: none;
    user-select: none;
}

@media (min-width: 640px) {
    .brutal-summary {
        gap: 1rem;
        padding: 1.1rem 1.2rem;
    }
}

.brutal-summary::-webkit-details-marker {
    display: none;
}

.brutal-summary:hover {
    background: #ffe066;
}

.num-badge {
    font-family: "Bebas Neue", sans-serif;
    font-size: 1.3rem;
    line-height: 1;
    color: #0a0a0a;
    flex-shrink: 0;
    min-width: 1.8rem;
}

@media (min-width: 640px) {
    .num-badge {
        font-size: 1.5rem;
        min-width: 2rem;
    }
}

.summary-text {
    flex: 1;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #0a0a0a;
}

@media (min-width: 640px) {
    .summary-text {
        font-size: 0.92rem;
    }
}

.chevron {
    font-family: "Space Mono", monospace;
    font-size: 0.75rem;
    font-weight: 700;
    color: #0a0a0a;
    flex-shrink: 0;
    transition:
        transform 0.2s;
}

.brutal-details[open] .chevron {
    content: "[ - ]";
}

.brutal-details[open] .chevron::before {
    content: "[ - ]";
}
.brutal-details:not([open]) .chevron::before {
    content: "[ + ]";
}
.chevron {
    font-size: 0;
}
.chevron::before {
    font-size: 0.75rem;
}

.brutal-answer {
    border-top: 3px solid #0a0a0a;
    animation: revealDown 0.2s ease;
}

@keyframes revealDown {
    from {
        opacity: 0;
        transform: translateY(-6px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.answer-inner {
    padding: 0.8rem 0.8rem 1rem 2.5rem;
    font-size: 0.82rem;
    line-height: 1.8;
    color: #222;
    border-left: 4px solid #ff2d55;
    margin: 0.6rem 0.8rem 0.8rem;
    background: #fff8dc;
    transition: all 0.3s ease;
}

@media (min-width: 640px) {
    .answer-inner {
        padding: 1rem 1.2rem 1.2rem 4.2rem;
        font-size: 0.85rem;
        margin: 0.8rem 1.2rem 1.2rem;
    }
}
</style>
