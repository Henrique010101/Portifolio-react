import React from "react"
import Login from "../../assets/siteLogin.png"

function projetos() {
  return (
    <div className="section3">
      <div className="projetosContant"> C:\Users\Henrique\Projetos:</div>
      <div className="projetosGrid">
      <div className="projetosDiv">
      <a><img className="projeto1" src=""/></a>
        <p className="descriçãoProjetos">Descrição do projeto
        </p>
      </div>
      <div className="projetosDiv">
        <a href="https://login-react-sand.vercel.app/" target="_blank" rel="noopener noreferrer"><img className="projeto2" src={Login} alt="Projeto2" /></a>
        <p className="descriçãoProjetos">React / Styled components
        </p>
      </div>
      <div className="projetosDiv">
      <a><img className="projeto3" src=""/></a>
        <p className="descriçãoProjetos">Descrição do projeto
        </p>
      </div>
      <div className="projetosDiv">
      <a><img className="projeto4" src=""/></a>
        <p className="descriçãoProjetos">Descrição do projeto
        </p>
      </div>
      </div>
    </div>
  )
}

export default projetos