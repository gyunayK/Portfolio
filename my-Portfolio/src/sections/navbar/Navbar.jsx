import { useState } from "react";
import useActiveSection from "@/hooks/activeSection_ID";
import useScrollCheck from "@/hooks/useScrollCheck";
import "./hamburgeStyle.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeSection = useActiveSection(0.41);
  const isScrolled = useScrollCheck();

  const SCROLLED_COLOR = "black";
  const NOT_SCROLLED_COLOR = "white";

  const navIconStyles = {
    backgroundColor: isScrolled ? SCROLLED_COLOR : NOT_SCROLLED_COLOR,
  };

  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMenuOpen(false);
  };

  return (
    <nav className="font-Tektur z-[9999]">
      <div
        id="nav-icon2"
        className={`p-7 fixed top-7 right-6 z-50 sm:block md:hidden scale-75 cursor-pointer ${
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
        } w-screen h-full fixed top-0 right-0 transition-transform duration-[200ms] ease-in-out transform z-40 overflow-hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="text-3xl flex flex-col items-center justify-center space-y-4 h-full gap-8 ">
          <li
            className={`cursor-pointer ${
              activeSection === "home" && "text-[#D16EFF]"
            }`}
            onClick={() => scrollToSection("home")}
          >
            HOME{" "}
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "about" && "text-[#8E00D0]"
            }`}
            onClick={() => scrollToSection("about")}
          >
            ABOUT{" "}
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "timeline" && "text-[#8E00D0]"
            }`}
            onClick={() => scrollToSection("timeline")}
          >
            TIMELINE{" "}
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "work" && "text-[#8E00D0]"
            }`}
            onClick={() => scrollToSection("work")}
          >
            WORK{" "}
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "contact" && "text-[#D16EFF]"
            }`}
            onClick={() => scrollToSection("contact")}
          >
            CONTACT{" "}
          </li>
          <li
            className={`border-2 p-2 mr-1 rounded-md ${
              isScrolled ? "border-black" : "border-white"
            }`}
          >
            <a
              href="/Gyunay_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME
            </a>
          </li>
        </ul>
      </div>

      <div
        className={`bg-black w-full transition-all duration-200 ease-in-out ${
          isScrolled ? "h-[80px]" : "h-0"
        } md:fixed hidden md:block relative z-50`}
      >
        <div className="max-w-[2000px] mx-auto flex justify-between items-center px-10 ">
          <h2
            className={`hidden md:block text-3xl border-2 text-white rounded-lg px-2 `}
          >
            GK
          </h2>
          <ul className="text-xl text-white flex gap-10 items-center justify-center p-4 tracking-wide">
            <li
              className={`cursor-pointer border-transparent  border-b-2 hover:border-white ${
                activeSection === "home" && "text-[#D16EFF]"
              }`}
              onClick={() => scrollToSection("home")}
            >
              HOME
            </li>
            <li
              className={`cursor-pointer border-transparent  border-b-2 hover:border-white ${
                activeSection === "about" && "text-[#D16EFF]"
              }`}
              onClick={() => scrollToSection("about")}
            >
              ABOUT
            </li>
            <li
              className={`cursor-pointer border-transparent  border-b-2 hover:border-white ${
                activeSection === "timeline" && "text-[#D16EFF]"
              }`}
              onClick={() => scrollToSection("timeline")}
            >
              TIMELINE
            </li>
            <li
              className={`cursor-pointer border-transparent  border-b-2 hover:border-white ${
                activeSection === "work" && "text-[#D16EFF]"
              }`}
              onClick={() => scrollToSection("work")}
            >
              WORK
            </li>
        
            <li
              className={`cursor-pointer border-transparent  border-b-2 hover:border-white ${
                activeSection === "contact" && "text-[#D16EFF]"
              }`}
              onClick={() => scrollToSection("contact")}
            >
              CONTACT
            </li>
            <li className="border-2 p-2 m-1 rounded-md border-white hover:bg-black">
              <a
                href="/Gyunay_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESUME
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
