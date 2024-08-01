import { Button } from '@mui/material'
import './footerSyled.css'
function Footer() {
  return (
    <footer>
      <div className="bg-black text-center flex flex-col items-center justify-center">
        <div className="flex space-x-20 pt-4 text-white font-Tektur tracking-widest">
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
        <p className="pt-1.5 pb-5 opacity-100"><span className='text-white opacity-80'>Created in beautiful British Columbia by Gyunay</span> 🇨🇦</p>
      </div>
    </footer>
  )
}

export default Footer
