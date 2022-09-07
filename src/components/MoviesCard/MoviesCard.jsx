import './MoviesCard.css'

function MoviesCard() {
    return (
        <article className="card">
            <img className="card__image" src="../../images/pic__COLOR_pic.jpg" alt=""/>
                <div className="card__footer">
                    <div>
                        <h2 className="card__title">33 слова о дизайне</h2>
                        <span className="card__text">1ч42м</span>
                    </div>
                    <button className="card__like" type="button" aria-label="Нравится"></button>
                    <button className="card__delete" type="button" aria-label="Удалить"></button>
                </div>
        </article>
    );
}

export default MoviesCard;