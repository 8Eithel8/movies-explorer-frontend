import './Profile.css';
import React from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";
import {useFormWithValidation} from "../../utils/FormValidator.js";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const { values, setValues, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    React.useEffect(() => {
        setValues({
            name: currentUser.name,
            email: currentUser.email,
        })
    }, [currentUser]);

    return (
        <main className="profile">
            <h1 className="profile-title title-page">Привет, {currentUser.name}!</h1>
            <form action="" className="profile-form">
                <div>
                    <span className="profile__error">{ errors.name || '' }</span>
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
                            maxLength="40"
                            pattern="[A-Za-zА-Яа-яЁё\s-]+"
                            onChange={ handleChange }
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
                            maxLength="40"
                            onChange={ handleChange }
                        />
                    </fieldset>
                    <span className="profile__error">{ errors.email || '' }</span>
                </div>
                <div className="profile-form__buttons">
                    {/*<p className="form__error name-error">{ errorSubmit || '' }</p>*/}
                    <p className="profile__error profile__success">Успешно!</p>
                    <button className="profile-form__button profile-form__button_edit" type="submit"
                            aria-label="Редактировать">Редактировать
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