/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import Hero from "./sections/hero/Hero";
import Navbar from "./sections/navbar/Navbar";

function App() {
  return (
    <>
      <div className="w-full h-full mx-auto font-['NATS']">
        <div className="bg-hero w-full h-[1000px] bg-cover bg-no-repeat bg-center mb-52 flex ">
          <Navbar />
          <div className="sm:text-white flex flex-col self-center xs:pl-[5%] lg:pl-[15%] pb-2">
            <h4 className=" mb-1 text-xl">Hello, my name is</h4>
            <h1 className="text-7xl ">GYUNAY KADIROV.</h1>
            <h2 className="xs:text-white text-4xl mb-1">
              I enjoy building 
              things for the web.
            </h2>
            <p className="xs:text-white max-w-[450px] text-xl">
              I'm a full-stack focused web developer based in Vancouver, BC with a
              passion for creating aesthetically pleasing and user-friendly
              websites.
            </p>
          </div>
        </div>

        <Hero />
      </div>
    </>
  );
}

export default App;
