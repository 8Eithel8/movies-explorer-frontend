import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className="filter-group">
            <input type="checkbox"  className="filter-group__checkbox" id="checkbox"/>
            <label htmlFor="checkbox" className="filter-group__checkbox-label"></label>
            <span className="filter-group__text">Короткометражки</span>
        </div>
    );
}

export default FilterCheckbox;