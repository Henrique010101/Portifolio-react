import React from 'react';
import ImagemLegal from "../../assets/imagemLegal.png"
import Eu from "../../assets/Minha_foto.png";
import Ellipse from "../../assets/Ellipse1.png";

function Home ()  {
    return (
        <div className="Section">
            <div className="Contant">
            <h1 className="titulo"><strong>&lt;h1&gt;</strong> Olá mundo! <strong>&lt;h1&gt;</strong></h1>
            <h1 className="titulo">
                Bem vindo ao meu portfólio! Sou desenvolvedor web.
            </h1>
            </div>
            <img src={ImagemLegal} alt="Uma pessoa no computador" className="imagemLegal" />
            <div className="overlay">
            <img src={Ellipse} alt="'-'" className="Ellipse"/>
            <img src={Eu} alt="Uma foto minha" className="Eu" />
            </div>
            <div className="ContantButtons">
                <button className="gitHub">Github</button>
                <button className="treinee">Treinee</button>
                <button className="linkedin">Linkedin</button>
                <button className="freelancer">Freelancer</button>
            </div>
        </div>

    );
};

export default Home;