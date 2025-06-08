

import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'css-star-rating/css/star-rating.min.css';


const swiper = new Swiper('.feedback-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 3,
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
   
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 }
    }
});
  


axios.defaults.baseURL = "https://sound-wave.b.goit.study/api/";
// const feedbacksContainer = document.querySelector('.swiper-wrapper')

// async function fetchFeedbacks() {
//     try {
//     const response = await axios.get('/feedbacks');
//         const feedbacks = response.data.data;
//         console.log(feedbacks);
        
//         renderFeedbacks(feedbacks);
//     } catch (error) {
//         console.error('Помилка при отриманні відгуків', error);
//     }
    
// }


// function renderFeedbacks(feedbacks) {
//     if (!Array.isArray(feedbacks)) {
//         console.error('Очікується масив відгуків, але отримано:', feedbacks);
//         return;
//       }
//     const markup = feedbacks.map(({descr, name, rating }) => {
//         const roundedRating = Math.round(rating);
//         return `<div class="feedback-card">
//             < div class="star-rating data-rating="${roundedRating}"></div>
//             <h3 class = "comment" >${ descr }</h3>
//                 <p class="author">"${name}</p></div >`;
//     }).join('');
    
//     feedbacksContainer.innerHTML = markup;
    

  
// document.querySelectorAll('.star-rating').forEach(el => {
//     const rating = el.getAttribute('data-rating');
//     el.classList.add('star-rating', `s-${rating}`);
//     el.setAttribute('data-stars', rating);
//     el.setAttribute('data-theme', 'css-stars');
// });
// }

// fetchFeedbacks();


async function fetchFeedbacks() {
    try {
      const response = await axios.get('/feedbacks?limit=3&page=1');
      const feedbacks = response.data.data;
  
      const container = document.getElementById('feedbacks-container');
      container.innerHTML = '';
  
      if (!Array.isArray(feedbacks)) {
        console.error('Ожидался массив, но получено:', feedbacks);
        return;
      }
  
      feedbacks.forEach(fb => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        const roundedRating = Math.round(fb.rating);
  
        slide.innerHTML = `
          <div class="feedback-card">
            <div class="rating" data-stars="${roundedRating}"></div>
            <p class="feedback-text">"${fb.descr}"</p>
            <p class="author-name">${fb.name}</p>
          </div>
        `;

        const ratingEl = createRatingElement(roundedRating);
        slide.querySelector('.rating').appendChild(ratingEl);
  
  
        container.appendChild(slide);
      });
  
      updateStars();
      swiper.update();
    } catch (error) {
      console.error('Ошибка при получении отзывов:', error);
    }
}
  
function createRatingElement(roundedRating) {
  const select = document.createElement('select');
  select.classList.add('rating', 'rating--sm');
  select.setAttribute('data-readonly', '');

  for (let i = 1; i <= 5; i++){
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    if (i === roundedRating) option.selected = true;
    select.appendChild(option);
  }
  return select;
}
  
  // Преобразование звёзд с css-star-rating
  function updateStars() {
    const ratings = document.querySelectorAll('.rating');
    ratings.forEach(el => {
      const stars = +el.dataset.stars || 0;
      el.classList.add('rating', 'rating--read-only', 'rating--md');
      el.setAttribute('data-rating', stars);
    });
}
  

  fetchFeedbacks();