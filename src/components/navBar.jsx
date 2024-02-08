import React, { useState } from "react";
import Bandeira from "../assets/bandeiraUK.png";
import Home from "./sections/home";
import Sobre from "./sections/sobre";
import Projetos from "./sections/projetos";
import Contato from "./sections/contato";

const Navbar = () => {

  return (
    <header>
    <nav className="ContainerBar">
      <ul className="NavList">
      <li><a className="NavAncora" href="/#">Home</a></li>
      <li><a className="NavAncora" href="/#">Sobre mim</a></li>
      <li><a className="NavAncora" href="/#">Projetos</a></li>
      <li><a className="NavAncora" href="/#">Contato</a></li>
      </ul>
      <div className="Bandeiras">
      <img src={Bandeira} className="BRbandeira" />
      <img className="UKbandeira" />
      </div>
    </nav>
    </header>
  );
};

export default Navbar;