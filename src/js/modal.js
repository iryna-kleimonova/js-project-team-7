import { refs } from './refs';
import { renderModal, renderAlbums } from './render-function';

const { modal, modalCloseBtn, modalContent } = refs;

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
}
// ---- Функції для додавання та видалення слухачів для модального вікна ------------
function onCloseButtonClick(event) {
  if (event.target.closest('.js-modal-close')) {
    refs.modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
}

function onEscapePress(event) {
  if (event.key === 'Escape') {
    refs.modal.classList.add('hidden');
  }
}

function onBackdropClick(event) {
  if (event.target === refs.modal) {
    refs.modal.classList.add('hidden');
  }
}

function addModalEventListener(refs) {
  document.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onEscapePress);
  refs.modal.addEventListener('click', onBackdropClick);
}

function removeModalEventListener(refs) {
  document.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onEscapePress);
  refs.modal.removeEventListener('click', onBackdropClick);
}

addModalEventListener(refs);
 removeModalEventListener(refs);


