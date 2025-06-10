import { refs } from './refs.js';
import spriteUrl from '../images/sprite.svg?url';

export function renderArtists(data) {
  const markup = data.artists
    .map(artist => {
      const { _id, strArtist, strBiographyEN, strArtistThumb, genres } = artist;
      return `
              <li class="artist-card" data-id="${_id}">
              
                <img class="artist-card-img" src="${strArtistThumb}" alt="${strArtist}" />
            
                <ul class="artist-card-genres">
                  ${genres.map(genre => `<li>${genre}</li>`).join('')}
                </ul>

                <h3 class="artist-card-name">${strArtist}</h3>
            
                <p class="artist-card-info">
                  ${
                    strBiographyEN
                      ? strBiographyEN.slice(0, 100) + '...'
                      : 'No description available'
                  }
                </p>
            
                <button class="artist-card-btn" type="button">
                 Learn More
                 <svg class="artist-card-icon" width="24" height="24">
                 <use href="${spriteUrl}#icon-caret-right"></use>
                 </svg>
                </button>
              </li>
            `;
    })
    .join('');

  refs.artistCardsContainer.insertAdjacentHTML('beforeend', markup);
}

export function showLoadMoreBtn() {
  refs.loadMoreBtn.classList.remove('visually-hidden');
}

export function hideLoadMoreBtn() {
  refs.loadMoreBtn.classList.add('visually-hidden');
}

export function showLoader() {
  refs.loader.classList.remove('visually-hidden');
}

export function hideLoader() {
  refs.loader.classList.add('visually-hidden');
}
