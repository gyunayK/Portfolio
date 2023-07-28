import { useState, useEffect } from "react";
import "./hamburgeStyle.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const SCROLLED_COLOR = "black";
  const NOT_SCROLLED_COLOR = "white";

  const navIconStyles = {
    backgroundColor: isScrolled ? SCROLLED_COLOR : NOT_SCROLLED_COLOR,
  };

  useEffect(() => {
    const checkScroll = () => {
      let bottomSectionTrigger;
      const triggerLength = window.innerHeight * 0.1;

      if (window.innerWidth > 768) {
        bottomSectionTrigger = 300;
      } else {
        bottomSectionTrigger = 665;
      }

      if (
        window.scrollY >
          document.documentElement.scrollHeight -
            window.innerHeight -
            bottomSectionTrigger &&
        window.innerWidth < 2000
      ) {
        setIsScrolled(false);
      } else if (window.scrollY > window.innerHeight - triggerLength) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="font-Tektur z-30">
      <h2
        className={`hidden md:block text-[30px] fixed  top-7 left-6 md:top-5 md:left-20 border-2 text-white rounded-lg px-2 z-50`}
      >
        GK
      </h2>
      <div
        id="nav-icon2"
        className={`p-7 fixed top-7 right-6 z-30 sm:block md:hidden scale-75 cursor-pointer ${
          isMenuOpen ? "open" : ""
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span style={navIconStyles}></span>
        <span style={navIconStyles}></span>
        <span style={navIconStyles}></span>
        <span style={navIconStyles}></span>
        <span style={navIconStyles}></span>
        <span style={navIconStyles}></span>
      </div>

      <div
        className={` ${
          isScrolled ? "bg-white text-black" : "bg-black text-white"
        } w-screen h-full fixed top-0 right-0 transition-transform duration-[200ms] ease-in-out transform overflow-hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="text-3xl flex flex-col items-center justify-center space-y-4 h-full gap-8 ">
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            HOME{" "}
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            ABOUT{" "}
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection("work")}
          >
            WORK{" "}
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            CONTACT{" "}
          </li>
        </ul>
      </div>

      <div
        className={`bg-black w-full transition-all duration-200 ease-in-out ${
          isScrolled ? "h-[83px]" : "h-0"
        } md:fixed hidden md:block`}
      >
        <ul className="text-xl text-white flex gap-10 items-end justify-end p-8 fixed right-40 top-0 tracking-wide">
          <li
            className="cursor-pointer border-transparent border-b-2 hover:border-white"
            onClick={() => scrollToSection("home")}
          >
            HOME
          </li>
          <li
            className="cursor-pointer border-transparent border-b-2 hover:border-white"
            onClick={() => scrollToSection("about")}
          >
            ABOUT
          </li>
          <li
            className="cursor-pointer border-transparent border-b-2 hover:border-white"
            onClick={() => scrollToSection("work")}
          >
            WORK
          </li>
          <li
            className="cursor-pointer border-transparent border-b-2 hover:border-white"
            onClick={() => scrollToSection("contact")}
          >
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
