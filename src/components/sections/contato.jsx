import React from "react";
import GitHub from "../../assets/github.png";
import Linkedin from "../../assets/social.png";
import Email from "../../assets/gmail.png";
import Telefone from "../../assets/telefone.png";
import Whats from "../../assets/whatsapp.png";

function Contato () {
  return (
    <div className="Section4" id="Contato"><p className="Contato">Contato:</p>
      <div className="LinksCountainer">
        <div className="IconContainer">
          <img className="Icon" src={GitHub} alt="GitHub Icon" />
          <a className="GitHubA" href="https://github.com/Henrique010101" target="_blank" rel="noopener noreferrer">Henrique010101</a>
        </div>
        <div className="IconContainer">
          <img className="Icon" src={Linkedin} alt="LinkedIn Icon" />
          <a className="LinkedinA" href="https://www.linkedin.com/in/henrique-guimar%C3%A3es-35426b233/" target="_blank" rel="noopener noreferrer">Henrique Guimarães</a>
        </div>
        <div className="IconContainer">
          <img className="Icon" src={Email} alt="Email Icon" />
          <a className="EmailA" href="mailto:henrique2003.com@gmail.com" target="_blank" rel="noopener noreferrer">henrique2003.com@gmail.com</a>
        </div>
        <div className="IconContainer">
          <img className="Icon" src={Telefone} alt="Telefone Icon" />
          <a className="TelefoneA" href="tel:+5511953946555" target="_blank" rel="noopener noreferrer">+55 11 95394-6555</a>
        </div>
      </div>
      <div className="Buttons">
        <button className="Whats">Chamar no Whatsapp<img  className="WhatsImg" src={Whats}/></button>
        <button className="Curriculo">Download currículo</button>
      </div>
    </div>
  );
}

export default Contato;