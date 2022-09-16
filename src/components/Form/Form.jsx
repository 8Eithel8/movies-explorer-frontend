import './Form.css';
import {Link} from "react-router-dom";
import React from "react";
import {useFormWithValidation} from "../../utils/FormValidator.js";

function Form(props) {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const [errorSubmit, setErrorSubmit] = React.useState('');
    const [isFieldDisabled, setIsFieldDisabled] = React.useState(false);

    React.useEffect(() => setErrorSubmit(''), [values]);

    const onSubmit = (evt) => {
        evt.preventDefault();
        props.onSubmit(values, setErrorSubmit, setIsFieldDisabled)
    }

    return (
        <form className="form" name="form-auth" onSubmit={ onSubmit }>
            <div className="form__container">
                {props.isShowFieldName &&
                    <label className="form__label" htmlFor="name">
                        Имя
                        <input
                            disabled={ isFieldDisabled }
                            className="form__field"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Имя"
                            required
                            minLength="2"
                            maxLength="30"
                            pattern="[A-Za-zА-Яа-яЁё\s-]+"
                            onChange={ handleChange }
                        />
                        <span className="form__error name-error">{ errors.name || '' }</span>
                    </label>
                }
                <label className="form__label" htmlFor="email">
                    E-mail
                    <input
                        disabled={isFieldDisabled}
                        className="form__field"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        required
                        minLength="2"
                        maxLength="30"
                        onChange={ handleChange }
                    />
                    <span className="form__error name-error">{ errors.email || '' }</span>
                </label>
                <label className="form__label" htmlFor="password">
                    Пароль
                    <input
                        disabled={isFieldDisabled}
                        className="form__field"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Ваш пароль"
                        required
                        minLength="8"
                        maxLength="30"
                        onChange={ handleChange }
                    />
                    <span className="form__error name-error">{ errors.password || '' }</span>
                </label>
            </div>
            <div>
                <p className="form__error name-error">{ errorSubmit || '' }</p>
                <button
                    className="form__button"
                    type="submit"
                    aria-label="Редактировать"
                    disabled={ isFieldDisabled || !isValid }
                >
                    { props.buttonText }
                </button>
                <p className="form__text">{ props.questionText }
                    <Link className="form__text form__text_color link"  to={ props.linkPath }>{ props.linkText }</Link>
                </p>
            </div>
        </form>
    );
}

export default Form;