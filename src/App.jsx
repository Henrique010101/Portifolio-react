import "./scss/index.scss";
import Home from "./components/sections/home";
import Sobre from './components/sections/sobre';
import Skills from "./components/sections/skills";
import Navbar from './components/navBar';
import Projetos from './components/sections/projetos';
import Contato from './components/sections/contato';
import Footer from './components/footer';
// import Scroll from './components/scrollToTop';

function App() {
  return (
    <div className="app-container">
      {/* <Scroll /> */}
      <Navbar />
      <Home />
      <Sobre />
      <Projetos />
      <Skills />
      <Contato />
      <Footer />
    </div>
  )
}

export default App;
