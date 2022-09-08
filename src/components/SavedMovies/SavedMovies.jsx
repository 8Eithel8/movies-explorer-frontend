import './SavedMovies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";

function SavedMovies() {
    return (
        <section className="movies">
            <SearchForm/>
            <MoviesCardList/>
        </section>
    );
}

export default SavedMovies;