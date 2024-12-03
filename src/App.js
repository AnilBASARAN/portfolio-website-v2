import About from "./components/About";
import Codewars from "./components/Codewars";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Codewars />
    </div>
  );
}

export default App;
