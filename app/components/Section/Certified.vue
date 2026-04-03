<template>
    <div class="brutal-certified">
        <div class="brutal-certified-container">
            <BaseBrutalHeader label="CERTIFIED">
                <template #title>
                    <span class="flex flex-col sm:flex-row items-center sm:inline-flex gap-4 sm:gap-7 md:gap-8">
                        <span class="text-center sm:text-left">MY<br class="hidden sm:block" /> CERTIFICATIONS</span>
                        <client-only>
                            <div class="w-40 sm:w-56 md:w-64 lg:w-72 shrink-0 -mb-4 sm:-mb-6 md:-mb-8">
                                <DotLottieVue
                                    src="/Certificate-art.lottie"
                                    autoplay
                                    loop
                                    :renderConfig="{ renderer: 'svg' }"
                                    class="w-full h-auto object-contain"
                                />
                            </div>
                        </client-only>
                    </span>
                </template>
                <template #description>
                    Explore the official certifications and professional
                    achievements I've earned throughout my coding journey.
                </template>
            </BaseBrutalHeader>
            <div class="brutal-cert-grid">
                <div
                    v-for="(cert, index) in visibleCerts"
                    :key="index"
                    class="brutal-cert-card"
                    :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
                    :data-aos-delay="index * 100"
                    @click="openModal(cert)"
                >
                    <div class="cert-image-container">
                        <img
                            :src="cert.image"
                            :alt="cert.title"
                            class="cert-image"
                        />
                    </div>
                    <div class="cert-content">
                        <h3 class="cert-title">
                            {{ cert.title }}
                        </h3>
                        <div class="cert-issuer">
                            Published by {{ cert.issuer }}
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="hasMore || hasExpanded" class="brutal-load-more">
                <button
                    v-if="hasMore"
                    class="brutal-btn-more"
                    @click="loadMore"
                >
                    LOAD MORE
                </button>

                <button
                    v-if="hasExpanded"
                    class="brutal-btn-less"
                    @click="showLess"
                >
                    SHOW LESS
                </button>
            </div>
        </div>

        <Teleport to="body">
            <Transition name="modal">
                <div v-if="showModal" class="modal-overlay" @click="closeModal">
                    <div class="modal-container" @click.stop>
                        <button class="modal-close" @click="closeModal">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div class="modal-content">
                            <img
                                :src="selectedCert?.image"
                                :alt="selectedCert?.title"
                                class="modal-image"
                            />
                            <div class="modal-info">
                                <h3 class="modal-title">
                                    {{ selectedCert?.title }}
                                </h3>
                                <p class="modal-issuer">
                                    Published by {{ selectedCert?.issuer }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const showModal = ref(false);
const selectedCert = ref(null);
const visibleCount = ref(6);
const initialCount = 6;

const certifications = [
    {
        title: "DATABASE DESIGN",
        issuer: "ORACLE ACADEMY",
        image: "/certified/sertif1.jpeg",
    },
    {
        title: "JAVA FUNDAMENTALS",
        issuer: "ORACLE ACADEMY",
        image: "/certified/sertif2.jpeg",
    },
    {
        title: "PYTHON 101 FOR DATA SCIENCE",
        issuer: "COGNITIVE CLASS",
        image: "/certified/sertif3.jpeg",
    },
    {
        title: "PCAP: PROGRAMMING ESSENTIALS IN PYTHON",
        issuer: "PYTHON INSTITUTE",
        image: "/certified/sertif4.jpeg",
    },
    {
        title: "FRONT-END INTERMEDIATE",
        issuer: "BOOTCAMP",
        image: "/certified/sertif5.jpeg",
    },
    {
        title: "FRONT-END DEVELOPER",
        issuer: "BOOTCAMP",
        image: "/certified/sertif6.jpeg",
    },
    {
        title: "PARTICIPANT SCIENTIFIC PAPERS",
        issuer: "UNS",
        image: "/certified/sertif7.jpeg",
    },
    {
        title: "PARTICIPANT PEKAN ILMIAH MAHASISWA",
        issuer: "UNS",
        image: "/certified/sertif8.jpeg",
    },
];

const visibleCerts = computed(() =>
    certifications.slice(0, visibleCount.value),
);

const hasMore = computed(() => visibleCount.value < certifications.length);

const hasExpanded = computed(() => visibleCount.value > initialCount);

const loadMore = () => {
    visibleCount.value = certifications.length;
};

const showLess = () => {
    visibleCount.value = initialCount;
};

const openModal = (cert) => {
    selectedCert.value = cert;
    showModal.value = true;
    document.body.style.overflow = "hidden";
};

const closeModal = () => {
    showModal.value = false;
    selectedCert.value = null;
    document.body.style.overflow = "";
};
</script>

<style scoped>
.brutal-certified {
    padding: 2.5rem 1rem 2rem;
}

@media (min-width: 640px) {
    .brutal-certified {
        padding: 8rem 1.5rem 5rem;
    }
}

.brutal-certified-container {
    max-width: 1200px;
    margin: 0 auto;
}

.brutal-cert-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
}

@media (min-width: 540px) {
    .brutal-cert-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 900px) {
    .brutal-cert-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
}

.brutal-cert-card {
    border: 3px solid #0a0a0a;
    background: #fff;
    box-shadow: 4px 4px 0 #0a0a0a;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    cursor: pointer;
    overflow: hidden;
}

@media (min-width: 640px) {
    .brutal-cert-card {
        box-shadow: 6px 6px 0 #0a0a0a;
    }
}

