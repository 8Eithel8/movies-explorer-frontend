import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__wrapper">
                <p className="footer__copyright">&copy; 2022</p>
                <ul className="footer__social">
                    <li><a href="https://practicum.yandex.ru" className="footer__social-link link" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
                    <li><a href="https://github.com/8Eithel8" className="footer__social-link link" target="_blank" rel="noreferrer">Github</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;

