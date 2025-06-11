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
        </li>`;
    })
    .join('');

  refs.artistCardsContainer.insertAdjacentHTML('beforeend', markup);
}
// функції для модального вікна
const artistInfo = document.querySelector('.artists-info');
const artistAlbums = document.querySelector('.artists-albums');
export function renderModal(artistData) {
  const {
    strArtist = '-',
    strArtistThumb,
    intFormedYear,
    intDiedYear,
    strGender = '-',
    intMembers,
    strCountry = '-',
    strBiographyEN = '-',
    genresList = [],
  } = artistData;

  const yearsActive = intFormedYear
    ? intDiedYear
      ? `${intFormedYear} - ${intDiedYear}`
      : `${intFormedYear} - present`
    : '-';

  const genresMarkup = genresList.length
    ? genresList
        .map(genre => `<button class="genre-btn">${genre}</button>`)
        .join('')
    : '-';

  const markupModal = `
    <div class="close-button">
      <button class="js-modal-close modal-close">
        <svg width="32" height="32">
          <use href="../images/sprite.svg#icon-menu-close"></use>
        </svg>
      </button>
    </div>
    <h2 class="artist-title">${strArtist}</h2>
    <div class="modal-artist-info">
      <div class="artist-img-container">
        <img src="${strArtistThumb || ''}" alt="${strArtist}" />
      </div>
      <ul class="artist-meta-list">
        <li><b>Years active:</b> ${yearsActive}</li>
        <li><b>Sex:</b> ${strGender}</li>
        <li><b>Members:</b> ${intMembers != null ? intMembers : '-'}</li>
        <li><b>Country:</b> ${strCountry}</li>
      </ul>
      <div class="artist-genres">
        <h3>Genres</h3>
        ${genresMarkup}
      </div>
      <div class="artist-biography">
        <h3>Biography</h3>
        <p>${strBiographyEN}</p>
      </div>
    </div>
  `;

  artistInfo.innerHTML = markupModal;
}

refs.modal.classList.remove('hidden');

// функція для альбомів
export function renderAlbums(albumsList = []) {
  artistAlbums.innerHTML = ''; // очищення перед новим рендером

  if (!albumsList.length) {
    artistAlbums.innerHTML = '<p>-</p>';
    return;
  }

  const albumsMarkup = albumsList
    .map(album => {
      const tracksMarkup =
        album.tracks && album.tracks.length
          ? album.tracks
              .map(
                track => `
                <li class="track-item">
                  <span class="track-name">${track.strTrack || '-'}</span>
                  <span class="track-duration">${
                    track.intDuration || '-'
                  }</span>
                  ${
                    track.movie
                      ? `<a class="track-link" href="${track.movie}" target="_blank" rel="noopener noreferrer">
                          <svg width="24" height="24">
                            <use href="../images/sprite.svg#icon-youtube"></use>
                          </svg>
                        </a>`
                      : `<p class="track-link empty">-</p>`
                  }
                </li>`
              )
              .join('')
          : '<li>-</li>';

      return `
        <div class="album">
          <img src="${album.albumThumb || 'placeholder.jpg'}" alt="${
        album.strAlbum
      }" class="album-cover" />
          <h4>${album.strAlbum || '-'}</h4>
          <p><b>Year Released:</b> ${album.intYearReleased || '-'}</p>
          <ul class="track-list">${tracksMarkup}</ul>
        </div>`;
    })
    .join('');

  artistAlbums.innerHTML = albumsMarkup;
}

//
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

export function renderStars(containerSelector, rating) {
  const container =
    typeof containerSelector === 'string'
      ? document.querySelector(containerSelector)
      : containerSelector;

  if (!container) return;

  // Створюємо елемент зірок
  const starDiv = document.createElement('div');
  starDiv.className = 'stars';

  const percent = Math.min(100, Math.max(0, (rating / 5) * 100));
  starDiv.style.setProperty('--rating-percent', `${percent}%`);

  container.appendChild(starDiv);
}

// search filter
import { fetchGenres } from './api-service.js';

export async function renderGenres() {
  const genres = await fetchGenres();

  refs.genreMenu.innerHTML = genres
    .map(genre => `<li data-genre="${genre.genre}">${genre.genre}</li>`)
    .join('');
}

export function sortArtists(sortType) {
  const artists = [...refs.artistCardsContainer.children];

  if (sortType === 'az') {
    artists.sort((a, b) =>
      a
        .querySelector('.artist-card-name')
        .textContent.localeCompare(
          b.querySelector('.artist-card-name').textContent
        )
    );
  } else if (sortType === 'za') {
    artists.sort((a, b) =>
      b
        .querySelector('.artist-card-name')
        .textContent.localeCompare(
          a.querySelector('.artist-card-name').textContent
        )
    );
  } else {
    return;
  }

  refs.artistCardsContainer.innerHTML = '';
  artists.forEach(artist => refs.artistCardsContainer.appendChild(artist));
}
