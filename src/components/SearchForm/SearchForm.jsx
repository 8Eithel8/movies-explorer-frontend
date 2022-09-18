import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.jsx";
import React from "react";

function SearchForm(props) {

    const [errorMessage, setErrorMessage] = React.useState('');

    const onSubmit = (evt) => {
        evt.preventDefault();
        props.onSubmit(setErrorMessage);
    }

    const inputHandler = (evt) => {
        props.inputHandler(evt.target.value);
        setErrorMessage('');
    }

    return (
        <section className="search">
            <p className="search__error">{errorMessage}</p>
            <div className="search__container">
                <form className="search__form" name="films-search" onSubmit={ onSubmit }>
                    <label htmlFor="checkbox" className="search__field-label">
                        <span className="search__icon"></span>
                        <input
                            className="search__field"
                            value={props.params.text}
                            onChange={inputHandler}
                            type="text"
                            placeholder="Фильм"
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