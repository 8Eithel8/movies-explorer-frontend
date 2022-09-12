import Logo from "../Logo/Logo.jsx";
import Form from "../Form/Form.jsx";
import React from "react";

function Login(props) {
    return (
        <main className="auth">
            <Logo/>
            <h1 className="title title-page">Рады видеть!</h1>
            <Form
                onSubmit={props.onSubmit}
                buttonText='Войти'
                questionText='Ещё не зарегистрированы?'
                linkText='Регистрация'
                linkPath='/signup'
            />
        </main>
    );
}

export default Login;