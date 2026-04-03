<template>
    <div class="brutal-contact">
        <div class="brutal-contact-container">
            <BaseBrutalHeader label="CONTACT">
                <template #title>
                    <span
                        class="flex flex-col sm:flex-row items-center sm:inline-flex gap-4 sm:gap-7 md:gap-8"
                    >
                        <span class="text-center sm:text-left">CONTACT<br class="hidden sm:block" /> ME</span>
                        <client-only>
                            <div class="w-56 sm:w-64 md:w-72 shrink-0 -mb-8 sm:-mb-12 md:-mb-16">
                                <DotLottieVue
                                    src="/Cat.lottie"
                                    autoplay
                                    loop
                                    class="w-full h-auto object-contain"
                                />
                            </div>
                        </client-only>
                    </span>
                </template>
                <template #description>
                    Have questions or want to chat? Don't hesitate to contact me
                    using the form below or contact me directly.
                </template>
            </BaseBrutalHeader>
            <div class="brutal-info-grid">
                <div class="brutal-info-card" data-aos="fade-right">
                    <div class="info-icon">✉</div>
                    <div class="info-label">EMAIL</div>
                    <button @click="handleEmail" class="info-value"
                        >aswaraay@gmail.com</button
                    >
                </div>
                <div class="brutal-info-card" data-aos="fade-left">
                    <Icon name="fa6-brands:whatsapp" class="info-icon" />
                    <div class="info-label">WHATSAPP</div>
                    <button @click="handleWhatsApp" class="info-value"
                        >+62 812-2584-2802</button
                    >
                </div>
            </div>

            <form
                action="https://formspree.io/f/xykbppal"
                method="POST"
                class="brutal-form"
                data-aos="fade-up"
                @submit.prevent="submitForm"
            >
                <div class="form-label-section">FORM KONTAK // 01</div>

                <div class="form-grid">
                    <div class="form-group">
                        <label for="first-name" class="form-label"
                            >NAMA DEPAN</label
                        >
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autocomplete="given-name"
                            class="brutal-input"
                            placeholder="John"
                            required
                        />
                    </div>

                    <div class="form-group">
                        <label for="last-name" class="form-label"
                            >NAMA BELAKANG</label
                        >
                        <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="brutal-input"
                            placeholder="Doe"
                            required
                        />
                    </div>

                    <div class="form-group form-group-full">
                        <label for="email" class="form-label">EMAIL</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autocomplete="email"
                            class="brutal-input"
                            placeholder="john@example.com"
                            required
                        />
                    </div>

                    <div class="form-group form-group-full">
                        <label for="message" class="form-label">MESSAGE</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            class="brutal-textarea"
                            placeholder=" whrite your message here..."
                            required
                        ></textarea>
                    </div>
                </div>

                <button type="submit" class="brutal-submit-btn" :disabled="isSubmitting">
                    <span class="btn-text">{{ isSubmitting ? 'SENDING...' : 'SEND MESSAGE' }}</span>
                </button>
            </form>
        </div>
        <Transition name="toast">
            <div v-if="showToast" class="brutal-toast">
                <span class="toast-icon">✓</span>
                <span class="toast-text">Send Message Success</span>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { ref } from 'vue';

const showToast = ref(false);
const isSubmitting = ref(false);

const submitForm = async (event) => {
    const form = event.target;
    if (form.action.includes("YOUR_FORM_ID")) {
        alert("Peringatan: ID Formspree belum diatur. Silakan ganti YOUR_FORM_ID di file terlebih dahulu.");
        return;
    }

    isSubmitting.value = true;
    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            showToast.value = true;
            form.reset();
            setTimeout(() => {
                showToast.value = false;
            }, 4000);
        } else {
            alert("Oops! Ada masalah saat mengirim pesan.");
        }
    } catch (error) {
        alert("Terjadi kesalahan jaringan.");
    } finally {
        isSubmitting.value = false;
    }
};

const handleEmail = () => {
    window.location.href = 'mailto:aswaraay@gmail.com';
};

const handleWhatsApp = () => {
    window.open('https://wa.me/+6281225842802', '_blank');
};
</script>

<style scoped>
.brutal-contact {
    padding: 2.5rem 1rem 2rem;
}

@media (min-width: 640px) {
    .brutal-contact {
        padding: 8rem 1.5rem 5rem;
    }
}

.brutal-contact-container {
    max-width: 900px;
    margin: 0 auto;
}

.brutal-info-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

@media (min-width: 480px) {
    .brutal-info-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        margin-bottom: 2rem;
    }
}

.brutal-info-card {
    border: 3px solid #0a0a0a;
    padding: 1.2rem;
    background: #fff;
    box-shadow: 4px 4px 0 #0a0a0a;
    transition: all 0.2s;
}

@media (min-width: 640px) {
    .brutal-info-card {
        padding: 1.5rem;
        box-shadow: 6px 6px 0 #0a0a0a;
    }
}

.brutal-info-card:hover {
    box-shadow: 6px 6px 0 #0a0a0a;
    transform: translate(-2px, -2px);
}

@media (min-width: 640px) {
    .brutal-info-card:hover {
        box-shadow: 8px 8px 0 #0a0a0a;
    }
}

