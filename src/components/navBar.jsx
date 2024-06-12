import React, { useState } from "react";
import TypeIt from "typeit-react";

function Navbar() {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");

  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");  
  };

  return (
    <nav className="nav">
      <TypeIt options={{
        strings: ["Olá, mundo!", "Bem-vindo ao meu site!", "Aproveite sua visita!"],
        speed: 160,
      }}
       href="#" className="nav_brand">
        <strong>&lt;h1&gt;</strong>
        &nbsp; Olá mundo! &nbsp;
        <strong>&lt;h1&gt;</strong></TypeIt>
      <ul className={active}>
        <li className="nav_item"><a href="#Home" className="nav_link">Home</a></li>
        <li className="nav_item"><a href="#Sobre" className="nav_link">Sobre</a></li>
        <li className="nav_item"><a href="#Projetos" className="nav_link">Projetos</a></li>
        <li className="nav_item"><a href="#Contato" className="nav_link">Contato</a></li>
      </ul>
      <div className="end_">
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;