.brutal-cert-card:hover {
    box-shadow: 8px 8px 0 #0a0a0a;
    transform: translate(-3px, -3px);
}

@media (min-width: 640px) {
    .brutal-cert-card:hover {
        box-shadow: 10px 10px 0 #0a0a0a;
        transform: translate(-4px, -4px);
    }
}

.cert-image-container {
    width: 100%;
    height: 160px;
    overflow: hidden;
    background: #f5f5f5;
    border-bottom: 3px solid #0a0a0a;
}

@media (min-width: 640px) {
    .cert-image-container {
        height: 200px;
    }
}

.cert-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.brutal-cert-card:hover .cert-image {
    transform: scale(1.05);
}

.cert-content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

@media (min-width: 640px) {
    .cert-content {
        padding: 1.5rem;
        gap: 0.5rem;
    }
}

.cert-title {
    font-family: "Bebas Neue", sans-serif;
    font-size: 1.25rem;
    line-height: 1.2;
    color: #0a0a0a;
}

@media (min-width: 640px) {
    .cert-title {
        font-size: 1.5rem;
    }
}

.cert-issuer {
    font-family: "Space Mono", monospace;
    font-size: 0.7rem;
    font-weight: 600;
    color: #666;
}

@media (min-width: 640px) {
    .cert-issuer {
        font-size: 0.75rem;
    }
}

.brutal-load-more {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 2rem;
    flex-wrap: wrap;
}

@media (min-width: 640px) {
    .brutal-load-more {
        gap: 1rem;
        margin-top: 3rem;
    }
}

.brutal-btn-more,
.brutal-btn-less {
    font-family: "Bebas Neue", sans-serif;
    font-size: 1.1rem;
    letter-spacing: 0.05em;
    padding: 0.6rem 1.8rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 3px solid #0a0a0a;
}

@media (min-width: 640px) {
    .brutal-btn-more,
    .brutal-btn-less {
        font-size: 1.25rem;
        padding: 0.75rem 2.5rem;
    }
}

.brutal-btn-more {
    background: #0a0a0a;
    color: #fff;
    box-shadow: 4px 4px 0 #666;
}

@media (min-width: 640px) {
    .brutal-btn-more {
        box-shadow: 6px 6px 0 #666;
    }
}

.brutal-btn-more:hover {
    box-shadow: 8px 8px 0 #666;
    transform: translate(-3px, -3px);
}

@media (min-width: 640px) {
    .brutal-btn-more:hover {
        box-shadow: 10px 10px 0 #666;
        transform: translate(-4px, -4px);
    }
}

.brutal-btn-less {
    background: #fff;
    color: #0a0a0a;
    box-shadow: 4px 4px 0 #0a0a0a;
}

@media (min-width: 640px) {
    .brutal-btn-less {
        box-shadow: 6px 6px 0 #0a0a0a;
    }
}

.brutal-btn-less:hover {
    box-shadow: 8px 8px 0 #0a0a0a;
    transform: translate(-3px, -3px);
}

@media (min-width: 640px) {
    .brutal-btn-less:hover {
        box-shadow: 10px 10px 0 #0a0a0a;
        transform: translate(-4px, -4px);
    }
}

.brutal-btn-more:active,
.brutal-btn-less:active {
    box-shadow: 2px 2px 0 #0a0a0a;
    transform: translate(2px, 2px);
}

.btn-arrow {
    font-size: 1rem;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 0.75rem;
}

@media (min-width: 640px) {
    .modal-overlay {
        padding: 1rem;
    }
}

.modal-container {
    position: relative;
    max-width: 900px;
    width: 100%;
    background: #fff;
    border: 3px solid #0a0a0a;
    box-shadow: 6px 6px 0 #0a0a0a;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

@media (min-width: 640px) {
    .modal-container {
        box-shadow: 10px 10px 0 #0a0a0a;
    }
}

.modal-close {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    width: 36px;
    height: 36px;
    background: #ff2d55;
    border: 2px solid #0a0a0a;
    box-shadow: 3px 3px 0 #0a0a0a;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: all 0.2s;
}

@media (min-width: 640px) {
    .modal-close {
        top: 1rem;
        right: 1rem;
        width: 40px;
        height: 40px;
        border: 3px solid #0a0a0a;
        box-shadow: 4px 4px 0 #0a0a0a;
    }
}

.modal-close:hover {
    background: #0a0a0a;
    color: #fff;
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #ff2d55;
}

.modal-content {
    padding: 1.25rem;
    overflow-y: auto;
    flex: 1;
}

@media (min-width: 640px) {
    .modal-content {
        padding: 2rem;
    }
}

.modal-image {
    width: 100%;
    height: auto;
    border: 2px solid #0a0a0a;
    margin-bottom: 1rem;
}

@media (min-width: 640px) {
    .modal-image {
        border: 3px solid #0a0a0a;
        margin-bottom: 1.5rem;
    }
}

.modal-info {
    text-align: center;
}

.modal-title {
    font-family: "Bebas Neue", sans-serif;
    font-size: 1.5rem;
    color: #0a0a0a;
    margin-bottom: 0.3rem;
}

@media (min-width: 640px) {
    .modal-title {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
}

.modal-issuer {
    font-family: "Space Mono", monospace;
    font-size: 0.8rem;
    color: #666;
    font-weight: 600;
}

@media (min-width: 640px) {
    .modal-issuer {
        font-size: 0.9rem;
    }
}


.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    transform: scale(0.9);
}
</style>
