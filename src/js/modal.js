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

document.addEventListener('click', event => {
  if (event.target.closest('.js-modal-close')) {
    refs.modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
});
