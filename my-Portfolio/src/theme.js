import { createTheme } from '@mui/material/styles'
import { m } from 'framer-motion'

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
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h6' },
          style: {
            fontFamily: 'Tektur, Arial, sans-serif',
            fontSize: '1rem',
            fontWeight: 'bolder',
            lineHeight: '1.5',
          }
        },
        {
          props: { variant: 'h7' },
          style: {
            fontSize: '0.9rem',
            fontWeight: 'normal',
          }
        }
      ]
    },
    MuiTimelineOppositeContent: {
      styleOverrides: {
        root: {
          fontFamily: 'Tektur, Arial, sans-serif',
          fontSize: '1rem',
        }
      }
    }
  }
})

export default theme
