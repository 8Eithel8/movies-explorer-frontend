import {Link} from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import Form from "../Form/Form.jsx";

function Register() {
    return (
        <main className="auth">
            <Logo/>
            <h1 className="title title-page">Добро пожаловать!</h1>
            <Form/>
            <p className="auth__text">Уже зарегистрированы?
                <Link className="auth__text auth__text_color link" to='/signup'>Войти</Link>
            </p>
        </main>
    );
}

export default Register;