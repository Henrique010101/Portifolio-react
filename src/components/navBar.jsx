import React from "react";
import Bandeira from "../assets/bandeiraUK.png";
import Home from "./sections/home";
import Sobre from "./sections/sobre";
import Projetos from "./sections/projetos";
import Contato from "./sections/contato";

const Navbar = () => {
  
  return (
    <div className="ContainerBar">
      <a className="NavAncora" href="/#">Home</a>
      <a className="NavAncora" href="/#">Sobre mim</a>
      <a className="NavAncora" href="/#">Projetos</a>
      <a className="NavAncora" href="/#">Contato</a>
      <div className="Bandeiras">
      <img src={Bandeira} className="BRbandeira" />
      <img className="UKbandeira" />
      </div>
    </div>
  );
};

export default Navbar;