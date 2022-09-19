import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import './MoviesCardList.css';
import React from "react";

function MoviesCardList(props) {
    return (
        <div className="cards">
            {(props.cards || []).map((card, i) => (
                <MoviesCard
                    key={card.movieId}
                    data = {card}
                    handleAddMovie={props.handleAddMovie}
                    handleRemoveMovie={props.handleRemoveMovie}
                    //TODO разобраться с этими параметрами
                    like={ card.like }
                    isSaved={props.isSaved}
                    savedMovies={props.savedMovies}
                />
            ))}
        </div>
    );
}

export default MoviesCardList;