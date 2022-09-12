import './Form.css';
import {Link, useHistory} from "react-router-dom";
import React from "react";
import {register} from "../../utils/MainApi.js";

function Form(props) {
    //обявление состояние полей формы
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    //отслеживает изменение поля и обновляет состояние формы
    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
    };
    const history = useHistory()

    // регистрация пользователя
    function onSignUp(userData){
        register(userData).then((res) => {
            // setInfoToolImage(iconReg);
            console.log('Вы успешно зарегистрировались!');
            // setInfoToolMessage('Вы успешно зарегистрировались!');
            // setIsInfoToolTipOpen(true);
            history.push('/signin');
        }).catch(() => {
            // setInfoToolImage(iconErr);
            console.log('Что-то пошло не так! Попробуйте ещё раз.');
            // setInfoToolMessage('Что-то пошло не так! Попробуйте ещё раз.');
            // setIsInfoToolTipOpen(true);
        });
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        onSignUp(values);
    }

    return (
        <form className="form" name="form-auth" onSubmit={onSubmit}>
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
                            pattern="[A-Za-zА-Яа-яЁё\s-]+"
                            onChange={handleChange}
                        />
                        <span className="form__error name-error">{errors.name || ''}</span>
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
                        onChange={handleChange}
                    />
                    <span className="form__error name-error">{errors.email || ''}</span>
                </label>
                <label className="form__label" htmlFor="password">
                    Пароль
                    <input
                        className="form__field"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Ваш пароль"
                        required
                        minLength="8"
                        maxLength="40"
                        onChange={handleChange}
                    />
                    <span className="form__error name-error">{errors.password || ''}</span>
                </label>
            </div>
            <div>
                <button
                    className="form__button"
                    type="submit"
                    aria-label="Редактировать"
                    disabled={!isValid}
                >
                    {props.buttonText}
                </button>
                <p className="form__text">{props.questionText}
                    <Link className="form__text form__text_color link"  to={props.linkPath}>{props.linkText}</Link>
                </p>
            </div>
        </form>
    );
}

export default Form;