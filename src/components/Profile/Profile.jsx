import './Profile.css';
import React from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";
import {useFormWithValidation} from "../../utils/FormValidator.js";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const { values, setValues, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    const [isFieldDisabled, setIsFieldDisabled] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [isError, setIsError] = React.useState(false);
    const [isSame, setIsSame] = React.useState(true);

    React.useEffect(() => {
        setValues({
            name: currentUser.name,
            email: currentUser.email,
        })
    }, []);

    React.useEffect(() => setMessage(''), [values]);

    React.useEffect(() => {
        setIsSame(currentUser.name === values.name && currentUser.email === values.email)
    }, [currentUser, values]);

    const onSubmit = (evt) => {
        evt.preventDefault();
        props.onSubmit(values, setMessage, setIsError, setIsFieldDisabled)
    }

    return (
        <main className="profile">
            <h1 className="profile-title title-page">Привет, {currentUser.name}!</h1>
            <form action="" className="profile-form" onSubmit={ onSubmit }>
                <div>
                    <span className="profile__message profile__message_error">{ errors.name || '' }</span>
                    <fieldset className="profile-form__set">
                        <label className="profile-form__label  profile-text-field" htmlFor="name">
                            Имя
                        </label>
                        <input
                            className="profile-form__field  profile-text-field"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Имя"
                            value={values.name ?? ""}
                            required
                            minLength="2"
                            maxLength="30"
                            pattern="[A-Za-zА-Яа-яЁё\s-]+"
                            onChange={ handleChange }
                            disabled={isFieldDisabled}
                        />
                    </fieldset>
                    <fieldset className="profile-form__set">
                        <label className="profile-form__label  profile-text-field" htmlFor="email">
                            E-mail
                        </label>
                        <input
                            className="profile-form__field  profile-text-field"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                            value={values.email ?? ""}
                            required
                            minLength="2"
                            maxLength="30"
                            onChange={ handleChange }
                            disabled={isFieldDisabled}
                        />
                    </fieldset>
                    <span className="profile__message profile__message_error">{ errors.email || '' }</span>
                </div>
                <div className="profile-form__buttons">
                    {/*<p className="form__error name-error">{ errorSubmit || '' }</p>*/}
                    <p className={"profile__message" + (isError ? ' profile__message_error' : ' profile__message_success')}>{message || ''}</p>
                    <button
                            className="profile-form__button profile-form__button_edit"
                            type="submit"
                            aria-label="Редактировать"
                            disabled={ isFieldDisabled || isSame || !isValid }
                    >Редактировать
                    </button>
                    <button className="profile-form__button profile-form__button_logout" type="button"
                            aria-label="Выйти из аккаунта" onClick={props.onSignout}>Выйти из аккаунта
                    </button>
                </div>
            </form>
        </main>
    );
}

export default Profile;