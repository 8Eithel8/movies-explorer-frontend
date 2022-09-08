import './Navigation.css';

function Navigation(props) {
    return (
        <>
            {/*<div className="header__menu">*/}
            {/*    <a className="header__link header__button-signin text-btn" onClick={props.onclick}>Регистрация</a>*/}
            {/*    <button className="header__button text-btn" onClick={props.onclick}>Войти</button>*/}
            {/*</div>*/}
            {/*<div className="header__menu header__menu_movie">*/}
            {/*    <div className="header__nav">*/}
            {/*    <a href='#' className="header__link link" onClick={props.onclick}>Фильмы</a>*/}
            {/*    <a href='#' className="header__link link" onClick={props.onclick}>Сохранённые фильмы</a>*/}
            {/*    </div>*/}
            {/*    <a href='#' className="header__link link header__link_profile text-btn"*/}
            {/*       onClick={props.onclick}>Аккаунт</a>*/}
            {/*</div>*/}
            <input id="header__toggle" type="checkbox"/>
            <label className="header__button-burger" htmlFor="header__toggle">
                <span></span>
            </label>
        </>
    );

}

export default Navigation;