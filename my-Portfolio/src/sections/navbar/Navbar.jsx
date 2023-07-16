import { useState } from "react";
import "./hamburgeStyle.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed w-full h-full">
      <button
        className="p-10 mr-4  absolute top-10 right-5 z-10 sm:block md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div id="nav-icon2" className={isMenuOpen ? "open" : ""}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div
        className={`bg-white text-black w-screen h-full fixed top-0 right-0 transition-transform duration-[200ms] ease-in-out transform overflow-hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="text-4xl flex flex-col items-center justify-center space-y-4 h-full gap-8">
          <li className="cursor-pointer">HOME </li>
          <li className="cursor-pointer">ABOUT </li>
          <li className="cursor-pointer">WORK </li>
          <li className="cursor-pointer">CONTACT </li>
        </ul>
      </div>

      <div className="hidden md:block">
        <ul className="text-4xl flex gap-7 content-end justify-end p-8 font-['NATS']">
          <li className="cursor-pointer border-transparent border-b-2 hover:border-white ">
            HOME
          </li>
          <li className="cursor-pointer border-transparent border-b-2 hover:border-white ">
            ABOUT
          </li>
          <li className="cursor-pointer border-transparent border-b-2 hover:border-white ">
            WORK
          </li>
          <li className="cursor-pointer border-transparent border-b-2 hover:border-white ">
            CONTACT
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
