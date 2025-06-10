// тимчасова функція для модального вікна
    import { event } from 'jquery';
    import { refs } from './refs';
    import {renderModal} from './render-function';

    const { modal, modalCloseBtn, modalContent } = refs;



    // export function openArtistModal({ artist, albums }) {
    //   console.log('Дані для модального вікна:', artist, albums);
    //   modal.classList.remove("hidden");
    // }
    export function openArtistModal({ artist, albums }) {
  const artistData = { ...artist, albumsList: albums || [] };
  console.log(artistData);
  renderModal(artistData);
  refs.modal.classList.remove('hidden');
    }








    document.addEventListener('click', (event) => {
      if (event.target.closest('.js-modal-close')) {
        refs.modal.classList.add('hidden');
      }
    });


