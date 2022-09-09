import './SavedMovies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";

function SavedMovies() {
    return (
        <main className="movies">
            <SearchForm/>
            <MoviesCardList/>
        </main>
    );
}

export default SavedMovies;