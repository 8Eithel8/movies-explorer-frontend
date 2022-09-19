import {MOVIES_GRID, MOVIES_NOT_FOUND, SEARCH_PARAMS_LS_KEY, SHORT_MOVIE_DURATION} from "./constants";

//проверяем размер экрана и возвращаем соответствующий его размеру грид
export function getGridParams (width) {
    if (width <= MOVIES_GRID.mobile.maxWidth) {
        return MOVIES_GRID.mobile;
    }
    if (width <= MOVIES_GRID.tab.maxWidth) {
        return MOVIES_GRID.tab;
    }
    if (width <= MOVIES_GRID.intermediate.maxWidth) {
        return MOVIES_GRID.intermediate;
    }
    return MOVIES_GRID.desk;
}

//достаем из локалсторадж параметры и результат последнего поиска
export function loadSearchParams(setFiltered, setParams, setMessage) {
    const searchParams = JSON.parse(localStorage.getItem(SEARCH_PARAMS_LS_KEY));
    if (searchParams) {
        setFiltered(searchParams.moviesFiltred);
        setParams({
            text: searchParams.text,
            isShorts: searchParams.isShorts
        })
        if (searchParams.moviesFiltred.length === 0) setMessage(MOVIES_NOT_FOUND);
    }
}

//записываем в локалсторадж параметры и результат последнего поиска
export function saveSearchParams(text, isShorts, moviesFiltred) {
    localStorage.setItem(SEARCH_PARAMS_LS_KEY, JSON.stringify({text, isShorts, moviesFiltred}));
}

//фильтруем фильмы  в соответствии с параметрами запроса
export function getFiltered (movies, {isShorts, text}) {
    const moviesFiltredByDuration = isShorts
        ? movies.filter(movie => movie.duration <= SHORT_MOVIE_DURATION)
        : movies;

    return text.length > 0
        ? moviesFiltredByDuration.filter(movie => movie.nameRU.toLowerCase().includes(text.toLowerCase()))
        : moviesFiltredByDuration;
}

//приводим формат продолжительности фильмов в соответствии с макетом
export const durationToHours = duration => (Math.floor(duration / 60) + 'ч') + (duration % 60 + 'м');

//поиск фильмов по массиву по Id
export function findMovieById(movies, movieId) {
    return movies.find(movie => movie.movieId === movieId)
}