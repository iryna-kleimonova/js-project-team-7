import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'css-star-rating/css/star-rating.min.css';

const swiper = new Swiper('.feedback-swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 3,
  loop: true,
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 1 },
  },
});

axios.defaults.baseURL = 'https://sound-wave.b.goit.study/api/';

// async function fetchFeedbacks() {
//   try {
//     const response = await axios.get('/feedbacks?limit=3&page=1');
//     const feedbacks = response.data.data;

//     const container = document.getElementById('feedbacks-container');
//     container.innerHTML = '';

//     if (!Array.isArray(feedbacks)) {
//       return;
//     }

//     feedbacks.forEach(fb => {
//       const slide = document.createElement('div');
//       slide.classList.add('swiper-slide');
//       const roundedRating = Math.round(fb.rating);

//       slide.innerHTML = `
//           <div class="feedback-card">
//             <div class="rating" data-stars="${roundedRating}"></div>
//             <p class="feedback-text">"${fb.descr}"</p>
//             <p class="author-name">${fb.name}</p>
//           </div>
//         `;

//       const ratingEl = createRatingElement(roundedRating);
//       slide.querySelector('.rating').appendChild(ratingEl);

//       container.appendChild(slide);
//     });

//     updateStars();
//     swiper.update();
//   } catch (error) {
//     console.error('Error receving feedback:', error);
//   }
// }

// function createRatingElement(roundedRating) {
//   const select = document.createElement('select');
//   select.classList.add('rating', 'rating--sm');
//   select.setAttribute('data-readonly', '');

//   for (let i = 1; i <= 5; i++) {
//     const option = document.createElement('option');
//     option.value = i;
//     option.textContent = i;
//     if (i === roundedRating) option.selected = true;
//     select.appendChild(option);
//   }
//   return select;
// }

// function updateStars() {
//   const ratings = document.querySelectorAll('.rating');
//   ratings.forEach(el => {
//     const stars = +el.dataset.stars || 0;
//     el.classList.add('rating', 'rating--read-only', 'rating--md');
//     el.setAttribute('data-rating', stars);
//   });
// }

async function fetchFeedbacks() {
  try {
    const { data } = await axios.get('/feedbacks?limit=3&page=1');
    const feedbacks = data.data;
    console.log('Отримані фідбеки:', feedbacks);
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
    starOn: '/images/star-on.svg',
    starOff: '/images/star-off.svg',
    starHalf: '/images/star-half.svg',
  });
}

fetchFeedbacks();
