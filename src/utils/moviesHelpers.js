import {MOVIES_GRID, MOVIES_NOT_FOUND, SEARCH_PARAMS_LS_KEY, SHORT_MOVIE_DURATION} from "./constants";

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

export function saveSearchParams(text, isShorts, moviesFiltred) {
    localStorage.setItem(SEARCH_PARAMS_LS_KEY, JSON.stringify({text, isShorts, moviesFiltred}));
}

export function getFiltered (movies, {isShorts, text}) {
    const moviesFiltredByDuration = isShorts
        ? movies.filter(movie => movie.duration <= SHORT_MOVIE_DURATION)
        : movies;

    return text.length > 0
        ? moviesFiltredByDuration.filter(movie => movie.nameRU.toLowerCase().includes(text.toLowerCase()))
        : moviesFiltredByDuration;
}

export const durationToHours = duration => (Math.floor(duration / 60) + 'ч') + (duration % 60 + 'м');