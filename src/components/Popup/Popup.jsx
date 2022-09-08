import './Popup.css';
import {Link} from "react-router-dom";

function Popup() {
    return (
        <div className="popup">
            <div className="popup__container">
                <div>
                    <p className="popup__error-message">
                        <span className="popup__error-code">404</span>
                        Страница не найдена
                    </p>
                </div>
                <Link className="popup__button">Назад</Link>
            </div>
        </div>
    );
}

export default Popup;