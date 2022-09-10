import './Profile.css';
import {Link} from "react-router-dom";
import React from "react";

function Profile() {
    return (
        <main className="profile">
            <h1 className="profile-title title-page">Привет, Анастасия!</h1>
            <form action="" className="profile-form">
                <div>
                    <fieldset className="profile-form__set">
                        <label className="profile-form__label  profile-text-field" htmlFor="name">
                            Имя
                        </label>
                        <input className="profile-form__field  profile-text-field" type="text" name="name" id="name"
                               defaultValue="Анастасия" required/>
                    </fieldset>
                    <fieldset className="profile-form__set">
                        <label className="profile-form__label  profile-text-field" htmlFor="email">
                            E-mail
                        </label>
                        <input className="profile-form__field  profile-text-field" type="text" name="email" id="email"
                               defaultValue="pochta@ya.ru" required/>
                    </fieldset>
                </div>
                <div className="profile-form__buttons">
                    <button className="profile-form__button profile-form__button_edit" type="submit"
                            aria-label="Редактировать">Редактировать
                    </button>
                    <Link className="profile-form__button profile-form__button_logout" type="button"
                            aria-label="Выйти из аккаунта" to="/signin">Выйти из аккаунта
                    </Link>
                </div>
            </form>
        </main>
    );
}

export default Profile;