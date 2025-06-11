import axios from 'axios';

axios.defaults.baseURL = 'https://sound-wave.b.goit.study/api';

export async function fetchArtists(page = 1, limit = 8) {
  try {
    const BASE_URL = 'https://sound-wave.b.goit.study/api/artists';
    const url = `${BASE_URL}?page=${page}&limit=${limit}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error in fetchArtists:', error);
    throw error;
  }
}

export async function fetchArtistById(id) {
  try {
    const res = await axios.get(`/artists/${id}`);
    return res.data;
  } catch (error) {
    console.error('Error in fetchArtistById:', error);
    throw error;
  }
}

export async function fetchArtistsAlbumsById(id) {

  try {
    const res = await axios.get(`/artists/${id}/albums`);
    return res.data.albumsList; 
  } catch (error) {
    console.error('Error in fetchArtistsAlbumsById:', error);
    throw error;
  }
}
    try {
      const res = await axios.get(`/artists/${id}/albums`);
      return res.data;
    } catch (error) {
      console.error('Error in fetchArtistsAlbumsById:', error);
      throw error;
    }

  

// search filter
export async function fetchGenres() {
  try {
    const response = await axios.get('/genres'); 
    return response.data;
  } catch (error) {
  }
}

export async function fetchArtistsByGenre(genre) {
  try {
    const response = await axios.get(`/artists?genre=${genre}`);
    return response.data;
  } catch (error) {
  }
}

