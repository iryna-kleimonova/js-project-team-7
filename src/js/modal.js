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

  addModalListeners();
}

// додавання та видалення слухачів для модального вікна
function closeModal() {
  refs.modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  removeModalListeners();
}

function onModalClick(event) {
  if (event.target === refs.modal || event.target.closest('.js-modal-close')) {
    closeModal();
  }
}

function onModalKeydown(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function addModalListeners() {
  document.addEventListener('click', onModalClick);
  document.addEventListener('keydown', onModalKeydown);
}

function removeModalListeners() {
  document.removeEventListener('click', onModalClick);
  document.removeEventListener('keydown', onModalKeydown);
}

export function showModalLoader() {
  refs.modalLoader?.classList.remove('visually-hidden');
}

export function hideModalLoader() {
  refs.modalLoader?.classList.add('visually-hidden');
}
