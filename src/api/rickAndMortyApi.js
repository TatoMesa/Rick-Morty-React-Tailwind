const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = (query = '') =>
  fetch(`${BASE_URL}/character${query}`).then(r => r.json());

export const getCharacterById = (id) =>
  fetch(`${BASE_URL}/character/${id}`).then(r => r.json());

export const getEpisodes = (query = '') =>
  fetch(`https://rickandmortyapi.com/api/episode${query}`)
    .then(res => res.json());

export const getEpisodeById = (id) =>
  fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    .then(res => res.json());

export const getMultipleCharacters = (ids) =>
  fetch(`https://rickandmortyapi.com/api/character/${ids}`)
    .then(res => res.json());