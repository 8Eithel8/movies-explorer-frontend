import React from "react";
import './Header.css';
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation.jsx";

// import {Link, Route, Switch} from "react-router-dom";

function Header(props) {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип"/>
            <Navigation/>
        </header>
    );

}

export default Header;