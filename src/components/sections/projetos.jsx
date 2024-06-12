import React from "react"
import Login from "../../assets/siteLogin.png"
import Dungeon_map from "../../assets/random_dungeon_map.png"
import VieVi from "../../assets/Vi&Vi.png"
import emContrucao from "../../assets/em-construcao.png"
import jogo_da_velha from "../../assets/Jogo_da_velha.png"


function projetos() {
  
  return (
    <div className="section3" id="Projetos">
      <div className="projetosContant"> C:\Users\Henrique\Projetos:</div>
      <div className="projetosGrid">
        <div className="projetosDiv">
          <a target="_blank" rel="noopener noreferrer"><img className="projeto1" src={Dungeon_map} /></a>
          <p className="descriçãoProjetos"><strong>React / Sass</strong><img className="emContrucao" alt="x" src={emContrucao} />
          </p>
          <p className="tituloProjeto">Mapa RPG</p>
        </div>
        <div className="projetosDiv">
          <a href="https://login-react-sand.vercel.app/" target="_blank" rel="noopener noreferrer"><img className="projeto2" src={Login} alt="Projeto2" /></a>

          <p className="descriçãoProjetos"><strong>React / Styled components</strong></p>
          <p className="tituloProjeto">Sistema de login</p>

        </div>
        <div className="projetosDiv">
          <a target="_blank" rel="noopener noreferrer"><img className="projeto3" src={VieVi} /></a>
          <p className="descriçãoProjetos"><strong>Bootstrap</strong><img className="emContrucao" alt="x" src={emContrucao} />
          </p>
          <p className="tituloProjeto">Vi & Vi Odonto</p>
        </div>
        <div className="projetosDiv">
          <a href="https://jogo-da-velha-two-ruby.vercel.app/" target="_blank" rel="noopener noreferrer"><img className="projeto4" src={jogo_da_velha} /></a>
          <p className="descriçãoProjetos"><strong>Html / Javascript / CSS</strong>
          </p>
          <p className="tituloProjeto">Jogo da velha</p>
        </div>
      </div>
    </div>
  )
}

export default projetos