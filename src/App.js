import About from "./components/About";
import Codewars from "./components/Codewars";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Space from "./components/Space";
import SpaceNav from "./components/SpaceNav";
import Github from "./components/Github";
import Work from "./components/Work";
import References from "./components/References";


function App() {
  return (
    <div>
      <SpaceNav />
      <Navbar />
      <Home />
      <Space />
      <Github/>
      <Space />
      <About />
      <Space />
      <Skills />
      <Space />
      <Work />
      <Space />
      <Projects />
      <Space />
      <Codewars />
      <Space />
      <References />
    </div>
  );
}

export default App;
