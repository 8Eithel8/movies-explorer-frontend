import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.jsx";
import React from "react";

function SearchForm(props) {
    const textRef = React.useRef();

    const onSubmit = (evt) => {
        evt.preventDefault();
        props.onSubmit(textRef.current.value.trim());
    }

    return (
        <section className="search">
            <div className="search__container">
                <form className="search__form" name="films-search" onSubmit={ onSubmit }>
                    <label htmlFor="checkbox" className="search__field-label">
                        <span className="search__icon"></span>
                        <input
                            className="search__field"
                            ref={ textRef }
                            type="text"
                            placeholder="Фильм"
                        />
                    </label>
                    <button type="submit" className="search__button link"></button>
                </form>
                <FilterCheckbox checked={props.isShorts} changeHandler={props.changeHandler}/>
            </div>
        </section>
    );
}

export default SearchForm;