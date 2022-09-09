import {Link} from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import Form from "../Form/Form.jsx";

function Register() {
    return (
        <section className="auth">
            <Logo/>
            <h1 className="title title-page">Добро пожаловать!</h1>
            <Form/>
            <p className="auth__text">Уже зарегистрированы?
                <Link className="auth__text auth__text_color link" href="#">Войти</Link>
            </p>
            {/*<Link to="/sign-in" className="auth-form__text"> Войти</Link>*/}
        </section>
    );
}

export default Register;