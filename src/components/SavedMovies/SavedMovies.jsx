import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import {cards} from "../../utils/cards";
import React from "react";

function SavedMovies() {
    return (
        <main className="movies">
            <SearchForm/>
            <MoviesCardList
                isSaved={true}
                cards={cards.filter(card => card.like)}
            />
        </main>
    );
}

export default SavedMovies;