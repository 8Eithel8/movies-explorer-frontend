import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox(props) {
    return (
        <div className="filter-group">
            <input
                type="checkbox"
                checked={props.checked}
                onChange={props.changeHandler}
                className="filter-group__checkbox"
                id="checkbox"
            />
            <label htmlFor="checkbox" className="filter-group__checkbox-label"></label>
            <span className="filter-group__background"></span>
            <span className="filter-group__text">Короткометражки</span>
        </div>
    );
}

export default FilterCheckbox;