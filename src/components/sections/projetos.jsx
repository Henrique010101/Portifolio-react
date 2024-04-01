import React from "react"
import Login from "../../assets/siteLogin.png"
import Em_producao from "../../assets/Em_produção.png"
import Dungeon_map from "../../assets/random_dungeon_map.png"

function projetos() {
  return (
    <div className="section3" id="Projetos">
      <div className="projetosContant"> C:\Users\Henrique\Projetos:</div>
      <div className="projetosGrid">
        <div className="projetosDiv">
          <a target="_blank" rel="noopener noreferrer"><img className="projeto1" src={Dungeon_map} /></a>
          <p className="descriçãoProjetos"><strong>React / Sass</strong>
          </p>
          <p className="tituloProjeto">Mapa RPG</p>
        </div>
        <div className="projetosDiv">
          <a href="https://login-react-sand.vercel.app/" target="_blank" rel="noopener noreferrer"><img className="projeto2" src={Login} alt="Projeto2" /></a>

          <p className="descriçãoProjetos"><strong>React / Styled components</strong></p>
          <p className="tituloProjeto">Sistema de login</p>

        </div>
        <div className="projetosDiv">
          <a target="_blank" rel="noopener noreferrer"><img className="projeto3" src={Em_producao} /></a>
          <p className="descriçãoProjetos"><strong>Descrição do projeto</strong>
          </p>
          <p className="tituloProjeto">Nome do projeto</p>
        </div>
        <div className="projetosDiv">
          <a target="_blank" rel="noopener noreferrer"><img className="projeto4" src={Em_producao} /></a>
          <p className="descriçãoProjetos"><strong>Descrição do projeto</strong>
          </p>
          <p className="tituloProjeto">Nome do projeto</p>
        </div>
      </div>
    </div>
  )
}

export default projetos