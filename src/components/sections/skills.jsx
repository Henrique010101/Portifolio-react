import Figma from "../../assets/figma.png"
import Css from "../../assets/css.png"
import Git from "../../assets/git.png"
import Html from "../../assets/html.png"
import JavaScript from "../../assets/javascript.png"
import ReactS from "../../assets/biblioteca.png"
import StyledComponents from "../../assets/styled-components.png"
import Sass from "../../assets/sass.png"
import Bootstrap from "../../assets/bootstrap.png"
import Typescript from '../../assets/Typescript-logo.png'
import NodeJS from "../../assets/nodejs-logo.png"

function skills() {

  return (
    <div className="section3" id="Skills">
        <p className="phabilidade">Habilidades:</p>
          <div className="skills">
            <a href="https://cursos.alura.com.br/user/henrique2003-com/fullCertificate/0b63c6cc293bd4c564219683e36de01f" target="_blank" rel="noopener noreferrer"><button className="imgContainer" title="Git">
              <img className="img" src={Git} alt="Imagem logo do Git" />
              <p className="textSkills">Git</p>
            </button></a>
            <a href="https://cursos.alura.com.br/user/henrique2003-com/fullCertificate/0b63c6cc293bd4c564219683e36de01f" target="_blank" rel="noopener noreferrer"><button className="imgContainer" title="HTML">
              <img className="img" src={Html} alt="Imagem logo do Html" />
              <p className="textSkills">Html</p>
            </button></a>
            <a href="https://cursos.alura.com.br/user/henrique2003-com/fullCertificate/0b63c6cc293bd4c564219683e36de01f" target="_blank" rel="noopener noreferrer"><button className="imgContainer" title="JavaScript">
              <img className="img" src={JavaScript} alt="Imagem logo do Javascript" />
              <p className="textSkills">JavaScript</p>
            </button></a>
            <a href="https://cursos.alura.com.br/user/henrique2003-com/fullCertificate/0b63c6cc293bd4c564219683e36de01f" target="_blank" rel="noopener noreferrer"><button className="imgContainer" title="CSS">
              <img className="img" src={Css} alt="Imagem logo do CSS" />
              <p className="textSkills">CSS</p>
            </button></a>
            <a href="https://cursos.alura.com.br/user/henrique2003-com/fullCertificate/0b63c6cc293bd4c564219683e36de01f" target="_blank" rel="noopener noreferrer"><button className="imgContainer" title="Figma">
              <img className="img" src={Figma} alt="Imagem logo do Figma" />
              <p className="textSkills">Figma</p>
            </button></a>
            <a href="https://cursos.alura.com.br/user/henrique2003-com/fullCertificate/0b63c6cc293bd4c564219683e36de01f" target="_blank" rel="noopener noreferrer"><button className="imgContainer" title="React">
              <img className="react" src={ReactS} alt="Imagem logo do React" />
              <p className="textSkills">React</p>
            </button></a>
            <a href="https://cursos.alura.com.br/user/henrique2003-com/fullCertificate/0b63c6cc293bd4c564219683e36de01f" target="_blank" rel="noopener noreferrer"><button className="imgContainer" title="Styled Components">
              <img className="imgHz" src={StyledComponents} alt="Imagem logo do Styled Components" />
              <p className="textSkills">Styled Components</p>
            </button></a>
            <a href="https://cursos.alura.com.br/user/henrique2003-com/fullCertificate/0b63c6cc293bd4c564219683e36de01f" target="_blank" rel="noopener noreferrer"><button className="imgContainer" title="SASS">
              <img className="img" src={Sass} alt="Imagem logo do Sass" />
              <p className="textSkills">Sass</p>
            </button></a>
            <a href="https://cursos.alura.com.br/user/henrique2003-com/fullCertificate/0b63c6cc293bd4c564219683e36de01f" target="_blank" rel="noopener noreferrer"><button className="imgContainer" title="SASS">
              <img className="bootstrap" src={Bootstrap} alt="Imagem logo do Bootstrap" />
              <p className="textSkills">Bootstrap</p>
            </button></a>
            <a href="https://cursos.alura.com.br/user/henrique2003-com/fullCertificate/0b63c6cc293bd4c564219683e36de01f" target="_blank" rel="noopener noreferrer"><button className="imgContainer" title="Git">
              <img className="img" src={Typescript} alt="Imagem logo do Typescript" />
              <p className="textSkills">Typescript</p>
            </button></a>
            <a href="https://cursos.alura.com.br/user/henrique2003-com/fullCertificate/0b63c6cc293bd4c564219683e36de01f" target="_blank" rel="noopener noreferrer"><button className="imgContainer" title="Git">
              <img className="img" src={NodeJS} alt="Imagem logo do Typescript" />
              <p className="textSkills">NodeJS</p>
            </button></a>
        </div>
    </div>
  );
}

export default skills;