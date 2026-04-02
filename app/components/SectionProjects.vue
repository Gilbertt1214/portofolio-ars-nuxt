<template>
  <div class="brutal-projects">
    <div class="brutal-projects-container">
      <BrutalHeader label="PROJECTS">
        <template #title>
          <span class="flex flex-col sm:flex-row items-center sm:inline-flex gap-4 sm:gap-7 md:gap-8">
            <span class="text-center sm:text-left">HIGHLIGHT<br class="hidden sm:block" /> PROJECTS</span>
                  <client-only>
        <div class="w-52 sm:w-56 md:w-64 aspect-square shrink-0">
          <DotLottieVue
            src="/Web-Dev.lottie"
            autoplay
            loop
            :renderConfig="{ renderer: 'svg', preserveAspectRatio: 'xMidYMid meet' }"
            class="w-full h-full object-contain"
          />
        </div>
      </client-only>
          </span>
        </template>
        <template #description>
          These are some of the projects I have created. These projects have not only helped me build my portfolio, but also enhanced the skills I have developed.
        </template>
      </BrutalHeader>

      <div class="brutal-carousel-outer" data-aos="fade-up">
        <button class="nav-btn nav-prev" @click="prevProject" aria-label="Previous Project">
          <Icon name="ph:arrow-left-bold" />
        </button>

        <div class="brutal-carousel-viewport">
          <div 
            class="brutal-carousel-track" 
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(project) in projects"
              :key="project.id"
              class="brutal-carousel-slide"
            >
              <div class="brutal-project-card">
                <div class="project-image-container">
                  <img :src="project.image" :alt="project.title" class="project-image" />
                </div>
                <div class="project-content">
                  <h3 class="project-title">{{ project.title }}</h3>
                  
                  <!-- Tech Stack Preview -->
                  <div class="tech-stack-preview">
                    <span class="tech-label">TECH STACK</span>
                    <div class="tech-icons-row">
                      <div v-for="tech in project.techStack.slice(0, 5)" :key="tech" class="tech-icon-mini" :title="tech">
                         <Icon :name="getIconName(tech)" />
                      </div>
                    </div>
                  </div>

                  <div class="project-links">
                    <button v-if="project.repo" @click="openLink(project.repo)" class="project-btn-small repo-btn" title="Github">
                      <Icon name="fa6-brands:github" />
                      <span class="btn-label">Github</span>
                    </button>
                    <button v-if="project.live" @click="openLink(project.live)" class="project-btn-small live-btn" title="Live Demo">
                      <Icon name="ph:arrow-square-out-bold" />
                      <span class="btn-label">Live</span>
                    </button>
                    <button @click="openProjectDetails(project)" class="project-btn-small details-btn" title="View Details">
                      <Icon name="ph:info-bold" />
                      <span class="btn-label">Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="nav-btn nav-next" @click="nextProject" aria-label="Next Project">
          <Icon name="ph:arrow-right-bold" />
        </button>
      </div>
    </div>

    <ProjectModal
      :isOpen="isModalOpen"
      :project="selectedProject"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const isModalOpen = ref(false);
const selectedProject = ref(null);
const currentIndex = ref(0);

const projects = [
  {
    id: 1,
    title: "Project slicing UI",
    about: "Project slicing UI website menggunakan Vue 3 dan Vite untuk mengimplementasikan desain antarmuka menjadi halaman web yang responsif.",
    techStack: ["vue", "vite", "tailwind"],
    features: ["Responsive design", "Component-based architecture", "Tailwind CSS styling", "Optimized performance"],
    image: "/project/project1.jpeg",
    live: "https://project-slicing-ui-aswara.vercel.app",
    repo: "https://github.com/awraay/project-slicing-ui-aswara",
  },
  {
    id: 2,
    title: "SIMADA",
    about: "Sistem Manajemen Dokumen Akreditasi Sekolah Vokasi Universitas Sebelas Maret.",
    techStack: ["laravel", "php", "mysql", "tailwind", "vue"],
    features: ["User authentication", "Document management", "Role-based access control", "Real-time notifications",],
    image: "/project/project2.png",
    repo: "https://github.com/awraay/PBL.git",
  },
  {
    id: 3,
    title: "SIKOMPETEN",
    about: "Aplikasi web berbasis Laravel untuk pengelolaan izin pengembangan kompetensi ASN, dengan kontribusi sebagai Frontend Developer.",
    techStack: ["laravel", "php", "mysql", "bootstrap"],
    features: ["User authentication", "Permission to use", "User management", "Automatic letters generation", "Verification control", "Report permission usage"],
    image: "/project/project3.png",
    live: "https://drive.google.com/file/d/1uIzggpfhenMi_3kUe1f7A9ZFBihfcirB/view?usp=sharing",
    repo: "https://github.com/Chaechaera/SIKOMPETEN-BKPSDM",
  },
  {
    id: 4,
    title: "Endless Space Pilot",
    about: "Game arcade luar angkasa yang dikembangkan menggunakan Unity dengan kontrol kursor, sistem 3 nyawa, serta penyimpanan skor dan high score.",
    techStack: ["unity", "csharp"],
    features: ["Latest score saving", "Cursor control", "3 lives system", "High score tracking", "Space-themed graphics"],
    image: "/project/project4.png",
    live: "https://drive.google.com/file/d/1hnJtGcJs7TfBxiFjELlKtRJS9Q_RxcxC/view?usp=sharing",
    repo: "https://github.com",
  },
  {
    id: 5,
    title: "ASSETOIT",
    about: "Sistem Inventaris Perangkat IT “ASSETOIT.",
    techStack: ["laravel", "php", "mysql", "tailwind", "vue"],
    features: ["It equipment inventory management", "User authentication", "Role-based access control", "Real-time notifications", "Report generation",],
    image: "/project/project5.png",
    repo: "https://github.com/Voltassium/AssetoIT",
  },
];

