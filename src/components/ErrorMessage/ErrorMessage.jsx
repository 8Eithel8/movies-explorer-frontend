import './ErrorMessage.css';
import React from "react";
import {NOT_FOUND_ERR_CODE} from "../../utils/constants.js";

function ErrorMessage(props) {
    const handleBack = () => props.history.go(props.isLoggedIn ? -2 : -1);

    return (
        <div className="popup">
            <div className="popup__container">
                <div>
                    <p className="popup__error-message">
                        <span className="popup__error-code">{NOT_FOUND_ERR_CODE}</span>
                        Страница не найдена
                    </p>
                </div>
                <button className="popup__button link" onClick={handleBack}>Назад</button>
            </div>
        </div>
    );
}

export default ErrorMessage;