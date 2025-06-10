import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  
  pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1440: { slidesPerView: 1 },
  },
});

axios.defaults.baseURL = 'https://sound-wave.b.goit.study/api/';

async function fetchFeedbacks() {
  try {
    const { data } = await axios.get('/feedbacks?limit=3&page=1');
    const feedbacks = data.data;
    const container = document.getElementById('feedbacks-container');
    container.innerHTML = '';

    feedbacks.forEach((fb, i) => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');

      const ratingId = `raty-${i}`;
      slide.innerHTML = `
        <div class="feedback-card">
          <div class="rating-star" id="${ratingId}"></div>
          <p class="feedback-text">"${fb.descr}"</p>
          <p class="author-name">${fb.name}</p>
        </div>
      `;
      container.appendChild(slide);
      initializeRaty(`#${ratingId}`, fb.rating);
    });

    swiper.update();
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
  }
}

function smartRoundScore(rating) {
  const decimal = rating % 1;

  if (decimal === 0.5) {
    return rating;
  }

  return Math.round(rating);
}

function initializeRaty(selector, rating) {
  $(selector).raty({
    readOnly: true,
    score: smartRoundScore(rating),
    half: true,
    starOn: './images/star-on.svg',
    starOff: './images/star-off.svg',
    starHalf: './images/star-half.svg',
  });
}

fetchFeedbacks();
