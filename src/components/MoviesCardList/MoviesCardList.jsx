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
                    isSaved={props.isSaved}
                    savedMovies={props.savedMovies}
                    handleClick={props.handleClick}
                />
            ))}
        </div>
    );
}

export default MoviesCardList;