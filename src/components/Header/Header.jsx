import React from "react";
import './Header.css';
import Navigation from "../Navigation/Navigation.jsx";
import Logo from "../Logo/Logo.jsx";

// import {Link, Route, Switch} from "react-router-dom";

function Header(props) {
    return (
        <header className="header">
            <Logo/>
            <Navigation/>
        </header>
    );

}

export default Header;