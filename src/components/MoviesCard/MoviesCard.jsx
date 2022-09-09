import './MoviesCard.css'
function MoviesCard(props) {
    const buttonValue = props.isSaved ?
        {
            class: 'card__delete',
            label: 'Удалить'
        }
        :
        {
            class: 'card__like ' + (props.like ? 'card__like_checked' : ''),
            label: 'Нравится'
        };
    return (
        <article className="card">
            <img className="card__image" src={props.image} alt={props.title}/>
            <div className="card__footer">
                <div>
                    <h2 className="card__title">{props.title}</h2>
                    <span className="card__duration">{props.duration}</span>
                </div>
                <button className={buttonValue.class} type="button" aria-label={buttonValue.label}></button>
            </div>
        </article>
    );
}

export default MoviesCard;