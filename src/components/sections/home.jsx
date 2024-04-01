import { React } from "react";
import ImagemLegal from "../../assets/imagemLegal.png";
import FotoComFundo from "../../assets/FotoComFundo.png";
import FitaContato from "../../assets/fita_contato.png";

function Home() {
    return (
        <div className="Section" id="Home">
            <div className="animate">
                <h1 className="titulo">
                    Bem vindo ao meu portfólio! Sou desenvolvedor web.
                </h1>
            </div>
            <img src={FotoComFundo} alt="'-'" className="FotoComFundo" />
            <img src={ImagemLegal} alt="Uma pessoa no computador." className="imagemLegal" />
            <a href="#Contato">
                <img src={FitaContato} alt="Botão para contato." className="FitaContato" />
            </a>
        </div>

    );
};

export default Home;