.info-icon {
    font-size: 1.5rem;
    margin-bottom: 0.4rem;
    color: #0a0a0a;
}

@media (min-width: 640px) {
    .info-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
}

.info-label {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: #666;
    margin-bottom: 0.4rem;
}

@media (min-width: 640px) {
    .info-label {
        font-size: 0.7rem;
        margin-bottom: 0.5rem;
    }
}

.info-value {
    font-size: 0.8rem;
    font-weight: 700;
    color: #0a0a0a;
    text-decoration: none;
    display: block;
    transition: color 0.2s;
    word-break: break-all;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    text-align: left;
    width: 100%;
}

@media (min-width: 640px) {
    .info-value {
        font-size: 0.9rem;
        word-break: normal;
    }
}

.info-value:hover {
    color: #ff2d55;
}

.brutal-form {
    border: 3px solid #0a0a0a;
    padding: 1.5rem 1.2rem;
    background: #f5f0e8;
    box-shadow: 5px 5px 0 #0a0a0a;
    transition: all 0.3s ease;
}

@media (min-width: 640px) {
    .brutal-form {
        border: 4px solid #0a0a0a;
        padding: 2.5rem 2rem;
        box-shadow: 8px 8px 0 #0a0a0a;
    }
}

.form-label-section {
    font-size: 0.62rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 1.2rem;
}

@media (min-width: 640px) {
    .form-label-section {
        font-size: 0.68rem;
        margin-bottom: 1.5rem;
    }
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 480px) {
    .form-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group-full {
    grid-column: 1 / -1;
}

.form-label {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
    color: #0a0a0a;
}

@media (min-width: 640px) {
    .form-label {
        font-size: 0.75rem;
        margin-bottom: 0.5rem;
    }
}

.brutal-input,
.brutal-textarea {
    border: 2px solid #0a0a0a;
    padding: 0.7rem;
    font-family: "Space Mono", monospace;
    font-size: 0.8rem;
    background: #fff;
    color: #0a0a0a;
    transition: background-color 0.15s, box-shadow 0.15s, transform 0.15s, color 0.15s, border-color 0.15s;
    width: 100%;
    box-sizing: border-box;
}

@media (min-width: 640px) {
    .brutal-input,
    .brutal-textarea {
        border: 3px solid #0a0a0a;
        padding: 0.8rem;
        font-size: 0.85rem;
    }
}

.brutal-input:focus,
.brutal-textarea:focus {
    outline: none;
    background: #ffe066;
    box-shadow: 4px 4px 0 #0a0a0a;
    transform: translate(-2px, -2px);
    color: #0a0a0a;
}

.brutal-textarea {
    resize: vertical;
    min-height: 100px;
}

@media (min-width: 640px) {
    .brutal-textarea {
        min-height: 120px;
    }
}

.brutal-submit-btn {
    margin-top: 1.2rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem 1.4rem;
    border: 2px solid #0a0a0a;
    background: #ff2d55;
    color: #fff;
    font-family: "Space Mono", monospace;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    cursor: pointer;
    box-shadow: 4px 4px 0 #0a0a0a;
    transition: all 0.15s;
    width: 100%;
    justify-content: center;
}

@media (min-width: 480px) {
    .brutal-submit-btn {
        width: auto;
        justify-content: flex-start;
    }
}

@media (min-width: 640px) {
    .brutal-submit-btn {
        margin-top: 1.5rem;
        padding: 0.9rem 1.8rem;
        border: 3px solid #0a0a0a;
        font-size: 0.85rem;
        box-shadow: 6px 6px 0 #0a0a0a;
    }
}

.brutal-submit-btn:hover {
    background: #e02849;
    box-shadow: 6px 6px 0 #0a0a0a;
    transform: translate(-2px, -2px);
}

@media (min-width: 640px) {
    .brutal-submit-btn:hover {
        box-shadow: 8px 8px 0 #0a0a0a;
    }
}

.brutal-submit-btn:active {
    box-shadow: 3px 3px 0 #0a0a0a;
    transform: translate(3px, 3px);
}

.btn-arrow {
    font-size: 1.2rem;
    transition: transform 0.2s;
}

.brutal-submit-btn:hover .btn-arrow {
    transform: translateX(4px);
}

.brutal-submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.brutal-submit-btn:disabled:hover {
    transform: none;
    box-shadow: 4px 4px 0 #0a0a0a;
    background: #ff2d55;
}

@media (min-width: 640px) {
    .brutal-submit-btn:disabled:hover {
        box-shadow: 6px 6px 0 #0a0a0a;
    }
}


.brutal-toast {
    position: fixed;
    bottom: 2.5rem;
    right: 2.5rem;
    background: #00e676;
    border: 3px solid #0a0a0a;
    box-shadow: 6px 6px 0 #0a0a0a;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    z-index: 100;
    font-family: "Space Mono", monospace;
    font-weight: bold;
    color: #0a0a0a;
}
.toast-icon {
    font-size: 1.2rem;
}
.toast-enter-active,
.toast-leave-active {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.toast-enter-from,
.toast-leave-to {
    transform: translateY(100px);
    opacity: 0;
}
@media (max-width: 639px) {
    .brutal-toast {
        bottom: 1.5rem;
        left: 1.5rem;
        right: 1.5rem;
        justify-content: center;
    }
}
</style>
