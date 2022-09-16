import {responseCheck} from "./MainApi.js";

export const MOVIES_URL = 'https://api.nomoreparties.co';

export const getMovies = (token) => {
    return fetch(MOVIES_URL + '/beatfilm-movies', { method: 'GET' })
        .then(responseCheck);
}
