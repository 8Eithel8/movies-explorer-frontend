import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.jsx";
import React from "react";

function SearchForm({params, onSubmit, inputHandler, checkboxHandler, isDisabled}) {

    const [errorMessage, setErrorMessage] = React.useState('');

    const submitHandler = (evt) => {
        evt.preventDefault();
        onSubmit(setErrorMessage);
    }

    const textHandler = (evt) => {
        inputHandler(evt.target.value);
        setErrorMessage('');
    }

    return (
        <section className="search">
            <p className="search__error">{errorMessage}</p>
            <div className="search__container">
                <form className="search__form"  name="films-search" onSubmit={ submitHandler }>
                    <label htmlFor="checkbox" className="search__field-label">
                        <span className="search__icon"></span>
                        <input
                            disabled={isDisabled}
                            className="search__field"
                            value={params.text}
                            onChange={textHandler}
                            type="text"
                            placeholder="Фильм"
                        />
                    </label>
                    <button type="submit" className="search__button link" disabled={isDisabled}></button>
                </form>
                <FilterCheckbox checked={params.isShorts} changeHandler={checkboxHandler} isDisabled={isDisabled}/>
            </div>
        </section>
    );
}

export default SearchForm;