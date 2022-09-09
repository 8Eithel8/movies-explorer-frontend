import React from "react";
import './Header.css';
import Navigation from "../Navigation/Navigation.jsx";
import Logo from "../Logo/Logo.jsx";
import {Link} from "react-router-dom";

// import {Link, Route, Switch} from "react-router-dom";

function Header(props) {
    const authClass = (
        `header__menu ${props.isLoggedIn ? 'header__menu_hidden' : ''}`
    );

    const hidden = props.isLoggedIn ? '' : 'header__menu_hidden';

    return (
        <header className="header">
            <Logo/>
            <div className={authClass}>
                <Link className="header__link header__button-signup text-btn link" onClick={props.onclick}>Регистрация</Link>
                <button className="header__button text-btn" onClick={props.onclick}>Войти</button>
            </div>
            <div className={hidden}>
                <input id="header__toggle" type="checkbox"/>
                <label className="header__button-burger" htmlFor="header__toggle">
                    <span></span>
                </label>
                <Navigation/>
            </div>
        </header>
    );

}

export default Header;