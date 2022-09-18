import './Movies.css';
import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import React from "react";
import {
    MOVIES_ERR_MSG,
    MOVIES_GRID,
    MOVIES_NOT_FOUND, SEARCH_TEXT_ERR,
    SHORT_MOVIE_DURATION
} from "../../utils/constants.js";
import Preloader from "../Preloader/Preloader.jsx";

function Movies(props) {
    const [message, setMessage] = React.useState('');
    const [movies, setMovies] = React.useState([]);
    const [moviesFiltred, setMoviesFiltred] = React.useState([]);
    const [gridParams, setGridParams] = React.useState({init: 0, add: 0})
    const [currAmount, setCurrAmount] = React.useState(0);
    const [isHidden, setIsHidden] = React.useState(true);
    const [isSearchInProgress, setIsSearchInProgress] = React.useState(false);
    const [searchParams, setSearchParams] = React.useState({isShorts: false, text: ''});

    React.useEffect(() => setCurrAmount(gridParams.init), [gridParams])

    React.useEffect(() => setIsHidden(moviesFiltred.length < currAmount), [moviesFiltred, currAmount])

    const onAddMore = () => setCurrAmount(currAmount + gridParams.add);

    function getGridParams (width) {
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

    function configGrid() {
        const params = getGridParams(window.innerWidth);
        if (gridParams.init !== params.init) {
            setGridParams(params);
        }
    }

    //получает фильмы с сервера или из состояния
    function findMovies (params) {
        setMessage('');
        setIsSearchInProgress(true);
        setMoviesFiltred([]);
        if (movies.length === 0) {
            props.getMovies()
                .then(movies => {
                    setMovies(movies);
                    filterMovies(movies, params)
                })
                .catch(() => setMessage(MOVIES_ERR_MSG))
                .finally(() => setIsSearchInProgress(false))
        } else {
            filterMovies(movies, params);
            setIsSearchInProgress(false);
        }
    }

    React.useEffect(() => {
        configGrid();

        const searchParams = JSON.parse(localStorage.getItem('searchParams'));
        if (searchParams) {
            setMoviesFiltred(searchParams.moviesFiltred);
            setSearchParams({
                text: searchParams.text,
                isShorts: searchParams.isShorts
            })
            if (searchParams.moviesFiltred.length === 0) setMessage(MOVIES_NOT_FOUND);
        }

        window.addEventListener('resize', () => {
            setTimeout(() => {
                configGrid();
            }, 400);
        });
    }, []);

    //фильтрует фильмы
    function filterMovies (movies, {isShorts, text}) {
        const moviesFiltredByDuration = isShorts
            ? movies.filter(movie => movie.duration <= SHORT_MOVIE_DURATION)
            : movies;

        const moviesFiltred = text.length > 0
            ? moviesFiltredByDuration.filter(movie => movie.nameRU.toLowerCase().includes(text.toLowerCase()))
            : moviesFiltredByDuration;

        setMoviesFiltred(moviesFiltred);
        if (moviesFiltred.length === 0) {
            setMessage(MOVIES_NOT_FOUND);
        }
        localStorage.setItem('searchParams', JSON.stringify({text, isShorts, moviesFiltred}));
    }

    // переключает чекбокс, запускает процесс поиска фильма
    function checkboxHandler () {
        const {text} = searchParams;
        const isShorts = !searchParams.isShorts;
        setSearchParams({
            ...searchParams,
            isShorts
        })
        findMovies({isShorts, text});
    }

    // сохраняет текст из поля поиска
    function inputHandler (text) {
        setSearchParams({
            ...searchParams,
            text
        })
    }

    function submitHandler(setErrorMessage) {
        if (searchParams.text.length === 0) {
            setErrorMessage(SEARCH_TEXT_ERR)
        } else {
            findMovies(searchParams);
        }
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
                            <MoviesCardList cards={moviesFiltred.slice(0, currAmount)}/>
                            <button className={"movies__button" + (isHidden ? " movies__button_hidden" : "" )} type="button" onClick={onAddMore}>Еще</button>
                            <p>{message}</p>
                        </>
            }


        </main>
    );
}

export default Movies;