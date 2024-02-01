import React from "react";
// import Bandeira from "./../assets/bandeiraIUG.png";

function Navbar () {
  return (
    <div className="ContainerBar">
      <ul className="NavLink">
      <a href="/#">Home</a>
      <a href="/#">Sobre mim</a>
      <a href="/#">Projetos</a>
      <a href="/#">Contato</a>
      <button className="BRbandeira" />
      <button className="UKbandeira" />
      </ul>
    </div>
  );
};

export default Navbar;