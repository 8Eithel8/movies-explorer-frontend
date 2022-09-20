import './MoviesCard.css';
import React from "react";

function MoviesCardDelete (props) {

     const handleClick = (evt) => {
        evt.preventDefault();
        props.handleClick(props.data)
    }

    return (
        <button
            className="card__button card__button_delete"
            type="button"
            aria-label="Удалить"
            onClick={handleClick}>
        </button>
    );
}

export default MoviesCardDelete;