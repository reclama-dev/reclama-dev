// eslint-disable-next-line
import { createBreakpoints } from '@mui/system'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#1D1A05',
    },

    secondary: {
      main: '#E6AA68',
    },

    white: {
      main: '#eeeeee',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '28px',
        },
        h4: {
          fontSize: '20px',
          fontWeight: 400,
        },
      },
    },
  },
})

export default theme
