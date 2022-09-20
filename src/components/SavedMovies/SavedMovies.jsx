import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import React from "react";
import {findMovieById} from "../../utils/moviesHelpers.js";

function SavedMovies(props) {
    //добавляет/удаляет из избранного фильм при нажатии на кнопку
    const handleClick = (data) => props.handleRemoveMovie(findMovieById(props.savedMovies, data.movieId))

    return (
        <main className="movies">
            {/*<SearchForm/>*/}
            <MoviesCardList
                isSaved={true}
                cards={props.savedMovies}
                handleClick={handleClick}
            />
        </main>
    );
}

export default SavedMovies;