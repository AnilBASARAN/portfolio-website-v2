import About from "./components/About";
import Codewars from "./components/Codewars";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Space from "./components/Space";
import SpaceNav from "./components/SpaceNav";


function App() {
  return (
    <div>
      <SpaceNav />
      <Navbar />
      <Home />
      <Space />
      <About />
      <Space />
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
