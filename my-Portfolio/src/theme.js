import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Tektur, Arial, sans-serif',
          color: 'inherit',
          fontSize: 'inherit'
        }
      }
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          width: '35px',
          height: '35px',
          padding: '0',
          overflow: 'hidden',
          border: 'none'
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'inherit',
          textDecoration: 'none'
        }
      }
    },
  }
})

export default theme
