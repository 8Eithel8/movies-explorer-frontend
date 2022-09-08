import logo from "../../images/logo.svg";
import './Logo.css';


function Logo() {
    return (
           <img className="logo logo_form" src={logo} alt="Логотип"/>
    );
}

export default Logo;