import {responseCheck} from "./MainApi.js";
import {MOVIES_URL} from "./constants.js";

export const getMovies = () => {
    return fetch(MOVIES_URL + '/beatfilm-movies', { method: 'GET' })
        .then(responseCheck)
        .then(data => data.map(movie => ({
                    country: movie.country,
                    director: movie.director,
                    duration: movie.duration,
                    year: movie.year,
                    description: movie.description,
                    image: MOVIES_URL + movie.image.url,
                    trailerLink: movie.trailerLink,
                    thumbnail: MOVIES_URL + movie.image.formats.thumbnail.url,
                    movieId: movie.id,
                    nameRU: movie.nameRU,
                    nameEN: movie.nameEN,
                }))
        );
}
