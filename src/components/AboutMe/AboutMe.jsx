import './AboutMe.css';
import photo from "../../images/DSC00305.jpg";
import {Link} from "react-router-dom";

function AboutMe() {
    return (
        <section className="info">
            <h2 className="section-title">Студент</h2>
            <div className="info__block">
                <div className="info__block-wrapper">
                    <h3 className="info__title">Анастасия</h3>
                    <p className="info__subtitle">Фронтенд-разработчик, 38 лет</p>
                    <p className="info__text">Я родилась и живу в городе Москва. Закончила Московский киновидео институт по специальности экономика и управление.
                        Очень интересна сфера IT и веб-разработка в частности.
                        Свободное время провожу на природе в обнимку с фотоаппаратом или за какой-нибудь
                        захватывающей экономической настольной игрй в компании друзей.
                    </p>
                    <a href="https://github.com/8Eithel8" className="info__link link" target='_blank'>Github</a>
                </div>
                <img className="info__photo" src={photo} alt="Фото Анастасии"/>
            </div>
        </section>
    );
}

export default AboutMe;