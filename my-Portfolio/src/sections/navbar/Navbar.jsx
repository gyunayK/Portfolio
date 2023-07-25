import { useState, useEffect } from "react";
import "./hamburgeStyle.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const triggerLength = window.innerHeight * 0.1;

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > window.innerHeight - triggerLength) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    // Clean up function
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  });

  return (
    <div className="font-Tektur z-30">
      <h2 className="text-[30px] fixed  top-7 left-6 md:top-5 md:left-20 z-10 text-white border-2 rounded-lg px-2">
        GK
      </h2>
      <div
        id="nav-icon2"
        className={`p-7 fixed top-7 right-6 z-30 sm:block md:hidden scale-75 cursor-pointer ${
          isMenuOpen ? "open" : ""
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        className={`bg-black z-20  text-white w-screen h-full fixed top-0 right-0 transition-transform duration-[200ms] ease-in-out transform overflow-hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="text-3xl flex flex-col items-center justify-center space-y-4 h-full gap-8 ">
          <li className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            HOME{" "}
          </li>
          <li className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            ABOUT{" "}
          </li>
          <li className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            WORK{" "}
          </li>
          <li className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            CONTACT{" "}
          </li>
        </ul>
      </div>

      <div
        className={`bg-black w-full transition-all duration-200 ease-in-out ${
          isScrolled ? "h-[83px]" : "h-0"
        } md:fixed hidden md:block`}
      >
        <ul className="text-xl text-white flex gap-10 items-end justify-end p-8 fixed right-40 top-0">
          <li className="cursor-pointer border-transparent border-b-2 hover:border-white">
            HOME
          </li>
          <li className="cursor-pointer border-transparent border-b-2 hover:border-white">
            ABOUT
          </li>
          <li className="cursor-pointer border-transparent border-b-2 hover:border-white">
            WORK
          </li>
          <li className="cursor-pointer border-transparent border-b-2 hover:border-white">
            CONTACT
          </li>
          <li className="absolute right-[-90px] top-5 cursor-pointer border-2 p-3 hover:bg-black rounded-md">
            RESUME
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
