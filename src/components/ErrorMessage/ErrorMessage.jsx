import './ErrorMessage.css';
import React from "react";

function ErrorMessage(props) {
    const backHandler = () => props.history.goBack();

    return (
        <div className="popup">
            <div className="popup__container">
                <div>
                    <p className="popup__error-message">
                        <span className="popup__error-code">404</span>
                        Страница не найдена
                    </p>
                </div>
                <button className="popup__button link" onClick={backHandler}>Назад</button>
            </div>
        </div>
    );
}

export default ErrorMessage;