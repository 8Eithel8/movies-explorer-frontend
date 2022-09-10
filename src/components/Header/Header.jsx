import React from "react";
import './Header.css';
import Navigation from "../Navigation/Navigation.jsx";
import Logo from "../Logo/Logo.jsx";
import {Link} from "react-router-dom";

function Header(props) {

    const menu = props.isLoggedIn ?
        <div className="header__menu header__menu_nav">
            <input id="header__toggle" type="checkbox"/>
            <label className="header__button-burger" htmlFor="header__toggle">
                <span></span>
            </label>
            <Navigation/>
        </div>
        :
        <div className="header__menu">
            <Link to="/signup" className="header__button-signup text-btn link">Регистрация</Link>
            <Link to="/signin" className="header__button text-btn link">Войти</Link>
        </div>

    return (
        <header className="header">
            <Logo/>
            { menu }
        </header>
    );
}

export default Header;