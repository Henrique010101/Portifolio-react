import { useState } from 'react';
import "./scss/index.scss";
import Home from  "./components/sections/home";
import Sobre from './components/sections/sobre';
import Navbar from './components/navBar';
import Projetos from './components/sections/projetos';
import Contato from './components/sections/contato';
import Footer from './components/footer';

function App () {
  return (
     <div className="app-container">
      <Navbar/>
      <Home/>
      <Sobre/>
      <Projetos/>
      <Contato/>
      <Footer/>
     </div>
  )
};

export default App;
