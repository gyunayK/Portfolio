import { useState } from 'react'
import useActiveSection from '@/hooks/activeSection_ID'
import useScrollCheck from '@/hooks/useScrollCheck'
import { Button } from '@mui/material'
import './hamburgerStyle.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const activeSection = useActiveSection(0.4)
  const isScrolled = useScrollCheck()

  const scrolledColour = 'black'
  const notScrolledColour = 'white'

  const navIconStyles = {
    backgroundColor: isScrolled ? scrolledColour : notScrolledColour
  }

  const activeSectionColours = (section) => {
    return activeSection === section ? `text-[#D16EFF] hover:border-white` : 'hover:border-[#D16EFF]'
  }

  const scrollToSection = (section) => {
    const headerOffset = window.innerWidth > 768 ? 80 : 0
    const elementPosition = document.getElementById(section).getBoundingClientRect().top
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
        className={`p-7 fixed top-7 right-6 z-50 sm:block md:hidden scale-75 ${isMenuOpen ? 'open' : ''}`}
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
        <div className="max-w-[2000px] mx-auto flex justify-between items-center pt-1 px-10 ">
          <h2 className="hidden md:block text-2xl border-2 text-white rounded-md px-2">GK</h2>
          <ul className="text-lg text-white flex gap-10 items-center justify-center p-4 tracking-wide">
            <li className={`border-transparent border-b-2 ${activeSectionColours('home')}`}>
              <Button onClick={() => scrollToSection('home')}>HOME</Button>
            </li>
            <li className={`border-transparent border-b-2 ${activeSectionColours('about')}`}>
              <Button onClick={() => scrollToSection('about')}>ABOUT</Button>
            </li>
            <li className={`border-transparent border-b-2 ${activeSectionColours('timeline')}`}>
              <Button onClick={() => scrollToSection('timeline')}>TIMELINE</Button>
            </li>
            <li className={` border-transparent border-b-2 ${activeSectionColours('work')}`}>
              <Button onClick={() => scrollToSection('work')}>WORK</Button>
            </li>

            <li className={`border-transparent border-b-2 ${activeSectionColours('contact')}`}>
              <Button onClick={() => scrollToSection('contact')}>CONTACT</Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
