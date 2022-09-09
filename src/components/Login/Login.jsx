import {Link} from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import Form from "../Form/Form.jsx";

function Login() {
    return (
        <main className="auth">
            <Logo/>
            <h1 className="title title-page">Рады видеть!</h1>
            <Form/>
            <p className="auth__text">Ещё не зарегистрированы?
                <Link className="auth__text auth__text_color link" href="#">Регистрация</Link>
            </p>

            {/*<Link to="/sign-in" className="auth-form__text link"> Войти</Link>*/}
        </main>
    );
}

export default Login;