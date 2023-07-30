import About from "./sections/about/About";
import Hero from "./sections/hero/Hero";
import Navbar from "./sections/navbar/Navbar";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col mx-auto">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <section
          className="bg-hero w-full h-screen bg-cover bg-no-repeat bg-center bg-black flex "
          id="home"
        >
          <Navbar />
          <Hero />
        </section>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
