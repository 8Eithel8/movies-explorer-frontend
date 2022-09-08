import {Link} from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import Form from "../Form/Form.jsx";

function Login() {
    return (
        <section className="auth">
            <Logo/>
            <h1 className="title title-page">Рады видеть!</h1>
            <Form/>
            <p className="auth__text">Ещё не зарегистрированы?
                <a className="auth__text auth__text_color" href="#">Регистрация</a>
            </p>

            {/*<Link to="/sign-in" className="auth-form__text"> Войти</Link>*/}
        </section>
    );
}

export default Login;