import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.jsx";


function SearchForm() {
    return (
        <section className="search">
            <div className="search__container">
                <form className="search__form" name="films-search">
                    <label htmlFor="checkbox" className="search__field-label">
                        <span className="search__icon"></span>
                        <input className="search__field" type="text" placeholder="Фильм" required/>
                    </label>
                    <button className="search__button link"></button>
                </form>
                <FilterCheckbox/>
            </div>
        </section>
    );
}

export default SearchForm;