// тимчасова функція для модального вікна
import { event } from 'jquery';
import { refs } from './refs';
import { renderArtistInfo, renderAlbums } from './render-function';

const { modal, modalCloseBtn, modalContent } = refs;


export function openArtistModal({ artist, albums }) {
  const albumsList = Array.isArray(albums) ? albums : [];

  console.log('Artist data received:', artist);
  console.log('Albums list:', albumsList);

  const artistHTML = renderArtistInfo(artist);
  const albumsHTML = renderAlbums(albumsList);

  refs.modalBody.innerHTML = artistHTML + albumsHTML;
  refs.modal.classList.remove('hidden');
}


document.addEventListener('click', event => {
  if (event.target.closest('.js-modal-close')) {
    refs.modal.classList.add('hidden');
  }
});
