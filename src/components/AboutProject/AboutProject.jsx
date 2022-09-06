import React from "react";
import './AboutProject.css';

function AboutProject() {
    return (
        <section className="project" id="project">
            <h2 className="section-title">О проекте</h2>
            <ul className="project__brief">
                <li>
                    <h3 className="project__title">Дипломный проект включал 5 этапов</h3>
                    <p className="project__text">Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.</p>
                </li>
                <li>
                    <h3 className="project__title">На выполнение диплома ушло 5 недель</h3>
                    <p className="project__text">У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className="project__info-track">
                <p className="project__info-line project__info-line_color">1 неделя</p>
                <p className="project__info-line">4 недели</p>
                <p className="project__info-text">Back-end</p>
                <p className="project__info-text">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;