import { lazy, Suspense } from 'react'
import About from './sections/about/About'
import Hero from './sections/hero/Hero'
import Navbar from './sections/navbar/Navbar'

const Projects = lazy(() => import('./sections/projects/Projects'))
const Contact = lazy(() => import('./sections/contact/Contact'))
const Footer = lazy(() => import('./sections/footer/Footer'))
const Timeline = lazy(() => import('./sections/timeline/Timeline'))

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
        <Suspense fallback={<div>Loading...</div>}>
          <Timeline />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </>
  )
}

export default App
