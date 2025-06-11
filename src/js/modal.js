import { refs } from './refs';
import { renderModal, renderAlbums } from './render-function';

export function openArtistModal({ artist, albums }) {
  const artistData = {
    ...artist,
    albumsList: albums || [],
    genresList: artist.genres || [],
  };
  renderModal(artistData);
  renderAlbums(artistData.albumsList);
  refs.modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  hideModalLoader();
}

// додавання та видалення слухачів для модального вікна
document.addEventListener('click', event => {
  if (event.target.closest('.js-modal-close')) {
    refs.modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    removeListeners();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    refs.modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    removeListeners();
  }
});

refs.modal.addEventListener('click', event => {
  if (event.target === refs.modal) {
    refs.modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    removeListeners();
  }
});

function removeListeners() {
  document.removeEventListener('click', this);
  document.removeEventListener('keydown', this);
  refs.modal.removeEventListener('click', this);
}

export function showModalLoader() {
  refs.modalLoader.classList.add('active');
}

export function hideModalLoader() {
  refs.modalLoader.classList.remove('active');
}
