import './Movies.css';
import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import React from "react";
import {cards} from "../../utils/cards"
import {getMovies} from "../../utils/MoviesApi.js";
import {MOVIES_GRID, MOVIES_LS_KEY, SERVER_ERR_MSG} from "../../utils/constants.js";

function Movies() {
    const [message, setMessage] = React.useState('');
    const [movies, setMovies] = React.useState([]);
    const [initAmount, setInitAmount] = React.useState(0);
    const [addAmount, setAddAmount] = React.useState(0);
    const [currAmount, setCurrAmount] = React.useState(0);
    const [isHidden, setIsHidden] = React.useState(true);

    React.useEffect(() => setCurrAmount(initAmount), [initAmount])

    React.useEffect(() => setIsHidden(movies.length < currAmount), [movies, currAmount])

    const onAddMore = () => setCurrAmount(currAmount + addAmount);

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
        const {init, add} = getGridParams(window.innerWidth);
        if (init !== initAmount) {
            setInitAmount(init);
            setAddAmount(add);
        }
    }

    React.useEffect(() => {
        configGrid();
        window.addEventListener('resize', () => {
            setTimeout(() => {
                configGrid();
            }, 400);
        });
    }, []);

    React.useEffect(() => {
        let lsMovies = JSON.parse(localStorage.getItem(MOVIES_LS_KEY));
        if (!lsMovies) {
            getMovies()
                .then(data => {
                    const movies = data.map(movie => ({
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
                    localStorage.setItem(MOVIES_LS_KEY, JSON.stringify(movies));
                    setMovies(movies);
                }).catch(() => setMessage(SERVER_ERR_MSG))
        } else {
            setMovies(lsMovies);
        }
    }, []);
    return (
        <main className="movies">
            <SearchForm/>
            <MoviesCardList cards={movies.slice(0, currAmount)}/>
            <button className={"movies__button" + (isHidden ? " movies__button_hidden" : "" )} type="button" onClick={onAddMore}>Еще</button>
        </main>
    );
}

export default Movies;