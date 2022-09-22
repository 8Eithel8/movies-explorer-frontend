import './Movies.css';
import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import React from "react";
import { MOVIES_ERR_MSG, MOVIES_NOT_FOUND, SEARCH_TEXT_ERR } from "../../utils/constants.js";
import Preloader from "../Preloader/Preloader.jsx";
import {
    filterByDuration,
    filterByText,
    findMovieById,
    getGridParams,
    loadSearchParams,
    saveSearchParams
} from "../../utils/moviesHelpers.js";

function Movies({ searchMovies, handleAddMovie, handleRemoveMovie, savedMovies }) {
    const [message, setMessage] = React.useState('');

    const [movies, setMovies] = React.useState([]);
    const [moviesFound, setMoviesFound] = React.useState([]);
    const [moviesFiltered, setMoviesFiltered] = React.useState([]);

    const [gridParams, setGridParams] = React.useState({init: 0, add: 0})
    const [currAmount, setCurrAmount] = React.useState(0);
    const [isHidden, setIsHidden] = React.useState(true);

    const [isSearchInProgress, setIsSearchInProgress] = React.useState(false);
    const [isShorts, setIsShorts] = React.useState(false);
    const [text, setText] = React.useState('');
    const [isSearchWas, setIsSearchWas] = React.useState(false);

    React.useEffect(() => setMoviesFiltered(filterByDuration(moviesFound, isShorts)), [moviesFound, isShorts])
    React.useEffect(() => {
        if (!isSearchInProgress && isSearchWas) {
            if (moviesFiltered.length === 0) {
                if (message === '' ) {
                    setMessage(MOVIES_NOT_FOUND);
                }
            } else {
                if (message === MOVIES_NOT_FOUND) {
                    setMessage('');
                }
            }
        }
    }, [moviesFiltered, isSearchInProgress])


    function resetCurrAmount() {
        setCurrAmount(gridParams.init)
    }

    React.useEffect(() => resetCurrAmount(), [gridParams])
    React.useEffect(() => setIsHidden(moviesFiltered.length <= currAmount), [moviesFiltered, currAmount])

    const onAddMore = () => setCurrAmount(currAmount + gridParams.add);

    function configGrid() {
        const params = getGridParams(window.innerWidth);
        if (gridParams.init !== params.init) {
            setGridParams(params);
        }
    }

    function prepareSearch() {
        setMessage('');
        setIsSearchInProgress(true);
        setMoviesFound([]);
    }

    function search(movies, text, isShorts) {
        const moviesFound = filterByText(movies, text);

        setMoviesFound(moviesFound);
        saveSearchParams(text, isShorts, moviesFound)
        setIsSearchWas(true);
        setIsSearchInProgress(false);
    }

    function handleSearchError() {
        setMessage(MOVIES_ERR_MSG);
        setIsSearchInProgress(false)
    }

    function findMovies () {
        searchMovies(
            text,
            isShorts,
            {
                prepare: prepareSearch,
                search: search,
                handleError: handleSearchError
            },
            {
                get: movies,
                set: setMovies
            }
        )
    }

    React.useEffect(() => {
        configGrid();
        const result = loadSearchParams(setMoviesFound, setText, setIsShorts);
        setIsSearchWas(result);

        function handleResize() {
            setTimeout(() => {
                configGrid();
            }, 400);
        }

        window.addEventListener('resize', handleResize);
        return () =>  window.removeEventListener('resize', handleResize);
    }, []);

    // переключает чекбокс, запускает процесс фильтрации фильмов
    function handleCheckbox () {
        const newIsShorts = !isShorts;
        setIsShorts(newIsShorts)
        resetCurrAmount();
        saveSearchParams(text, newIsShorts, moviesFound)
    }

    function handleSubmit(setErrorMessage) {
        text.length === 0
            ? setErrorMessage(SEARCH_TEXT_ERR)
            : findMovies();
    }

    //добавляет/удаляет из избранного фильм при нажатии на кнопку
    const handleClick = (data, isLiked) => {
        isLiked
            ? handleRemoveMovie(findMovieById(savedMovies, data.movieId))
            : handleAddMovie(data);
    }

    return (
        <main className="movies">
            <SearchForm
                text={text}
                isShorts={isShorts}
                checkboxHandler={handleCheckbox}
                inputHandler={setText}
                onSubmit={handleSubmit}
                isDisabled={isSearchInProgress}
            />
            {
                isSearchInProgress
                    ? <Preloader/>
                    :
                        <>
                            <MoviesCardList
                                cards={moviesFiltered.slice(0, currAmount)}
                                handleAddMovie={handleAddMovie}
                                handleRemoveMovie={handleRemoveMovie}
                                savedMovies={savedMovies}
                                handleClick={handleClick}
                            />
                            <button className={"movies__button" + (isHidden ? " movies__button_hidden" : "" )} type="button" onClick={onAddMore}>Еще</button>
                            <p>{message}</p>
                        </>
            }
        </main>
    );
}

export default Movies;