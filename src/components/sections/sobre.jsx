import React from "react";
import Figma from "../../assets/figma.png"
import Css from "../../assets/css.png"
import Git from "../../assets/git.png"
import Html from "../../assets/html.png"
import JavaScript from "../../assets/javascript.png"
import ReactS from "../../assets/biblioteca.png"
import StyledComponents from "../../assets/styled-components.png"
import Sass from "../../assets/Sass.png"

function sobre() {

  
  return (
    <div className="section2" id="Section2">
    <div className="container">
    <p className="contantText">Me chamo Henrique, tenho 20 anos, estou estudando a 1 ano, com foco em front-end, obtive conhecimentos sólidos em <strong>JavaScript</strong> e <strong>React</strong>.</p>

    <p className="contantText">Fiz cursos da <strong>Alura</strong> e cada dia estou aprendendo mais!</p>
    <a href="https://cursos.alura.com.br/user/henrique2003-com/fullCertificate/0b63c6cc293bd4c564219683e36de01f" target="_blank" rel="noopener noreferrer">
      <button className="certificados">Acessar Certificados<img /> </button></a>
    </div>
    <div className="unify">
    <p className="phabilidade">Habilidades:</p>
    <div className="contantSkils">
      <div className="skills">
        <button className="imgContainer" title="Git">
            <img className="img" src={Git} alt="Descrição da imagem do Git" />
            <p className="textSkills">Git</p>
        </button>
        <button className="imgContainer" title="HTML">
            <img className="img" src={Html} alt="Descrição da imagem do HTML" />
            <p className="textSkills">Html</p>
        </button>
        <button className="imgContainer" title="JavaScript">
            <img className="img" src={JavaScript} alt="Descrição da imagem do JavaScript" />
            <p className="textSkills">JavaScript</p>
        </button>
        <button className="imgContainer" title="CSS">
            <img className="img" src={Css} alt="Descrição da imagem do CSS" />
            <p className="textSkills">CSS</p>
        </button>
        <button className="imgContainer" title="Figma">
            <img className="img" src={Figma} alt="Descrição da imagem do Figma" />
            <p className="textSkills">Figma</p>
        </button>
        <button className="imgContainer" title="React">
            <img className="react"  src={ReactS} alt="Descrição da imagem do React" />
            <p className="textSkills">React</p>
        </button>
        <button className="imgContainer" title="Styled Components">
            <img className="imgHz" src={StyledComponents} alt="Descrição da imagem do StyledComponents" />
            <p className="textSkills">Styled Components</p>
        </button>
        <button className="imgContainer" title="SASS">
            <img className="img" src={Sass} alt="Descrição da imagem do Sass" />
            <p className="textSkills">Sass</p>
        </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default sobre;