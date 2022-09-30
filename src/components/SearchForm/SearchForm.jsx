import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.jsx";
import React from "react";

function SearchForm({text, isShorts, onSubmit, inputHandler, checkboxHandler, isDisabled}) {

    const [errorMessage, setErrorMessage] = React.useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit(setErrorMessage);
    }

    const handleText = (evt) => {
        inputHandler(evt.target.value);
        setErrorMessage('');
    }

    return (
        <section className="search">
            <p className="search__error">{errorMessage}</p>
            <div className="search__container">
                <form className="search__form"  name="films-search" onSubmit={ handleSubmit }>
                    <label htmlFor="checkbox" className="search__field-label">
                        <span className="search__icon"></span>
                        <input
                            disabled={isDisabled}
                            className="search__field"
                            value={text}
                            onChange={handleText}
                            type="text"
                            placeholder="Фильм"
                        />
                    </label>
                    <button type="submit" className="search__button link" disabled={isDisabled}></button>
                </form>
                <FilterCheckbox checked={isShorts} changeHandler={checkboxHandler} isDisabled={isDisabled}/>
            </div>
        </section>
    );
}

export default SearchForm;