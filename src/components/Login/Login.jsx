import Logo from "../Logo/Logo.jsx";
import Form from "../Form/Form.jsx";

function Login() {
    return (
        <main className="auth">
            <Logo/>
            <h1 className="title title-page">Рады видеть!</h1>
            <Form
                buttonText='Войти'
                questionText='Ещё не зарегистрированы?'
                linkText='Регистрация'
                linkPath='/signup'
            />
        </main>
    );
}

export default Login;