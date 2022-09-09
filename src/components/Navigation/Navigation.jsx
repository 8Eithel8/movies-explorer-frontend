import './Navigation.css';
import {Link} from "react-router-dom";

function Navigation(props) {
    return (
        <div className="nav">
            {/*<div className="nav__menu">*/}
                <Link className="nav__link nav__button-signin text-btn link" onClick={props.onclick}>Регистрация</Link>
            {/*    <button className="nav__button text-btn" onClick={props.onclick}>Войти</button>*/}
            {/*</div>*/}
                <div className="nav__container">
                    <div className="nav__menu nav__menu_full">
                        <div className="nav__links">
                            <Link href='#' className="nav__link nav__link_hidden" onClick={props.onclick}>Главная</Link>
                            <Link href='#' className="nav__link" onClick={props.onclick}>Фильмы</Link>
                            <Link href='#' className="nav__link" onClick={props.onclick}>Сохранённые фильмы</Link>
                        </div>
                        <Link href='#' className="nav__link nav__link_profile text-btn link"
                           onClick={props.onclick}>Аккаунт</Link>
                    </div>
                </div>

        </div>
    );

}

export default Navigation;