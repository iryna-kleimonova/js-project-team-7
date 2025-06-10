import { refs } from './refs.js';
import { fetchArtistsAlbumsById } from './api-service.js';

export function renderArtists(data) {
  const markup = data.artists
    .map(artist => {
      const { _id, strArtist, strBiographyEN, strArtistThumb, genres } = artist;
      return `
              <li class="artist-card" data-id="${_id}">
              
                <img class="artist-card-img" src="${strArtistThumb}" alt="${strArtist}" />
            
                <ul class="artist-card-genres">
                  ${genres.map(genre => `<li>${genre}</li>`).join('') || ''}
                </ul>

                <h3 class="artist-card-name">${strArtist}</h3>
            
                <p class="artist-card-info">
                  ${
                    strBiographyEN
                      ? strBiographyEN.slice(0, 100) + '...'
                      : 'No description available'
                  }
                </p>
            
                <button class="artist-card-btn" type="button">
                 Learn More
                 <svg class="artist-card-icon" width="24" height="24">
                 <use href="./images/sprite.svg#icon-caret-right"></use>
                 </svg>
                </button>
              </li>
            `;
    })
    .join('');

  refs.artistCardsContainer.insertAdjacentHTML('beforeend', markup);
}

export function renderArtistInfo(artistData) {
  const {
    strArtist = '-',
    strArtistThumb,
    strLabel = '-',
    intFormedYear = '-',
    intDiedYear,
    strGender = '-',
    intMembers = '-',
    strCountry = '-',
    strBiographyEN = '-',
    genresList = [],
  } = artistData;

  const genres = genresList.length ? genresList.join(', ') : '-';

  return `
<div class="artist-modal-content">
  <h2 class="artist-name">${strArtist}</h2>
  <img class="artist-image" src="${strArtistThumb || ''}" alt="${strArtist}" />
  <p class="artist-lable"><strong>Label:</strong> ${strLabel}</p>
  <p class="artist-country"><strong>Country:</strong> ${strCountry}</p>
  <p class="artist-genres"><strong>Genres:</strong> ${genres}</p>
  <p class="artist-gender"><strong>Gender:</strong> ${strGender}</p>
  <p class="artist-member"><strong>Members:</strong> ${intMembers}</p>
  <p class="artist-formeed"><strong>Formed:</strong> ${intFormedYear}</p>
  <p class="artist-disbanded">
    <strong>Disbanded:</strong> ${
      intDiedYear && intDiedYear !== 'null' ? intDiedYear : 'Still active'
    }
  </p>
  <p class="artist-bio"><strong>Bio:</strong> ${strBiographyEN}</p>
</div>
`;
}

export function renderAlbums(albumsList) {
  if (!albumsList || albumsList.length === 0) {
    return '<p>No albums available.</p>';
  }

  return albumsList
    .map(album => {
      const tracksMarkup = album.tracks?.length
        ? album.tracks
            .map(
              track => `
          <li class="track-item">
            <span class="track-name">${track.strTrack || '-'}</span>
            <span class="track-duration">${track.intDuration || '-'}</span>
          </li>`
            )
            .join('')
        : '<li>-</li>';

      return `
    <div class="album">
      <h4>${album.strAlbum || '-'}</h4>
      <p><strong>Year:</strong> ${album.intYearReleased || '-'}</p>
      <ul class="track-list">${tracksMarkup}</ul>
    </div>`;
    })
    .join('');
}

