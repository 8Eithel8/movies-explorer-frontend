import './Movies.css';
import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";

function Movies() {
    return (
        <section className="movies">
            <SearchForm/>
            <MoviesCardList/>
            <button className="movies__button" type="button">Еще</button>
        </section>
    );
}

export default Movies;