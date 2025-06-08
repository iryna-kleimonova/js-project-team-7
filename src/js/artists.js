// import { fetchArtists, fetchArtistById, fetchArtistsAlbumsById } from './api-service.js';
// import { renderArtists } from './render-function.js';
import { refs } from './refs.js';

let currentPage = 1;
const limit = 8;
let totalPages = null;

async function loadArtists() {
  const data = await fetchArtists(currentPage, limit);
  renderArtists(data);
  totalPages = Math.ceil(data.total / limit);

  if (currentPage >= totalPages) {
    refs.loadMoreBtn.style.display = 'none';
  }
}

refs.loadMoreBtn.addEventListener('click', () => {
  currentPage++;
  loadArtists();
});

refs.artistCardsContainer.addEventListener('click', async e => {
  const card = e.target.closest('.js-artist-list');
  if (!card) return;

  const id = card.dataset.id;
  const artist = await fetchArtistById(id);
});

loadArtists();
