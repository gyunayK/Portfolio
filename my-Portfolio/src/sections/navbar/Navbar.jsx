import { useState } from 'react'
import useActiveSection from '@/hooks/activeSection_ID'
import useScrollCheck from '@/hooks/useScrollCheck'
import './hamburgerStyle.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const activeSection = useActiveSection(0.3)
  const isScrolled = useScrollCheck()

  const scrolledColour = 'black'
  const notScrolledColour = 'white'

  const navIconStyles = {
    backgroundColor: isScrolled ? scrolledColour : notScrolledColour
  }

  const scrollToSection = (section) => {
    const headerOffset = window.innerWidth > 768 ? 40 : 0
    const elementPosition = document
      .getElementById(section)
      .getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })

    setIsMenuOpen(false)
  }

  return (
    <nav className="font-Tektur z-[9999]">
      <div
        id="nav-icon2"
        className={`p-7 fixed top-7 right-6 z-50 sm:block md:hidden scale-75 cursor-pointer ${
          isMenuOpen ? 'open' : ''
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
          isScrolled ? 'bg-white text-black' : 'bg-black text-white'
        } w-screen h-full fixed top-0 right-0 transition-transform duration-[200ms] ease-in-out transform z-40 overflow-hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="text-3xl flex flex-col items-center justify-center space-y-4 h-full gap-8 ">
          <li onClick={() => scrollToSection('home')}>HOME </li>
          <li onClick={() => scrollToSection('about')}>ABOUT </li>
          <li onClick={() => scrollToSection('timeline')}>TIMELINE </li>
          <li onClick={() => scrollToSection('work')}>WORK </li>
          <li onClick={() => scrollToSection('contact')}>CONTACT </li>
        </ul>
      </div>

      <div
        className={`bg-black w-full transition-all duration-200 ease-in-out ${
          isScrolled ? 'h-20' : 'h-0'
        } md:fixed hidden md:block relative z-50`}
      >
        <div className="max-w-[2000px] mx-auto flex justify-between items-center pt-2.5 px-10 ">
          <h2
            className={`hidden md:block text-3xl border-2 text-white rounded-lg px-2 `}
          >
            GK
          </h2>
          <ul className="text-xl text-white flex gap-10 items-center justify-center p-4 tracking-wide">
            <li
              className={`cursor-pointer border-transparent  border-b-2  ${
                activeSection === 'home'
                  ? 'text-[#D16EFF] hover:border-white'
                  : 'hover:border-[#D16EFF]'
              }`}
              onClick={() => scrollToSection('home')}
            >
              HOME
            </li>
            <li
              className={`cursor-pointer border-transparent  border-b-2 hover:border-white ${
                activeSection === 'about'
                  ? 'text-[#D16EFF] hover:border-white'
                  : 'hover:border-[#D16EFF]'
              }`}
              onClick={() => scrollToSection('about')}
            >
              ABOUT
            </li>
            <li
              className={`cursor-pointer border-transparent  border-b-2 hover:border-white ${
                activeSection === 'timeline'
                  ? 'text-[#D16EFF] hover:border-white'
                  : 'hover:border-[#D16EFF]'
              }`}
              onClick={() => scrollToSection('timeline')}
            >
              TIMELINE
            </li>
            <li
              className={`cursor-pointer border-transparent  border-b-2 hover:border-white ${
                activeSection === 'work'
                  ? 'text-[#D16EFF] hover:border-white'
                  : 'hover:border-[#D16EFF]'
              }`}
              onClick={() => scrollToSection('work')}
            >
              WORK
            </li>

            <li
              className={`cursor-pointer border-transparent  border-b-2 hover:border-white ${
                activeSection === 'contact'
                  ? 'text-[#D16EFF] hover:border-white'
                  : 'hover:border-[#D16EFF]'
              }`}
              onClick={() => scrollToSection('contact')}
            >
              CONTACT
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