const nextProject = () => {
    currentIndex.value = (currentIndex.value + 1) % projects.length;
};

const prevProject = () => {
    currentIndex.value = (currentIndex.value - 1 + projects.length) % projects.length;
};

const openProjectDetails = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const openLink = (url) => {
  window.open(url, '_blank');
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedProject.value = null;
  document.body.style.overflow = '';
};

const getIconName = (tech) => {
  const iconMap = {
    nextjs: "logos:nextjs-icon",
    typescript: "logos:typescript-icon",
    tailwind: "logos:tailwindcss-icon",
    prisma: "logos:prisma",
    react: "logos:react",
    vue: "logos:vue",
    nuxt: "logos:nuxt-icon",
    supabase: "logos:supabase-icon",
    nodejs: "logos:nodejs-icon",
    mongodb: "logos:mongodb-icon",
    expo: "logos:expo-icon",
    firebase: "logos:firebase",
    vite: "logos:vitejs",
    javascript: "logos:javascript",
    vercel: "logos:vercel-icon",
    bootstrap: "logos:bootstrap",
    php: "logos:php",
    laravel: "logos:laravel",
    mysql: "logos:mysql",
    html: "logos:html-5",
    css: "logos:css-3",
    unity: "logos:unity",
    csharp: "logos:c-sharp",
    iot: "logos:iot",
    arduino: "logos:arduino",
    python: "logos:python",
    
  };
  return iconMap[tech.toLowerCase()] || "ph:app-window-bold";
};
</script>

<style scoped>
.brutal-projects {
  padding: 2.5rem 1rem 2rem;
}

@media (min-width: 640px) {
  .brutal-projects {
    padding: 8rem 1.5rem 5rem;
  }
}

.brutal-projects-container {
  max-width: 900px;
  margin: 0 auto;
}

.brutal-carousel-outer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 0;
}

@media (min-width: 640px) {
  .brutal-carousel-outer {
    gap: 1.5rem;
    margin-top: 3rem;
    padding: 0 1rem;
  }
}

@media (min-width: 900px) {
  .brutal-carousel-outer {
    gap: 2rem;
  }
}

.brutal-carousel-viewport {
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  border: 3px solid #0a0a0a;
  background: white;
  box-shadow: 6px 6px 0 #0a0a0a;
}

@media (min-width: 640px) {
  .brutal-carousel-viewport {
    border: 4px solid #0a0a0a;
    box-shadow: 10px 10px 0 #0a0a0a;
  }
}

.brutal-carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.brutal-carousel-slide {
  flex: 0 0 100%;
  width: 100%;
}

.brutal-project-card {
  border: none;
  display: flex;
  flex-direction: column;
}

.project-image-container {
  width: 100%;
  height: 180px;
  overflow: hidden;
  background: #f5f5f5;
  border-bottom: 3px solid #0a0a0a;
}

@media (min-width: 480px) {
  .project-image-container {
    height: 250px;
  }
}

@media (min-width: 640px) {
  .project-image-container {
    height: 300px;
    border-bottom: 4px solid #0a0a0a;
  }
}

