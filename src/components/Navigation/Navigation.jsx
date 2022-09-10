import './Navigation.css';
import {Link} from "react-router-dom";
import React from "react";

function Navigation(props) {
      return (
          <nav className="nav">
              <div className="nav__container">
                  <div className="nav__menu">
                      <div className="nav__links">
                          <Link to='/' className="nav__link nav__link_hidden">Главная</Link>
                          <Link to='/movies' className="nav__link">Фильмы</Link>
                          <Link to='/saved-movies' className="nav__link">Сохранённые фильмы</Link>
                      </div>
                      <Link to='/profile' className="nav__link nav__link_profile text-btn link">Аккаунт</Link>
                  </div>
              </div>
          </nav>
    );

}

export default Navigation;