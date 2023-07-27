import "./App.css";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Hero from "./sections/hero/Hero";
import Navbar from "./sections/navbar/Navbar";
import Projects from "./sections/projects/Projects";

function App() {
  return (
    <>
      <div className="flex flex-col mx-auto">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="bg-hero w-full h-screen bg-cover bg-no-repeat bg-center bg-black flex font-['NATS']">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Projects/>
        <Contact />
      </div>
    </>
  );
}

export default App;
