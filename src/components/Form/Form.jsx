import './Form.css';
import {Link} from "react-router-dom";

function Form() {
    return (
        <form className="form" name="form-auth">
            <div className="form__container">
                <label className="form__label" htmlFor="name">
                    Имя
                    <input className="form__field" type="text" name="name" id="name" value="Анастасия"
                           required/>
                    {/*<span class="form__error name-error">Что-то пошло не так...</span>*/}
                </label>
                <label className="form__label" htmlFor="email">
                    E-mail
                    <input className="form__field" type="email" name="email" id="email"
                           value="pochta@ya.ru" required/>
                    {/*<span class="form__error name-error">Что-то пошло не так...</span>*/}
                </label>
                <label className="form__label" htmlFor="pass">
                    Пароль
                    <input className="form__field error" type="password" name="email" id="pass"
                           value="pochta@ya.ru" required/>
                    <span className="form__error name-error">Что-то пошло не так...</span>
                </label>
            </div>
            <button className="form__button" type="submit"
                    aria-label="Редактировать">Зарегистрироваться
            </button>
        </form>
    );
}

export default Form;