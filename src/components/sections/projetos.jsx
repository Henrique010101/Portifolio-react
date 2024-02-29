import React from "react"
import Login from "../../assets/siteLogin.png"

function projetos() {
  return (
    <div className="section3">
      <div className="projetosContant"> C:\Users\Henrique\Projetos:</div>
      <div className="projetosGrid">
        <a className="descriçãoProjetos">
        <img className="projeto1" src=""/>Descrição do projeto
        </a>
        <a className="descriçãoProjetos" href="https://login-react-sand.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img className="projeto2" src={Login} alt="Projeto2" />React & Styled components
        </a>
        <a className="descriçãoProjetos">
        <img className="projeto3" src=""/>Descrição do projeto
        </a>
        <a className="descriçãoProjetos">
        <img className="projeto4" src=""/>Descrição do projeto
        </a>
      </div>
      
    </div>
  )
}

export default projetos