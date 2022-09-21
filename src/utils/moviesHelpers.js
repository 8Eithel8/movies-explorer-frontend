import {MOVIES_GRID, SEARCH_PARAMS_LS_KEY, SHORT_MOVIE_DURATION} from "./constants";

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
export function loadSearchParams(setFiltered, setText, setIsShorts) {
    const searchParams = JSON.parse(localStorage.getItem(SEARCH_PARAMS_LS_KEY));
    if (searchParams) {
        setFiltered(searchParams.moviesFound || []);
        setText(searchParams.text || '');
        setIsShorts(searchParams.isShorts || false)
        return true
    }
    return false;
}

//записываем в локалсторадж параметры и результат последнего поиска
export function saveSearchParams(text, isShorts, moviesFound) {
    localStorage.setItem(SEARCH_PARAMS_LS_KEY, JSON.stringify({text, isShorts, moviesFound}));
}

//фильтруем фильмы  в соответствии с параметрами запроса
export const filterByDuration = (movies, isShorts) => isShorts
    ? movies.filter(movie => movie.duration <= SHORT_MOVIE_DURATION)
    : movies;

export const filterByText = (movies, text) => {
    text = text.toLowerCase();
    return text.length > 0
        ? movies.filter(movie => movie.nameRU.toLowerCase().includes(text.toLowerCase()))
        : movies;
};

//приводим формат продолжительности фильмов в соответствии с макетом
export const durationToHours = duration => (Math.floor(duration / 60) + 'ч') + (duration % 60 + 'м');

//поиск фильмов по массиву по Id
export function findMovieById(movies, movieId) {
    return movies.find(movie => movie.movieId === movieId)
}