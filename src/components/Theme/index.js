import { createTheme } from '@mui/material/styles'
import * as colors from '@mui/material/colors'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

const theme = createTheme({
  palette: {
    background: {
      paper: '#f0f0f0',
      default: '#e6e6e8',
      foreground: '#BCBCC5',
    },
    primary: { main: '#DC0A2D', light: '#E1415C', dark: '#8C293A' },
    secondary: { main: '#28AAFE', light: '#69BBF1', dark: '#558EB5' },
    info: colors.lightBlue,
    warning: colors.amber,
    error: colors.red,
    success: colors.green,
    text: {
      icon: 'rgba(0,0,0,0.5)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      primary: 'rgba(0, 0, 0, 0.8)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
  typography: {
    fontFamily: ["'Varela Round','sans-serif'"].join(','),
    color:'pink',
  },
});

export default function MuiTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
