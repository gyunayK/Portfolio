import About from "./sections/about/About";
import Hero from "./sections/hero/Hero";
import Navbar from "./sections/navbar/Navbar";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <>
        <Navbar />
      <div className="flex flex-col mx-auto max-w-6xl">
       
        <section
          className="bg-hero w-full h-[100dvh] bg-cover bg-no-repeat bg-center bg-black flex "
          id="home"
        >
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
