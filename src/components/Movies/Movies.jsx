import './Movies.css';
import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import React from "react";

function Movies() {
    return (
        <main className="movies">
            <SearchForm/>
            <MoviesCardList/>
            <button className="movies__button" type="button">Еще</button>
        </main>
    );
}

export default Movies;