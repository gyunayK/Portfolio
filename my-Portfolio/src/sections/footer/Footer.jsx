import { Button } from '@mui/material'
import './footerSyled.css'
function Footer() {
  return (
    <footer>
      <div className="bg-black text-center flex flex-col items-center justify-center">
        <div className="flex space-x-20 pt-7 text-white font-Tektur tracking-widest">
          <a
            href="https://github.com/gyunayK"
            target="_blank"
            rel="noopener noreferrer"
            className="lineStyle"
          >
            <Button>GITHUB</Button>
          </a>
          <a
            href="https://www.linkedin.com/in/gyunayk/"
            target="_blank"
            rel="noopener noreferrer"
            className="lineStyle"
          >
            <Button>LINKEDIN</Button>
          </a>
        </div>
        <p className="text-[#acacac] font-Roboto pt-6 pb-2">All rights reserved © 2024 by Gyunay K.</p>
      </div>
    </footer>
  )
}

export default Footer
