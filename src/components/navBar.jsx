import React from "react";

function Navbar() {
  return (
    <nav className="nav">
      <a href="#" className="nav_brand"></a>
      <ul className="nav_menu">
        <li className="nav_item"><a href="#Section1" className="nav_link">Home</a></li>
        <li className="nav_item"><a href="#Section2" className="nav_link">Sobre</a></li>
        <li className="nav_item"><a href="#Section3" className="nav_link">Projetos</a></li>
        <li className="nav_item"><a href="#Section4" className="nav_link">Contato</a></li>
      </ul>
      <div className="end_">
      <div className="nav_toggler">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar;