import React from "react";
import './Header.css';
import Navigation from "../Navigation/Navigation.jsx";
import Logo from "../Logo/Logo.jsx";
import {Link} from "react-router-dom";

// import {Link, Route, Switch} from "react-router-dom";

function Header(props) {
    return (
        <header className="header">
            <Logo/>
            <input id="header__toggle" type="checkbox"/>
            <label className="header__button-burger" htmlFor="header__toggle">
                <span></span>
            </label>
            <Navigation/>
        </header>
    );

}

export default Header;