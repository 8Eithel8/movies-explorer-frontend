import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import './MoviesCardList.css'

function MoviesCardList(props) {

    return (
        <div className="cards">
            {(props.cards || []).map((card, i) => (
                <MoviesCard
                    key={i}
                    image={ card.image }
                    duration={ card.duration }
                    title={ card.title }
                    like={ card.like }
                    isSaved={props.isSaved}
                />
            ))}
        </div>
    );
}

export default MoviesCardList;