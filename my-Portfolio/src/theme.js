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
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h5' },
          style: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.25rem'
          }
        },
        {
          props: { variant: 'h6' },
          style: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '1rem'
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
