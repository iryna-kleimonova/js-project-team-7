// Функції, які передаються колбеками в addEventListners
import { refs } from './refs.js';

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      refs.footer.classList.add('footer--visible');
    }
  },
  { threshold: 0.1 }
);

observer.observe(refs.footer);