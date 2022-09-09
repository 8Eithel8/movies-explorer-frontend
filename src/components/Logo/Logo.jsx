import logo from "../../images/logo.svg";
import './Logo.css';
import {Link} from "react-router-dom";
import React from "react";

function Logo() {
    return (
        <Link to='/' className="link">
            <img className="logo logo_form" src={logo} alt="Логотип"/>
        </Link>
    );
}

export default Logo;