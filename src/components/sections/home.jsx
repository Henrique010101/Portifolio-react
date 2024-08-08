import FotoComFundo from "../../assets/foto_editada_figma.png";
import FitaContato from "../../assets/fita_contato.png";

function Home() {

    return (
        <div className="Section" id="Home">
            <h1 className="titulo">
                Bem vindo ao meu portfólio! Sou desenvolvedor web. <span className="animated"></span>
            </h1>
            <img src={FotoComFundo} alt="'-'" className="FotoComFundo" />
            <a href="#Contato">
                <img src={FitaContato} alt="Botão para contato." className="FitaContato" />
            </a>
        </div>

    );
}

export default Home;