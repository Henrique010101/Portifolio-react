import React from "react"
import Login from "../../assets/siteLogin.png"

function projetos() {
  return (
    <div className="section3">
      <div className="projetosContant"> C:\Users\Henrique\Projetos:
      <div className="projetosGrid">
        <div className="descriçãoProjetos">
        <img className="projeto1" src=""/>Descrição do projeto
        </div>
        <div className="descriçãoProjetos">
        <img className="projeto2" src={Login} alt="Projeto2" />Descrição do projeto
        </div>
        <div className="descriçãoProjetos">
        <img className="projeto3" src=""/>Descrição do projeto
        </div>
        <div className="descriçãoProjetos">
        <img className="projeto4" src=""/>Descrição do projeto
        </div>
      </div>
      </div>
    </div>
  )
}

export default projetos