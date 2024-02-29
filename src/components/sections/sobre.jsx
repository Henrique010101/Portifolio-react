import React from "react";
import Figma from "../../assets/figma.png"
import Css from "../../assets/css.png"
import Git from "../../assets/git.png"
import Html from "../../assets/html.png"
import JavaScript from "../../assets/javascript.png"
import ReactS from "../../assets/biblioteca.png"

function sobre() {
  return (
    <div className="section2">
    <div>
    <p className="contantText">Me chamo Henrique, tenho 20 anos, estou estudando a 1 ano, com foco em front-end, obtive conhecimentos sólidos em <strong>JavaScript</strong> e <strong>React</strong>.</p>

    <p className="contantText">Fiz cursos da <strong>Alura</strong> e cada dia estou aprendendo mais!</p>
    </div>
    <div className="contantSkils">Habilidades:
    <div className="skills">
      <button className="imgContainer">
          <img className="img" src={Git} alt="Descrição da imagem do Git" />
      </button>
      <button className="imgContainer">
          <img className="img" src={Html} alt="Descrição da imagem do HTML" />
      </button>
      <button className="imgContainer">
          <img className="img" src={JavaScript} alt="Descrição da imagem do JavaScript" />
      </button>
      <button className="imgContainer">
          <img className="img" src={Css} alt="Descrição da imagem do CSS" />
      </button>
      <button className="imgContainer">
          <img className="img" src={Figma} alt="Descrição da imagem do Figma" />
      </button>
      <button className="imgContainer">
          <img className="react"  src={ReactS} alt="Descrição da imagem do React" />
      </button>
      </div>
    </div>
    </div>
  );
};

export default sobre;