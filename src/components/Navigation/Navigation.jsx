import './Navigation.css';
import {Link} from "react-router-dom";

function Navigation(props) {
    return (
        <div className="nav">
            {/*<div className="nav__menu">*/}
            {/*    <a className="nav__link nav__button-signin text-btn" onClick={props.onclick}>Регистрация</a>*/}
            {/*    <button className="nav__button text-btn" onClick={props.onclick}>Войти</button>*/}
            {/*</div>*/}
            <div className="nav__container">
                <div className="nav__menu nav__menu_full">
                    <div className="nav__links">
                        <Link href='#' className="nav__link nav__link_hidden" onClick={props.onclick}>Главная</Link>
                        <Link href='#' className="nav__link" onClick={props.onclick}>Фильмы</Link>
                        <Link href='#' className="nav__link" onClick={props.onclick}>Сохранённые фильмы</Link>
                    </div>
                    <a href='#' className="nav__link nav__link_profile text-btn"
                       onClick={props.onclick}>Аккаунт</a>
                </div>
                <input id="nav__toggle" type="checkbox"/>
                <label className="nav__button-burger" htmlFor="nav__toggle">
                    <span></span>
                </label>
            </div>
        </div>
    );

}

export default Navigation;