import { Button } from '@mui/material'
import './footerSyled.css'
function Footer() {
  return (
    <footer>
      <div className="bg-black flex flex-col items-center justify-center">
        <div className="flex space-x-20 pt-3 text-white font-Tektur tracking-widest">
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
        <div className="pt-1.5 pb-5 opacity-100 flex items-center justify-center gap-x-3">
          <span className="text-white opacity-80">Created in beautiful British Columbia by Gyunay</span>
          <img src="/img/canada.svg" alt="canada-flag" width={25} height={25} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
