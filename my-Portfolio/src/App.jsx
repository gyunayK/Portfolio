/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import About from "./sections/about/About";
import Navbar from "./sections/navbar/Navbar";

function App() {
  return (
    <>
      <div className="bg-hero w-full h-screen bg-cover bg-no-repeat bg-center  flex font-['NATS']">
        <Navbar />
        <div className="sm:text-white flex flex-col self-center xs:pl-[5%] lg:pl-[15%] pb-2">
          <h4 className=" mb-1 text-2xl">Hello, my name is</h4>
          <h1 className="text-7xl ">
            {" "}
            <span className="xs-max:text-white">Gyunay</span>
            <span className="xs:text-white"> Kadirov.</span>
          </h1>
          <h2 className="xs:text-white text-4xl mb-1">
            I enjoy building things for the web.
          </h2>
          <p className="xs:text-white max-w-[450px] text-xl">
            I'm a full-stack focused web developer based in Vancouver, BC with a
            passion for creating aesthetically pleasing and user-friendly
            websites.
          </p>
        </div>
      </div>
      <About />
    </>
  );
}

export default App;
