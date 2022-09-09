import './Navigation.css';
import {Link} from "react-router-dom";

function Navigation(props) {
      return (
          <nav className="nav">
              <div className="nav__container">
                  <div className="nav__menu nav__menu_full">
                      <div className="nav__links">
                          <Link to='/' className="nav__link nav__link_hidden" onClick={props.onclick}>Главная</Link>
                          <Link to='/movies' className="nav__link" onClick={props.onclick}>Фильмы</Link>
                          <Link to='/saved-movies' className="nav__link" onClick={props.onclick}>Сохранённые фильмы</Link>
                      </div>
                      <Link to='/profile' className="nav__link nav__link_profile text-btn link" onClick={props.onclick}>Аккаунт</Link>
                  </div>
              </div>
          </nav>
    );

}

export default Navigation;