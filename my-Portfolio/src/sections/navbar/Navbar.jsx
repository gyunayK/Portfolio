import { useEffect, useState } from 'react'
import useActiveSection from '@/hooks/activeSection_ID'
import useScrollCheck from '@/hooks/useScrollCheck'
import useSmoothScroll from '@/hooks/useSmoothScroll'
import { Button } from '@mui/material'
import './hamburgerStyle.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useActiveSection()
  const isScrolled = useScrollCheck()
  const scrollTo = useSmoothScroll()

  const navIconStyles = { backgroundColor: isScrolled ? 'black' : 'white' }

  const activeSectionColours = (section) => {
    return activeSection === section ? 'text-[#D16EFF] hover:border-white' : 'hover:border-[#D16EFF]'
  }

  const handleNavClick = (section) => {
    setIsMenuOpen(false)
    scrollTo(section)
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <nav className="font-Tektur z-[9999]">
      <div
        id="nav-icon2"
        className={`p-7 fixed top-7 right-6 z-50 sm:block md:hidden scale-75 ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} style={navIconStyles} />
        ))}
      </div>

      <div
        className={`${
          isScrolled ? 'bg-white text-black' : 'bg-black text-white'
        } w-screen h-full fixed top-0 right-0 transition-transform duration-[200ms] ease-in-out transform z-40 overflow-hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="text-3xl flex flex-col items-center justify-center space-y-4 h-full gap-8">
          {['home', 'about', 'timeline', 'contact'].map((item) => (
            <li key={item} onClick={() => handleNavClick(item)}>
              {item.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`bg-black w-full transition-all duration-200 ease-in-out ${
          isScrolled ? 'h-20' : 'h-0'
        } md:fixed hidden md:block relative z-50`}
      >
        <div className="max-w-[2000px] mx-auto flex justify-between items-center pt-1 px-10">
          <h2 className="hidden md:block text-2xl border-2 text-white rounded-md px-2">GK</h2>
          <ul className="text-lg text-white flex gap-10 items-center justify-center p-4 tracking-wide">
            {['home', 'about', 'timeline', 'contact'].map((item) => (
              <li key={item} className={`border-transparent border-b-2 ${activeSectionColours(item)}`}>
                <Button onClick={() => handleNavClick(item)}>{item.toUpperCase()}</Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
