import {responseCheck} from "./MainApi.js";

export const MOVIES_URL = 'https://api.nomoreparties.co';

export const getMovies = (token) => {
    return fetch(MOVIES_URL + '/beatfilm-movies', { method: 'GET' })
        .then(responseCheck)
        .then(data => data.map(movie => ({
                    country: movie.country,
                    director: movie.director,
                    duration: movie.duration,
                    year: movie.year,
                    description: movie.description,
                    image: movie.image.url,
                    trailerLink: movie.trailerLink,
                    thumbnail: movie.image.formats.thumbnail.url,
                    movieId: movie.id,
                    nameRU: movie.nameRU,
                    nameEN: movie.nameEN,
                }))
        );
}
