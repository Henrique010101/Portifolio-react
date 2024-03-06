import { React, li, Link } from "react";
import ImagemLegal from "../../assets/imagemLegal.png";
import FotoComFundo from "../../assets/FotoComFundo.png";
import SetaContato from "../../assets/SetaContato.png";

function Home ()  {
    return (
        <div className="Section">
            <h1 className="titulo">
                <strong>&lt;h1&gt;</strong> 
                  Olá mundo!
                <strong>&lt;h1&gt;</strong>
                <br />
                Bem vindo ao meu portfólio! Sou desenvolvedor web.
            </h1>
            <img src={FotoComFundo} alt="'-'" className="FotoComFundo"/>
            <img src={ImagemLegal} alt="Uma pessoa no computador." className="imagemLegal" />
            <a smooth to="#Section4">
            <img src={SetaContato} alt="Botão para contato." className="SetaContato" />
            </a>
        </div>

    );
};

export default Home;