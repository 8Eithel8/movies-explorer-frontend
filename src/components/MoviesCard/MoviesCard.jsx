import './MoviesCard.css';
import React from "react";
import {durationToHours, findMovieById} from "../../utils/moviesHelpers.js";

function MoviesCard(props) {
    const {image, duration, nameRU, trailerLink, movieId} = props.data;

    const [isLiked, setIsLiked] = React.useState(false);

    const  findInSaved = () => findMovieById(props.savedMovies, movieId)

    React.useEffect(() => {
        if (findInSaved()) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }
    }, [props.savedMovies]);

    const handleClick = (evt) => {
        evt.preventDefault();
        isLiked ? props.handleRemoveMovie(findInSaved()) : props.handleAddMovie(props.data);
    }

    const buttonValue = props.isSaved ?
        {
            class: 'card__delete',
            label: 'Удалить'
        }
        :
        {
            class: 'card__like ' + (isLiked ? 'card__like_checked' : ''),
            label: 'Нравится'
        };
    return (
        <a className="card" href={trailerLink} target='_blank'>
            <article>
                <img className="card__image" src={image} alt={nameRU}/>
                <div className="card__footer">
                    <div>
                        <h2 className="card__title">{nameRU}</h2>
                        <span className="card__duration">{durationToHours(duration)}</span>
                    </div>
                    <button className={buttonValue.class} type="button" aria-label={buttonValue.label} onClick={handleClick}></button>
                </div>
            </article>
        </a>
    );
}

export default MoviesCard;