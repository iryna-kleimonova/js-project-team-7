import { refs } from "./refs";

const {modal, modalFilters, modalCloseBtn, modalContent} = refs

export function openArtistModal({ artist, albums }) {
  console.log('Дані для модального вікна:', artist, albums);
  modal.classList.remove('hidden');
}
export async function createArtistModal({artist, albums}) {

}