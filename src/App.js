import About from "./components/About";
import Codewars from "./components/Codewars";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Space from "./components/Space";
import Github from "./components/Github";
import Work from "./components/Work";
import References from "./components/References";

//TODO: add language english / turkish optionality like an switch on / off button

function App() {
  return (
    <div>
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