@media (min-width: 900px) {
  .project-image-container {
    height: 350px;
  }
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-content {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
}

@media (min-width: 640px) {
  .project-content {
    padding: 1.5rem 2rem 2rem;
  }
}

.project-title {
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.8rem;
  color: #0a0a0a;
  line-height: 1;
}

@media (min-width: 640px) {
  .project-title {
    font-size: 2.5rem;
  }
}

/* Tech Stack Preview */
.tech-stack-preview {
  margin-top: 0.6rem;
  margin-bottom: 1rem;
}

@media (min-width: 640px) {
  .tech-stack-preview {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
}

.tech-label {
  font-size: 9px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: block;
  margin-bottom: 0.5rem;
}

@media (min-width: 640px) {
  .tech-label {
    font-size: 10px;
  }
}

.tech-icons-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

@media (min-width: 640px) {
  .tech-icons-row {
    gap: 0.5rem;
  }
}

.nav-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 3px solid #0a0a0a;
  box-shadow: 4px 4px 0 #0a0a0a;
  font-size: 1.1rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s;
  flex-shrink: 0;
}

@media (min-width: 640px) {
  .nav-btn {
    width: 50px;
    height: 50px;
    box-shadow: 5px 5px 0 #0a0a0a;
    font-size: 1.3rem;
  }
}

@media (min-width: 900px) {
  .nav-btn {
    width: 60px;
    height: 60px;
    border: 4px solid #0a0a0a;
    box-shadow: 6px 6px 0 #0a0a0a;
    font-size: 1.5rem;
  }
}

.nav-btn:hover {
  transform: translate(-3px, -3px);
  box-shadow: 10px 10px 0 #0a0a0a;
  background: #ffe066;
}

.nav-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #0a0a0a;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1.5rem;
}

@media (min-width: 640px) {
  .carousel-indicators {
    gap: 1rem;
    margin-top: 2rem;
  }
}

.indicator-dot {
  width: 28px;
  height: 6px;
  background: #fff;
  border: 2px solid #0a0a0a;
  cursor: pointer;
  transition: all 0.3s;
}

@media (min-width: 640px) {
  .indicator-dot {
    width: 40px;
    height: 8px;
  }
}

.indicator-dot.active {
  background: #ff2d55;
  width: 45px;
  box-shadow: 3px 3px 0 #0a0a0a;
}

@media (min-width: 640px) {
  .indicator-dot.active {
    width: 60px;
  }
}

/* Reusing mini icon & small btn styles */
.tech-icon-mini {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #0a0a0a;
  background: #f5f5f5;
  font-size: 1rem;
  box-shadow: 2px 2px 0 #0a0a0a;
}

@media (min-width: 640px) {
  .tech-icon-mini {
    width: 38px;
    height: 38px;
    font-size: 1.2rem;
    box-shadow: 3px 3px 0 #0a0a0a;
  }
}

.project-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: auto;
}

@media (min-width: 640px) {
  .project-links {
    gap: 1rem;
  }
}

.project-btn-small {
  font-family: "Space Mono", monospace;
  font-size: 0.72rem;
  font-weight: bold;
  padding: 0.45rem 0.7rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  border: 2px solid #0a0a0a;
  text-decoration: none;
  background: white;
  color: #0a0a0a;
  box-shadow: 3px 3px 0 #0a0a0a;
  transition: all 0.15s;
  cursor: pointer;
}

@media (min-width: 640px) {
  .project-btn-small {
    font-size: 0.85rem;
    padding: 0.6rem 1rem;
    gap: 0.5rem;
    border: 3px solid #0a0a0a;
    box-shadow: 4px 4px 0 #0a0a0a;
  }
}

.project-btn-small:hover {
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 #0a0a0a;
}

@media (min-width: 640px) {
  .project-btn-small:hover {
    box-shadow: 6px 6px 0 #0a0a0a;
  }
}

.repo-btn:hover {
  background: #f5f5f5;
}

.live-btn:hover {
  background: #ffe066;
}

.details-btn {
  background: #89CFF0;
}

.details-btn:hover {
  background: #3182ce;
  color: white;
}

/* Hide btn labels on very small screens */
@media (max-width: 379px) {
  .btn-label {
    display: none;
  }
  
  .project-btn-small {
    padding: 0.5rem;
  }
}

/* Mobile: nav buttons below carousel */
@media (max-width: 639px) {
  .brutal-carousel-outer {
    flex-wrap: wrap;
  }
  
  .brutal-carousel-viewport {
    order: 1;
    max-width: 100%;
  }

  .nav-prev {
    order: 2;
  }
  
  .nav-next {
    order: 3;
  }
}
</style>
