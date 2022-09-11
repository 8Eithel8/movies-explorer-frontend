import './Form.css';
import {Link} from "react-router-dom";

function Form(props) {
    return (
        <form className="form" name="form-auth">
            <div className="form__container">
                {props.isShowFieldName &&
                    <label className="form__label" htmlFor="name">
                        Имя
                        <input
                            className="form__field"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Имя"
                            required
                            minLength="2"
                            maxLength="40"
                        />
                    </label>
                }
                <label className="form__label" htmlFor="email">
                    E-mail
                    <input
                        className="form__field"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        required
                        minLength="2"
                        maxLength="40"
                    />
                </label>
                <label className="form__label" htmlFor="pass">
                    Пароль
                    <input
                        className="form__field error"
                        type="password"
                        name="pass"
                        id="pass"
                        placeholder="Ваш пароль"
                        required
                        minLength="2"
                        maxLength="40"
                    />
                    <span className="form__error name-error">Что-то пошло не так...</span>
                </label>
            </div>
            <div>
                <button className="form__button" type="submit"
                        aria-label="Редактировать">{props.buttonText}
                </button>
                <p className="form__text">{props.questionText}
                    <Link className="form__text form__text_color link"  to={props.linkPath}>{props.linkText}</Link>
                </p>
            </div>
        </form>
    );
}

export default Form;