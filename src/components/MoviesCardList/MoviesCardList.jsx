import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import './MoviesCardList.css';
import React from "react";
import {MOVIES_URL} from "../../utils/MoviesApi.js";

function MoviesCardList(props) {

    function durationToHours (duration) {
        return  (Math.floor(duration / 60) + 'ч') + (duration % 60 + 'м');
    }

    return (
        <div className="cards">
            {(props.cards || []).map((card, i) => (
                <MoviesCard
                    key={card.movieId}
                    image={ MOVIES_URL + card.image }
                    duration={ durationToHours(card.duration) }
                    title={ card.nameRU }
                    //TODO разобраться с этими параметрами
                    like={ card.like }
                    isSaved={props.isSaved}
                />
            ))}
        </div>
    );
}

export default MoviesCardList;