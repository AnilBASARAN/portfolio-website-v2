import About from "./components/About";
import Codewars from "./components/Codewars";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Space from "./components/Space";
import SpaceNav from "./components/SpaceNav";
import Github from "./components/Github";


function App() {
  return (
    <div>
      <SpaceNav />
      <Navbar />
      <Home />
      <Space />
      <Github/>
      <About />
      <Space />
      <Skills />
      <Space />
      <Projects />
      <Space />
      <Codewars />
      <Space />
      <Space />
      <Space />
      <Space />
    </div>
  );
}

export default App;
