import './Movies.css';
import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import React from "react";
import { MOVIES_ERR_MSG, MOVIES_NOT_FOUND, SEARCH_TEXT_ERR } from "../../utils/constants.js";
import Preloader from "../Preloader/Preloader.jsx";
import { getFiltered, getGridParams, loadSearchParams, saveSearchParams } from "../../utils/moviesHelpers.js";

function Movies({ searchMovies, handleAddMovie, handleRemoveMovie, savedMovies }) {
    const [message, setMessage] = React.useState('');

    const [movies, setMovies] = React.useState([]);
    const [moviesFiltered, setMoviesFiltered] = React.useState([]);

    const [gridParams, setGridParams] = React.useState({init: 0, add: 0})
    const [currAmount, setCurrAmount] = React.useState(0);
    const [isHidden, setIsHidden] = React.useState(true);

    const [isSearchInProgress, setIsSearchInProgress] = React.useState(false);
    const [searchParams, setSearchParams] = React.useState({isShorts: false, text: ''});

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

    //фильтрует фильмы
    function filterMovies (movies, {isShorts, text}) {
        const filtered = getFiltered(movies, {isShorts, text});

        setMoviesFiltered(filtered);
        if (filtered.length === 0) {
            setMessage(MOVIES_NOT_FOUND);
        }
        saveSearchParams(text, isShorts, filtered)
    }

    function prepareSearch() {
        setMessage('');
        setIsSearchInProgress(true);
        setMoviesFiltered([]);
    }

    function search(movies, params) {
        filterMovies(movies, params);
        setIsSearchInProgress(false);
    }

    function handleSearchError() {
        setMessage(MOVIES_ERR_MSG);
        setIsSearchInProgress(false)
    }

    function findMovies (params) {
        searchMovies(
            params,
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
        loadSearchParams(setMoviesFiltered, setSearchParams, setMessage);

        window.addEventListener('resize', () => {
            setTimeout(() => {
                configGrid();
            }, 400);
        });
    }, []);


    // переключает чекбокс, запускает процесс поиска фильма
    function checkboxHandler () {
        const {text} = searchParams;
        const isShorts = !searchParams.isShorts;
        setSearchParams({
            ...searchParams,
            isShorts
        })
        findMovies({isShorts, text});
        resetCurrAmount();
    }

    // сохраняет текст из поля поиска
    function inputHandler (text) {
        setSearchParams({
            ...searchParams,
            text
        })
    }

    function submitHandler(setErrorMessage) {
        searchParams.text.length === 0
            ? setErrorMessage(SEARCH_TEXT_ERR)
            : findMovies(searchParams);
    }

    return (
        <main className="movies">
            <SearchForm
                params={searchParams}
                checkboxHandler={checkboxHandler}
                inputHandler={inputHandler}
                onSubmit={submitHandler}
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

                            />
                            <button className={"movies__button" + (isHidden ? " movies__button_hidden" : "" )} type="button" onClick={onAddMore}>Еще</button>
                            <p>{message}</p>
                        </>
            }
        </main>
    );
}

export default Movies;