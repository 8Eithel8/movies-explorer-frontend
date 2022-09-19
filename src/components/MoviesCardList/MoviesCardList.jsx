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
                    //TODO разобраться с этими параметрами
                    like={ card.like }
                    isSaved={props.isSaved}
                />
            ))}
        </div>
    );
}

export default MoviesCardList;