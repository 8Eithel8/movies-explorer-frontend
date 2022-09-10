import Logo from "../Logo/Logo.jsx";
import Form from "../Form/Form.jsx";
import React from "react";

function Register() {
    return (
        <main className="auth">
            <Logo/>
            <h1 className="title title-page">Добро пожаловать!</h1>
            <Form
                isShowFieldName={true}
                buttonText='Зарегистрироваться'
                questionText='Уже зарегистрированы?'
                linkText='Войти'
                linkPath='/signin'
            />
        </main>
    );
}

export default Register;