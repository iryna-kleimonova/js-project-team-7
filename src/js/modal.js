  import { event } from 'jquery';
  import { refs } from './refs';
  import { renderModal, renderAlbums } from './render-function';

  const { modal, modalCloseBtn, modalContent } = refs;


  export function openArtistModal({ artist, albums }) {
    console.log(albums);
    const artistData = { ...artist, albumsList: albums || [] };
    console.log('Albums:', artistData.albumsList);

    renderModal(artistData);
    renderAlbums(artistData.albumsList);
    refs.modal.classList.remove('hidden');
  }

  document.addEventListener('click', event => {
    if (event.target.closest('.js-modal-close')) {
      refs.modal.classList.add('hidden');
    }
  });
