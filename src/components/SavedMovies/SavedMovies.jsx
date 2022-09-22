import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import React from "react";
import {filterByDuration, filterByText, findMovieById, saveSearchParams} from "../../utils/moviesHelpers.js";
import {MOVIES_NOT_FOUND} from "../../utils/constants.js";

function SavedMovies(props) {
    const [moviesFound, setMoviesFound] = React.useState(props.savedMovies);
    const [moviesFiltered, setMoviesFiltered] = React.useState(props.savedMovies);

    const [isShorts, setIsShorts] = React.useState(false);
    const [text, setText] = React.useState('');

    React.useEffect(() => findMovies(), [props.savedMovies]);
    React.useEffect(() => setMoviesFiltered(filterByDuration(moviesFound, isShorts)), [moviesFound, isShorts, props.savedMovies])

    const findMovies = () => setMoviesFound(filterByText(props.savedMovies, text));
    const handleCheckbox = () => setIsShorts(!isShorts);

    //добавляет/удаляет из избранного фильм при нажатии на кнопку
    const handleClick = (data) => props.handleRemoveMovie(findMovieById(props.savedMovies, data.movieId))

    return (
        <main className="movies">
            <SearchForm
                text={text}
                isShorts={isShorts}
                checkboxHandler={handleCheckbox}
                inputHandler={setText}
                onSubmit={findMovies}
            />
            <MoviesCardList
                isSaved={true}
                cards={moviesFiltered}
                handleClick={handleClick}
            />
            {
                moviesFiltered.length === 0 && <p>{MOVIES_NOT_FOUND}</p>
            }
        </main>
    );
}

export default SavedMovies;