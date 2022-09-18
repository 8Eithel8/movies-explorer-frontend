import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.jsx";
import React from "react";

function SearchForm(props) {

    const onSubmit = (evt) => {
        evt.preventDefault();
        props.onSubmit();
    }

    return (
        <section className="search">
            <div className="search__container">
                <form className="search__form" name="films-search" onSubmit={ onSubmit }>
                    <label htmlFor="checkbox" className="search__field-label">
                        <span className="search__icon"></span>
                        <input
                            className="search__field"
                            value={props.params.text}
                            onChange={props.inputHandler}
                            type="text"
                            placeholder="Фильм"
                            required
                        />
                    </label>
                    <button type="submit" className="search__button link"></button>
                </form>
                <FilterCheckbox checked={props.params.isShorts} changeHandler={props.checkboxHandler}/>
            </div>
        </section>
    );
}

export default SearchForm;