import './MoviesCard.css';
import React from "react";
import {findMovieById} from "../../utils/moviesHelpers.js";

function MoviesCardLike (props) {
    const [isLiked, setIsLiked] = React.useState(false);

    React.useEffect(() => {
        if (findMovieById(props.savedMovies, props.data.movieId)) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }
    }, [props.savedMovies]);

    const handleClick = (evt) => {
        evt.preventDefault();
        props.handleClick(props.data, isLiked)
    }

    return (
        <button
            className={'card__button card__button_like ' + (isLiked ? 'card__button_checked' : '')}
            type="button"
            aria-label="Нравится"
            onClick={handleClick}>
        </button>
    );
}

export default MoviesCardLike;