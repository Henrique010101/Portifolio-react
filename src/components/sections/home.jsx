import { React, li, Link } from "react";
import ImagemLegal from "../../assets/imagemLegal.png";
import FotoComFundo from "../../assets/FotoComFundo.png";
import FitaContato from "../../assets/fita_contato.png";

function Home ()  {
    return (
        <div className="Section" id="Section1">
            <h1 className="titulo">
                Bem vindo ao meu portfólio! Sou desenvolvedor web.
            </h1>
            <img src={FotoComFundo} alt="'-'" className="FotoComFundo"/>
            <img src={ImagemLegal} alt="Uma pessoa no computador." className="imagemLegal" />
            <a href="#Section4">
            <img src={FitaContato} alt="Botão para contato." className="SetaContato" />
            </a>
        </div>

    );
};

export default Home;