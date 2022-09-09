import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__wrapper">
                <p className="footer__copyright">&copy; 2022</p>
                <ul className="footer__social">
                    <li><Link href="" className="footer__social-link link">Яндекс.Практикум</Link></li>
                    <li><Link href="" className="footer__social-link link">Github</Link></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;