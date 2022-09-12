import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio-title">Портфолио</h4>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a href="https://8eithel8.github.io/how-to-learn/"
                       className="portfolio__link-item link"
                       target="_blank"
                       rel="noreferrer"
                    >
                        <p className="portfolio__link-text">Статичный сайт</p>
                        <div className="portfolio__link-icon link"></div>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a href="https://8eithel8.github.io/russian-travel/"
                       className="portfolio__link-item link"
                       target="_blank"
                       rel="noreferrer"
                    >
                        <p className="portfolio__link-text">Адаптивный сайт</p>
                        <div className="portfolio__link-icon link"></div>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a href="https://8eithel8.github.io/mesto/"
                       className="portfolio__link-item link"
                       target="_blank"
                       rel="noreferrer"
                    >
                        <p className="portfolio__link-text">Одностраничное приложение</p>
                        <div className="portfolio__link-icon link"></div>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;