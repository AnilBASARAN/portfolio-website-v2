import About from "./components/About";
import Codewars from "./components/Codewars";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Space from "./components/Space";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Space />
      <Projects />
      <Space />
      <Codewars />
      <Space />
      
    </div>
  );
}

export default App;
