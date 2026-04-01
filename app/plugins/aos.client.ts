import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    nuxtApp.hook('app:mounted', () => {
       AOS.init({
           duration: 1500,
           once: false,
           offset: 0,
           easing: 'ease-in-out',
           mirror: true,
       });
    });

    nuxtApp.hook('page:finish', () => {
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    });
  }
});
