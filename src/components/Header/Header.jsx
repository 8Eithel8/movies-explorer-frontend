import React from "react";
import './Header.css';
import logo from "../../images/logo.svg";
import {Link, Route, Switch} from "react-router-dom";

function Header(props) {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип"/>
                {/*<div className="header__menu">*/}
                {/*    <a className="header__link header__button-signin text-btn" onClick={props.onclick}>Регистрация</a>*/}
                {/*    <button className="header__button text-btn" onClick={props.onclick}>Войти</button>*/}
                {/*</div>*/}
                <div className="header__menu header__menu_movie">
                    <div className="header__nav">
                    <a href='#' className="header__link link" onClick={props.onclick}>Фильмы</a>
                    <a href='#' className="header__link link" onClick={props.onclick}>Сохранённые фильмы</a>
                    </div>
                    <a href='#' className="header__link link header__link_profile text-btn"
                       onClick={props.onclick}>Аккаунт</a>
                </div>
        </header>
    );

}

export default Header;