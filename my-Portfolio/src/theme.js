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
    }
  }
})

export default theme
