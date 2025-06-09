import { fetchArtists, fetchArtistById, fetchArtistsAlbumsById } from './api-service.js';
import { openArtistModal } from './modal.js';
import {
  renderArtists,
  showLoadMoreBtn,
  hideLoadMoreBtn,
  showLoader,
  hideLoader
} from './render-function.js';
import { refs } from './refs.js';

const loader = document.getElementById('loader');

let currentPage = 1;
const limit = 8;
let totalPages = null;

async function loadArtists() {
  showLoader();
  hideLoadMoreBtn();
  
  try {
    const data = await fetchArtists(currentPage, limit);
    renderArtists(data);
    totalPages = Math.ceil(data.total / limit);
  } catch (error) {
    console.error('Failed to load artists:', error);
  } finally {
    hideLoader();

    if (currentPage < totalPages) {
      showLoadMoreBtn();
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
  const artistId = card?.dataset?.id;

  if (!artistId) {
    console.warn('ID not found for artist card');
    return;
  }

  try {
    const artistData = await fetchArtistById(artistId);
    const albumsData = await fetchArtistsAlbumsById(artistId);

    openArtistModal({ artist: artistData, albums: albumsData });

  } catch (error) {
    console.error('Failed to open artist modal:', error);
  }
});


loadArtists();
