import React from "react";
import ImagemLegal from "../../assets/imagemLegal.png";
import Eu from "../../assets/Minha_foto.png";
import fundoFoto from "../../assets/fundoDaFoto.png";

function Home ()  {
    return (
        <div className="Section">
            <div className="Contant">
            <h1 className="titulo"><strong>&lt;h1&gt;</strong> Olá mundo! <strong>&lt;h1&gt;</strong></h1>
            <h1 className="titulo">
                Bem vindo ao meu portfólio! Sou desenvolvedor web.
            </h1>
            </div>
            <div className="overlay">
            <img src={fundoFoto} alt="'-'" className="FundoFoto"/>
            <img src={Eu} alt="Uma foto minha" className="Eu" />
            </div>
            <img src={ImagemLegal} alt="Uma pessoa no computador" className="imagemLegal" />
            {/* <div className="ContantButtons">
                <button formTarget="blank" className="gitHub">Github</button>
                <button formTarget="blank" className="treinee">Treinee</button>
                <button formTarget="blank" className="linkedin">Linkedin</button>
                <button formTarget="blank" className="freelancer">Freelancer</button>
            </div> */}
        </div>

    );
};

export default Home;