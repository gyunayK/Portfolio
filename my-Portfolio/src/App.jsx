import About from "./sections/about/About";
import Hero from "./sections/hero/Hero";
import Navbar from "./sections/navbar/Navbar";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Timeline from "./sections/timeline/Timeline";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-auto max-w-[2560px]">
        <section
          className="bg-hero w-full h-[100svh] bg-cover bg-no-repeat bg-center flex"
          id="home"
        >
          <Hero />
        </section>
        <About />
        <Timeline/>
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
