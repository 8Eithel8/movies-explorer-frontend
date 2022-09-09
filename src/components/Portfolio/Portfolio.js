import './Portfolio.css';
import arrow from "../../images/arrow-link.svg";
import {Link} from "react-router-dom";
// TODO Ховер на линки
function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio-title">Портфолио</h4>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <Link href="https://8eithel8.github.io/how-to-learn/" className="portfolio__link-item link" target="_blank">
                        <p className="portfolio__link-text">Статичный сайт</p>
                        <img src={arrow} alt="стрелка" className="portfolio__link-icon link"/>
                    </Link>
                </li>
                <li className="portfolio__item">
                    <Link href="https://8eithel8.github.io/russian-travel/" className="portfolio__link-item link" target="_blank">
                        <p className="portfolio__link-text">Адаптивный сайт</p>
                        <img src={arrow} alt="стрелка" className="portfolio__link-icon link"/>
                    </Link>
                </li>
                <li className="portfolio__item">
                    <Link href="https://8eithel8.github.io/mesto/" className="portfolio__link-item link" target="_blank">
                        <p className="portfolio__link-text">Одностраничное приложение</p>
                        <img src={arrow} alt="стрелка" className="portfolio__link-icon link"/>
                    </Link>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;