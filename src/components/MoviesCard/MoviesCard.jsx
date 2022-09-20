import './MoviesCard.css';
import React from "react";
import {durationToHours, findMovieById} from "../../utils/moviesHelpers.js";
import MoviesCardLike from "./MoviesCardLike.jsx";
import MoviesCardDelete from "./MoviesCardDelete.jsx";

function MoviesCard(props) {
    const {image, duration, nameRU, trailerLink, movieId} = props.data;

    // const buttonValue = props.isSaved ?
    //     {
    //         class: 'card__delete',
    //         label: 'Удалить'
    //     }
    //     :
    //     {
    //         class: 'card__like ' + (isLiked ? 'card__like_checked' : ''),
    //         label: 'Нравится'
    //     };
    return (
        <a className="card" href={trailerLink} target='_blank'>
            <article>
                <img className="card__image" src={image} alt={nameRU}/>
                <div className="card__footer">
                    <div>
                        <h2 className="card__title">{nameRU}</h2>
                        <span className="card__duration">{durationToHours(duration)}</span>
                    </div>
                    {
                        props.isSaved
                            ? <MoviesCardDelete
                                handleClick={props.handleClick}
                                data={props.data}
                            />
                            : <MoviesCardLike
                                data={props.data}
                                savedMovies={props.savedMovies}
                                handleClick={props.handleClick}
                            />
                    }

                </div>
            </article>
        </a>
    );
}

export default MoviesCard;