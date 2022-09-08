import './Form.css';
import {Link} from "react-router-dom";

function Form() {
    return (
        <form action="" className="auth__form" name="auth-form">
            <div className="auth__container">
                <label className="auth__label" htmlFor="name">
                    Имя
                    <input className="auth__field" type="text" name="name" id="name" value="Анастасия"
                           required/>
                    {/*<span class="auth-form__error name-error">Что-то пошло не так...</span>*/}
                </label>
                <label className="auth__label" htmlFor="email">
                    E-mail
                    <input className="auth__field" type="email" name="email" id="email"
                           value="pochta@ya.ru" required/>
                    {/*<span class="auth-form__error name-error">Что-то пошло не так...</span>*/}
                </label>
                <label className="auth__label" htmlFor="pass">
                    Пароль
                    <input className="auth__field error" type="password" name="email" id="pass"
                           value="pochta@ya.ru" required/>
                    <span className="auth__error name-error">Что-то пошло не так...</span>
                </label>
            </div>
            <button className="auth__button" type="submit"
                    aria-label="Редактировать">Зарегистрироваться
            </button>
        </form>
    );
}

export default Form;