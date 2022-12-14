import Promo from '../Promo/Promo.jsx';
import AboutProject from "../AboutProject/AboutProject.jsx";
import Techs from "../Techs/Techs.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import React from "react";

function Main() {
    return (
        <main>
            <Promo/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
        </main>
    );
}

export default Main;