import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox({checked, changeHandler}) {
    return (
        <div className="filter-group">
            <input
                type="checkbox"
                checked={checked}
                onChange={changeHandler}
                className="filter-group__checkbox"
                id="checkbox"
                // disabled
            />
            <label htmlFor="checkbox" className="filter-group__checkbox-label"></label>
            <span className="filter-group__background"></span>
            <span className="filter-group__text">Короткометражки</span>
        </div>
    );
}

export default FilterCheckbox;