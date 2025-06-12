import {
  fetchArtists,
  fetchArtistById,
  fetchArtistsAlbumsById,
} from './api-service.js';

import {
  openArtistModal,
  showModalLoader,
  hideModalLoader
} from './modal.js';

import {
  renderArtists,
  showLoadMoreBtn,
  hideLoadMoreBtn,
  showLoadMoreLoader,
  hideLoadMoreLoader,
} from './render-function.js';

import { refs } from './refs.js';

let currentPage = 1;
const limit = 8;
let totalPages = null;

async function loadArtists() {
  showLoadMoreLoader();

  try {
    const data = await fetchArtists(currentPage, limit);
    renderArtists(data);
    totalPages = Math.ceil(data.total / limit);
  } catch (error) {
    console.error('Failed to load artists:', error);
  } finally {
    hideLoadMoreLoader();

    if (currentPage < totalPages) {
      hideLoadMoreBtn();
    }
  }
}

refs.loadMoreBtn.addEventListener('click', () => {
  currentPage++;
  loadArtists().catch(error => {
    console.error('Failed to load more artists:', error);
  });
});

refs.artistCardsContainer.addEventListener('click', async e => {
  const button = e.target.closest('.artist-card-btn');

  if (!button) return;

  const card = button.closest('.artist-card');
  const raw = card.dataset.artist;

  if (!raw) {
    console.warn('Missing artist data');
    return;
  }

  showModalLoader();
  refs.modal.classList.remove('hidden');

  try {
    const artistFromCard = JSON.parse(decodeURIComponent(raw));
    const artistFromApi = await fetchArtistById(artistFromCard._id);
    const albums = await fetchArtistsAlbumsById(artistFromCard._id);

    const mergedArtist = {
      ...artistFromApi,
      genres: artistFromCard.genres || [],
    };

    openArtistModal({ artist: mergedArtist, albums });
  } catch (error) {
    console.error('Failed to open artist modal:', error);
  } finally {
    setTimeout(() => {
      hideModalLoader();
    }, 20);
  }
});

loadArtists();
